import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Review.module.scss";
import { FaStar } from "react-icons/fa";
import TextEditor from "src/component/EditorText/EditorText";
import { useDispatch, useSelector } from "react-redux";
import httpClient from "src/api/httpClient";
import {
  FieldValue,
  Timestamp,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { db, storage } from "src/service/Firebase/firebase";
import { toast } from "react-toastify";
import Loading from "src/component/Loading/Loading";
import images from "src/assets/images";

const cx = classNames.bind(styles);

export default function Review(props) {
  const [loading, setLoading] = useState(false);
  const { auth } = useSelector((state) => state);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [content, setContent] = useState("");
  // const [data, setData] = useState([]);
  const [allReview, setAllReview] = useState([]);
  const [currentReview, setCurrentReview] = useState(null);

  const formatTimestamp = (timestamp) => {
    const dateObj = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    const formattedDate = dateObj.toLocaleDateString(); // Format date
    const formattedTime = dateObj.toLocaleTimeString(); // Format time
    return `${formattedDate} ${formattedTime}`;
  };

  const currentUser = {
    _id: auth.user.userID,
    fullname: auth.user.fullName,
    avatar: auth.user.avatar,
  };
  const pageID = "1111";

  useEffect(() => {
    // let docs = [];
    const unsub = onSnapshot(doc(db, "reviews", pageID), (doc) => {
      doc.exists() && setAllReview(doc.data().comments);
      doc.data().comments.map((item) => {
        if (currentUser._id === item.reviewerID) {
          setCurrentReview(item.text);
          setRating(item.stars);
        }
      });
    });
    return () => {
      unsub();
    };
  }, [pageID]);

  const getCurrentReview = async () => {
    try {
      const querySnapshot = await getDoc(doc(db, "reviews", pageID));

      if (querySnapshot.exists()) {
        let docs = [];
        querySnapshot.data().comments.map((item) => {
          docs.push({ reviewerID: item.reviewerID, ...item });
        });

        console.log(docs);
        setAllReview(docs);
        console.log("ava", allReview);
        docs.map((item) => {
          if (currentUser._id === item.reviewerID) {
            setCurrentReview(item.text);
            setRating(item.stars);
          }
        });
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleSave = async () => {
    let docs = allReview;
    docs.map((item) => {
      if (currentUser._id === item.reviewerID) {
        item.text = !content ? currentReview : content;
        item.stars = rating;
        item.date = Timestamp.now();
      }
    });
    try {
      await setDoc(doc(db, "reviews", pageID), {
        comments: docs,
      });

      toast.success("Review successful");
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancel = () => {
    console.log("au", auth.user);
    return;
  };
  const handleSend = async () => {
    // console.log(allReview);
    if (content === "" || rating == null) {
      window.alert("You have not commented or not rated yet");
      return;
    }
    console.log(auth.user.avatar);
    try {
      await updateDoc(doc(db, "reviews", pageID), {
        comments: arrayUnion({
          reviewerID: currentUser._id,
          avatar:
            currentUser.avatar == null
              ? images.avt_default
              : currentUser.avatar,
          fullname: currentUser.fullname,
          text: content,
          stars: rating,
          date: Timestamp.now(),
        }),
      });

      toast.success("Review successful");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <h3>Review</h3>
        <div className={cx("review")}>
          <div className={cx("user-infor")}>
            {auth.user.avatar ? (
              <img
                className={cx("avatar-img")}
                src={auth.user.avatar}
                alt="avt"
              />
            ) : (
              <img src={images.avt_default} className={cx("avatar-img")} />
            )}
          </div>
          <div className={cx("write-review")}>
            <div className={cx("stars")}>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                      className={cx("start-icon")}
                      size={30}
                      color={
                        ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
            <div className={cx("send")}>
              <div className={cx("input-group")}>
                {currentReview ? (
                  <TextEditor
                    setContentBlog={setContent}
                    sHidderTools={true}
                    defaultValueProps={currentReview}
                  />
                ) : (
                  <TextEditor
                    setContentBlog={setContent}
                    sHidderTools={true}
                    // defaultValueProps={currentReview.text}
                  />
                )}
              </div>
              {/* <input type="text" placeholder="Write your comment..." /> */}
              {!currentReview ? (
                <div className={cx("send-button")} onClick={handleSend}>
                  <ion-icon name="send"></ion-icon>
                </div>
              ) : (
                <div className={cx("buttons")}>
                  <button className={cx("save-button")} onClick={handleSave}>
                    Save
                  </button>
                  <button
                    className={cx("cancel-button")}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* comment */}
        <div className={cx("display-comments")}>
          <div className={cx("line")}></div>
          <h4>Rate & Comment from Customer</h4>
          <div className={cx("comments")}>
            {loading && <Loading />}
            {allReview.map((doc) => (
              <div className={cx("user-comment")}>
                <div className={cx("user-infor")}>
                  <img src={doc.avatar} alt="" />
                </div>
                <div className={cx("comment-group")}>
                  <div className={cx("head")}>
                    <h4>{doc.fullname}</h4>
                    <div className={cx("small-stars")}>
                      {[...Array(doc.stars)].map((stars, index) => {
                        return <FaStar size={10} color="#ffc107" />;
                      })}
                    </div>
                    <div className={cx("time-review")}>
                      {/* {formatTimestamp(doc.date.seconds)} */}
                    </div>
                  </div>
                  <div
                    className={cx("comment-content")}
                    dangerouslySetInnerHTML={{
                      __html: doc.text,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
