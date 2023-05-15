import React, { useEffect, useState } from "react"
import classNames from "classnames/bind";
import styles from "./Review.module.scss"
import { FaStar } from "react-icons/fa";
import TextEditor from "src/component/EditorText/EditorText";

const cx = classNames.bind(styles);

export default function Review (){

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [content, setContent] = useState("");
    // const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const currentUser ={
        id: 4,
        userName: "Han Nguyen",
        stars: 3,
        photoURL: "https://screenrant.com/wp-content/uploads/2017/04/Guardians-of-the-Galaxy-Milano-Concept-Art.jpg",
        comment: "haha",
    }
    const data = [
      {
        id: 1,
        userName: "Dong Pham",
        stars: 3,
        photoURL: "https://screenrant.com/wp-content/uploads/2017/04/Guardians-of-the-Galaxy-Milano-Concept-Art.jpg",
        comment: "ok"
      },
      {
        id: 2,
        userName: "Hieu Ngo",
        stars: 2,
        photoURL: "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
        comment: "good"
      },
    ]
    useEffect (() =>{
      setRating(currentUser.stars)
    });

    const handleSave = () =>{

    }
    const handleCancel = () =>{

    }
    const handleSend = () =>{
      
    }
    return(
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <h3>Review</h3>
                <div className={cx("review")}>
                    <div className={cx("user-infor")}>
                        <img src="
                        https://screenrant.com/wp-content/uploads/2017/04/Guardians-of-the-Galaxy-Milano-Concept-Art.jpg
                        " alt="" />
                    </div>
                    <div className={cx("write-review")}>
                        <div className={cx("stars")}>
                            { 
                            [...Array(5)].map((star, i) => {
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
                        <div className={cx("send")} key={data.id}>
                            <div className={cx("input-group")} key ={data.id}>
                                <TextEditor setContentBlog={setContent} sHidderTools={true}
                                    defaultValueProps={currentUser.comment}
                                 />
                            </div>
                            {/* <input type="text" placeholder="Write your comment..." /> */}
                            
                            {!currentUser.comment ?
                                <div className={cx("send-button")} onClick={handleSend}>
                                  <ion-icon name="send"></ion-icon>
                                </div>
                              :
                                <div className={cx("buttons")}>
                                    <button className={cx("save-button")} onClick={handleSave} >Save</button>
                                    <button className={cx("cancel-button")} onClick={handleCancel}>Cancel</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {/* comment */}
                <div className={cx("display-comments")}>
                    <div className={cx("line")}></div>
                    <h4>Rate & Comment fromm Customer</h4>
                    <div className={cx("comments")}>
                    {data.map((doc) =>(
                      <div className={cx("user-comment")}>
                        <div className={cx("user-infor")}>
                          <img src={doc.photoURL} alt="" />
                        </div>
                        <div className={cx("comment-group")}>
                          <div className={cx("head")}>
                            <h4>{doc.userName}</h4>
                            <div className={cx("small-stars")}>
                              {[...Array(doc.stars)].map((stars, index) => {
                                return <FaStar size={10} color="#ffc107" />;
                              })}
                            </div>
                          </div>
                          <div className={cx("comment-content")}>
                            {doc.comment}
                          </div>
                        </div>
                      </div>
                    ))
                    }
                    </div>
                </div>
            </div>

        </div>
    )
}