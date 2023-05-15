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
import TextEditor from "src/component/EditorText/EditorText";

const cx = classNames.bind(styles);
export default function Chat(props) {

    const [content, setContent] = useState("");
    const {data} = useContext(ChatContext)
    const [chats, setChats] = useState([])
    const [messages, setMessages] = useState([])
    const [text, setText] = useState("")
    const [img, setImg] = useState(null)
    const [file, setFile] = useState(null)
    // TextEditor = styled.textarea`
    //     placeholder="Write something ..."
    // `

    const currentUser = {
        // uid : "IrzDfxSJZQO1cn4zDd1zZCh6DZ42", 
        // email: "han1@gmail.com",
        // photoURL: "https://uploads.mwp.mprod.getusinfo.com/uploads/sites/54/2022/02/Image-for-Rejoining-Paris-Agreement.jpeg",
        // displayName: "Han1"
        uid : "c5uMl82RvwY4gyKJ15JC69rBt1K3", 
        email: "user1@gmail.com",
        photoURL: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/webbdeepfield.jpg?w=1600&h=900",
        displayName: "user1"
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
        // console.log(content)
        if(content === "") return
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
                                text: content,
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
                    text: content,
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
        setContent("")
        setText("")
        setImg(null)
    };

    return (
    <div className={cx("wrapper")} ref={ref}>
        <div className={cx("chatbox")} >
            {/* Chat Infor */}
            <div className={cx("user-infor")} >
                <div className={cx("user")}>
                    <img src={data.user?.photoURL} alt="" />
                    <span>{data.user?.displayName}</span>
                </div>
                <div className= {cx("chat-icons")}>
                    <ion-icon name="call"></ion-icon>
                    <ion-icon name="videocam"></ion-icon> 
                </div>
            </div>
            {/* Messages */}
            <div className={cx("messages")}>
                {messages.map((m) =>(
                    // {/* Message */}
                    <Message message={m} />
                ))} 
            </div>
            {/* input */}
            <div className={cx("input")}>
                <div className={cx("input-icons")} >
                    <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])} />
                    <label htmlFor="file">
                        <ion-icon name="camera"></ion-icon>
                    </label>
                </div>
                <div className={cx("input-icons")} >
                    <input type="file" style={{display:"none"}} id="attach"  />
                    <label htmlFor="attach">
                        <ion-icon name="attach-outline"></ion-icon>
                    </label>
                </div>
                <div className={cx("textarea")}>
                    {/* <input type="text" onChange={e=>setText(e.target.value)} /> */}
                    {/* <TextareaAutosize
                        minRows={1} // giới hạn tối đa 1 dòng
                        maxRows={10} // giới hạn tối đa 10 dòng (nếu cần)
                        placeholder="Type something..."
                        onChange={e=>setText(e.target.value)}
                    /> */}
                    <TextEditor setContentBlog={setContent} sHidderTools={true}
                                 />
                </div>
                <div className={cx("send-icons")} onClick={handleSend}>
                    <ion-icon name="send"></ion-icon>
                </div>
            </div>
        </div>
    </div>
    ) 
}