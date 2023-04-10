import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import {collection, query, where, getDocs, doc, getDoc} from "firebase/firestore"
import {db} from "../firebase"
import ChatBox from "../ChatBox";
import styles from "./ChatList.module.scss";

// import DetailBar from "./DetailBar";
// import getPlacesData from "../../../api/googleClientApi";
// import getPlacesData from "./api";
const cx = classNames.bind(styles);
export default function ChatList() {
    const[showChatList, setShowChatList] = useState(true);
    const[showchatBox, setShowChatBox] = useState(false);
    
    const [username, setUsername] = useState("")
    const [user, setUser] = useState([])
    const [err, setErr] = useState(false)
    
    useEffect(() =>{
        getAllDocuments()
    }, [])

    const handleClose =()=>{
        setShowChatList(false)
    }
    const handleOpenUser = () =>{
        setShowChatBox(!showchatBox)
    }

    const getAllDocuments = async () =>{
        const querySnapshot = await getDocs(collection(db, "users"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ email: doc.email, ...doc.data() });
        });
        setUser(docs) ;//console.log(user)
    }

    const handleSearch = async (event) =>{
        const inputUser = event.target.value.toLowerCase()
        setErr(false)
        if(inputUser === ""){
            getAllDocuments();
        }
        else{
            let docs = [];
            user.forEach((doc) =>{
                if(doc.displayName.toLowerCase().includes(inputUser) === true)
                { 
                    docs.push({email: doc.email, ...doc})}
            })
            if(docs != ""){
                setUser(docs)
            }else{setErr(true)}
        }
    };

    // const handleKey = (e) =>{
    //     e.code === "Enter" && handleSearch();
    // }
    return (
      <div className={styles.wrapper}>
        {showChatList && (
        <div className={styles.chatlist}>
            {/* Seacrh & Close */}
            <div className={styles.head}>
                    <input type="text" placeholder="Find a user..."  onChange={(handleSearch)} />
                <div className={styles.close} onClick={handleClose} >
                    <ion-icon 
                        name="close-outline"
                        ></ion-icon>
                </div>
                
            </div>
            {/* User Info */}
            <div className={styles.userInfo}>
                {err && <span>User not found</span>}
                {!user ? null :user.map(doc =>(
                    <div key={doc.email} className={styles.userChatInfo} onClick={handleOpenUser} >
                        <img src={doc.photoURL}
                        alt="" />
                        <span>{doc.displayName}</span>
                    </div>
                ))}
            </div>
        </div>)}
            {showchatBox && <ChatBox/>}
      </div>
    );
  }