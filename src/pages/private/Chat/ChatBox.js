import React, { useEffect, useState, useRef, useContext } from "react";
import classNames from "classnames/bind";

 
import styles from "./ChatBox.module.scss";
import { ChatContext } from "./context/ChatContext";
import { onSnapshot, doc, updateDoc, arrayUnion, Timestamp, serverTimestamp } from "firebase/firestore";
import { db, storage } from "./firebase"
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Message from "./Message";
import TextareaAutosize from 'react-textarea-autosize';

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

    const handleSend = async () =>{
        if(img){
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);
            uploadTask.on(
                (error)=>{},
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

    return (
    <div className={styles.wrapper} ref={ref}>
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
                    // {/* Message */}
                    <Message message={m} />
                ))} 
            </div>
            {/* input */}
            <div className={styles.input}>
                <div className={styles.inputIcons} >
                    <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])} />
                    <label htmlFor="file">
                        <ion-icon name="camera"></ion-icon>
                    </label>
                </div>
                <div className={styles.inputIcons} >
                    <input type="file" style={{display:"none"}} id="attach"  />
                    <label htmlFor="attach">
                        <ion-icon name="attach-outline"></ion-icon>
                    </label>
                </div>
                <div className={styles.textarea}>
                    <TextareaAutosize
                        minRows={1} // giới hạn tối đa 1 dòng
                        maxRows={10} // giới hạn tối đa 10 dòng (nếu cần)
                        placeholder="Type something..."
                    />
                </div>
                <div className={styles.inputIcons} onClick={handleSend}>
                    <ion-icon name="send"></ion-icon>
                </div>
            </div>
        </div>
        {/* </Draggable> */}
    </div>
    ) 
}