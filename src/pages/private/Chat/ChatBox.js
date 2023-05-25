import React, { useEffect, useState, useRef, useContext } from "react";
import classNames from "classnames/bind";

import styles from "./ChatBox.module.scss";
import { ChatContext } from "./context/ChatContext";
import {
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "src/service/Firebase/firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Message from "./Message";
import TextEditor from "src/component/EditorText/EditorText";
import { useDispatch, useSelector } from "react-redux";
import images from "src/assets/images";

const cx = classNames.bind(styles);
export default function Chat() {
  const { auth } = useSelector((state) => state);

  const [content, setContent] = useState("");
  const { data } = useContext(ChatContext);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [file, setFile] = useState(null);

  const currentUser = {
    _id: auth.user.userID,
    email: auth.user.email,
    avatar: auth.user.avatar,
    fullname: auth.user.fullname,
  };
  useEffect(() => {
    // console.log(content);s
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unsub();
    };
  }, [data.chatId]);

  const handleSend = async () => {
    // console.log(content);

    if (img) {
      // console.log("a1", content);
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      // console.log("task", uploadTask);
      uploadTask.on(
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text: content,
                senderId: currentUser._id,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      if (content === "" && img == null) return;
      // console.log("b1", content);
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text: content,
          senderId: currentUser._id,
          date: Timestamp.now(),
        }),
      });
    }

    // await updateDoc(doc(db, "userchats", currentUser.uid), {
    //     [data.chatId + ".lastMessage"]: {
    //         text
    //     },
    //     [data.chatId+".date"]:serverTimestamp(),
    // })
    // await updateDoc(doc(db, "userchats", data.user.uid), {
    //     [data.chatId + ".lastMessage"]: {
    //         text
    //     },
    //     [data.chatId+".date"]:serverTimestamp(),
    // })
    setContent("");
    setText("");
    setImg(null);
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("chatbox")}>
        {/* Chat Infor */}
        <div className={cx("user-infor")}>
          <div className={cx("user")}>
            <img
              src={
                data.user.avatar == null ? images.avt_default : data.user?.data
              }
              alt=""
            />
            <span>{data.user?.fullname}</span>
          </div>
          <div className={cx("chat-icons")}>
            <ion-icon name="call"></ion-icon>
            <ion-icon name="videocam"></ion-icon>
          </div>
        </div>
        {/* Messages */}
        <div className={cx("messages")}>
          {messages.map((m) => (
            // {/* Message */}
            <Message message={m} />
          ))}
        </div>
        {/* input */}
        <div className={cx("input")}>
          <div className={cx("input-icons")}>
            <input
              type="file"
              style={{ display: "none" }}
              id="file"
              onChange={(e) => setImg(e.target.files[0])}
            />
            <label htmlFor="file">
              <ion-icon name="camera"></ion-icon>
            </label>
          </div>
          <div className={cx("input-icons")}>
            <input type="file" style={{ display: "none" }} id="attach" />
            <label htmlFor="attach">
              <ion-icon name="attach-outline"></ion-icon>
            </label>
          </div>
          <div className={cx("textarea")}>
            {/* <input type="text" onChange={e=>setText(e.target.value)} /> */}
            <TextEditor
              setContentBlog={setContent}
              sHidderTools={true}
              defaultValueProps={content}
            />
          </div>
          <div className={cx("send-icons")} onClick={handleSend}>
            <ion-icon name="send"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
