import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "src/service/Firebase/firebase";
import ChatBox from "../ChatBox";
import styles from "./ChatList.module.scss";
import { ChatContext } from "../context/ChatContext";
import { useDispatch, useSelector } from "react-redux";
import httpClient from "src/api/httpClient";
import images from "src/assets/images";

const cx = classNames.bind(styles);
export default function ChatList() {
  const { auth } = useSelector((state) => state);
  const [showChatList, setShowChatList] = useState(true);
  const [showchatBox, setShowChatBox] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);
  const { dispatch } = useContext(ChatContext);

  const currentUser = {
    _id: auth.user.userID,
    email: auth.user.email,
    avatar: images.avt_default,
    fullname: auth.user.fullName,
  };

  useEffect(() => {
    getAllDocuments();
  }, []);

  const handleClose = () => {
    setShowChatList(false);
  };
  const handleOpenUser = async (user) => {
    //check group chat exist if not create
    const combinedId =
      currentUser._id > user._id
        ? currentUser._id + user._id
        : user._id + currentUser._id;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      // console.log(res);
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        //create user chats
        // const res = await getDoc(doc(db, "userChats", currentUser._id));
        // const res2 = await getDoc(doc(db, "userChats", user._id));
        // if (!res.exists()) {
        //   await setDoc(doc(db, "userChats", currentUser._id), {
        //     [combinedId + ".userInfo"]: {
        //       _id: user._id,
        //       fullname: user.fullname,
        //       avatar: currentUser.avatar ? images.avt_default : user.avatar,
        //     },
        //     [combinedId + ".date"]: serverTimestamp(),
        //   });
        // } else {
        //   await updateDoc(doc(db, "userChats", currentUser._id), {
        //     [combinedId + ".userInfo"]: {
        //       _id: user._id,
        //       fullname: user.fullname,
        //       avatar: user.avatar ? images.avt_default : user.avatar,
        //     },
        //     [combinedId + ".date"]: serverTimestamp(),
        //   });
        // }
        //create user chats
        // if (!res2.exists()) {
        //   await setDoc(doc(db, "userChats", user._id), {
        //     [combinedId + ".userInfo"]: {
        //       _id: currentUser._id,
        //       fullname: currentUser.fullname,
        //       avatar: currentUser.avatar
        //         ? images.avt_default
        //         : currentUser.avatar,
        //     },
        //     [combinedId + ".date"]: serverTimestamp(),
        //   });
        // } else {
        //   await updateDoc(doc(db, "userChats", user._id), {
        //     [combinedId + ".userInfo"]: {
        //       _id: currentUser._id,
        //       fullname: currentUser.fullname,
        //       // avatar: currentUser.avatar,
        //     },
        //     [combinedId + ".date"]: serverTimestamp(),
        //   });
        // }
      }
    } catch (err) {
      console.log(err);
    }
    !showchatBox ? setShowChatBox(true) : setShowChatBox(false);
    // setUser(null);
    // setUsername("")
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  const getAllDocuments = async () => {
    httpClient
      .get("/users")
      .then((res) => {
        const person = res.data;
        person.shift();
        setUsers(person);
      })
      .catch((error) => console.log(error));

    // const querySnapshot = await getDocs(collection(db, "users"));
    // const docs = [];
    // querySnapshot.forEach((doc) => {
    //   docs.push({ email: doc.email, ...doc.data() });
    // });
    // setUsers(docs); //console.log(user)
  };

  const handleSearch = async (event) => {
    const inputUser = event.target.value.toLowerCase();
    setErr(false);
    if (inputUser === "") {
      getAllDocuments();
    } else {
      let docs = [];
      users.forEach((doc) => {
        if (doc.fullname.toLowerCase().includes(inputUser) === true) {
          docs.push({ email: doc.email, ...doc });
        }
      });
      if (docs != "") {
        setUsers(docs);
      } else {
        setErr(true);
      }
    }
  };
  return (
    <div className={cx("wrapper")}>
      {showChatList && (
        <div className={cx("chatlist")}>
          {/* Seacrh & Close */}
          <div className={cx("head")}>
            <input
              type="text"
              placeholder="Find a user..."
              onChange={handleSearch}
              // value={username}
            />
            <div className={cx("close")} onClick={handleClose}>
              Close
            </div>
          </div>
          {/* User Info */}
          <div className={cx("userInfo")}>
            {err && <span>User not found</span>}
            {!users
              ? null
              : users.map((doc) => (
                  <div
                    // key={doc.email}
                    className={cx("userChatInfo")}
                    onClick={() => handleOpenUser(doc)}
                  >
                    <img
                      src={doc.avatar == null ? images.avt_default : doc.avatar}
                      alt=""
                    />
                    <span>{doc.fullname}</span>
                  </div>
                ))}
          </div>
          {showchatBox && <ChatBox />}
        </div>
      )}
    </div>
  );
}
