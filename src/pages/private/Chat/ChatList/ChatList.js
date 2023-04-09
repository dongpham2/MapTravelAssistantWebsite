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
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const handleClose =()=>{
        setShowChatList(false)
    }

    const handleOpenUser = () =>{
        setShowChatBox(!showchatBox)
    }

    const handleSearch = async () =>{
        const q = query(
            collection(db, "users"), 
            where("displayName", "==", username)
        );
        try{
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{
            console.log(doc.id, " => ", doc.data());
            setUser(doc.data())
        });
        }catch(err){
            setErr(true)
        }

    };

    const handleKey = (e) =>{
        e.code === "Enter" && handleSearch();
    }

    return (
      <div className={styles.wrapper}>
        {showChatList && (
        <div className={styles.chatlist}>
            {/* Seacrh & Close */}
            <div className={styles.head}>
                    <input type="text" placeholder="Find a user..." onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} />
                <div className={styles.close} onClick={handleClose} >
                    <ion-icon 
                        name="close-outline"
                        ></ion-icon>
                </div>
                
            </div>
            {/* User Info */}
            <div className={styles.userInfo}>
                {err && <span>User not found</span>}
                {user &&
                <div className={styles.userChatInfo} onClick={handleOpenUser} >
                    <img src={user.photoURL}
                    alt="" />
                    <span>{user.displayName}</span>
                </div>
                }
                
            </div>
        </div>)}
            {showchatBox && <ChatBox/>}

        
      </div>
    );
  }