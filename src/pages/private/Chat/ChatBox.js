import React, { useEffect, useState, useRef, useContext } from "react";
import classNames from "classnames/bind";
import Draggable from 'react-draggable';
 
import styles from "./ChatBox.module.scss";
import { ChatContext } from "./context/ChatContext";
import { onSnapshot, doc, updateDoc, arrayUnion, Timestamp, serverTimestamp } from "firebase/firestore";
import { db, storage } from "./firebase"
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// import DetailBar from "./DetailBar";
// import getPlacesData from "../../../api/googleClientApi";
// import getPlacesData from "./api";
const cx = classNames.bind(styles);
export default function Chat(props) {
    const {data} = useContext(ChatContext)
    const [chats, setChats] = useState([])
    const [messages, setMessages] = useState([])
    const [text, setText] = useState("")
    const [img, setImg] = useState(null)
    const [file, setFile] = useState(null)

    const currentUser = {
        uid : "IrzDfxSJZQO1cn4zDd1zZCh6DZ42", 
        email: "han1@gmail.com",
        photoURL: "https://uploads.mwp.mprod.getusinfo.com/uploads/sites/54/2022/02/Image-for-Rejoining-Paris-Agreement.jpeg",
        displayName: "Han1"
    } 
    useEffect (() =>{
        const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) =>{
            doc.exists() && setMessages(doc.data().messages)
        })
        return() =>{
            unsub()
        }
    }, [data.chatId])
    console.log(messages)

    const handleSend = async () =>{
        if(img){
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);
            uploadTask.on(
                (error)=>{
                    //
                },
                () =>{
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            )
        }else{
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
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
        setText("")
        setImg(null)
    };
    // const parentRef = useRef(null);
    // const handleDrag = (e, ui) => {
    //   const { x, y } = ui;
    //   parentRef.current.querySelector('.child').style.transform = `translate(${x}px, ${y}px)`;
    // };


    // const messageInput = document.getElementById("message-input");

    // if(messageInput){
    //     messageInput.addEventListener("input", () => {
    //     messageInput.style.height = "auto";
    //     messageInput.style.height = messageInput.scrollHeight + "px";
    //     });
    // }
 
    return (
    <div className={styles.wrapper} id="myForm" >
        {/* <Draggable> */}
        <div className={styles.chatbox} >
            {/* Chat Infor */}
            <div className={styles.userInfor} >
                <div className={styles.user}>
                    <img src={data.user?.photoURL} alt="" />
                    <span>{data.user?.displayName}</span>
                </div>
                <div className= {styles.chatIcons}>
                    <ion-icon name="call"></ion-icon>
                    <ion-icon name="videocam"></ion-icon>
                    
                </div>
            </div>
            
            {/* Messages */}
            <div className={styles.messages}>
                {messages.map((m) =>(
                    // {/* Message */}cx("message", "owner")
                    <div key={m.id} className={`${styles.message} ${m.senderId === currentUser.uid && styles.owner}`} >
                        <div className={styles.messageInfo}>
                            <img src={m.senderId === currentUser.uid ? currentUser.photoURL: data.user.photoURL} alt="" />
                        </div>
                        {/* Content */}
                        <div className={styles.messageContent}>
                            <p>{m.text}</p>
                            {m.img &&
                                <img src={m.img} alt="" />}
                        </div>
                    </div>
                ))} 
            </div>
            {/* input */}
            <div className={styles.input}>
                <div className={styles.inputIcons} style={{"display":"flex"}}>
                    <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])} />
                    <label htmlFor="file">
                        <ion-icon name="camera"></ion-icon>
                    </label>
                </div>
                <div className={styles.inputIcons} style={{"display":"flex"}}>
                    <input type="file" style={{display:"none"}} id="attach"  />
                    <label htmlFor="attach">
                        <ion-icon name="attach-outline"></ion-icon>
                    </label>
                </div>
                
                <input type="text" placeholder="Write here..." onChange={e=>setText(e.target.value)} value={text} />
                {/* <div className={styles.messageBox} style={{"align-items":"center", "display":"flex"}}>
                    <textarea className={styles.messageinput} id="message-input" placeholder="Write here..."></textarea>
                </div> */}
                
                <div className={styles.inputIcons} onClick={handleSend}>
                    <ion-icon name="send"></ion-icon>
                </div>
            </div>
        </div>
        {/* </Draggable> */}
    </div>
)
    
}