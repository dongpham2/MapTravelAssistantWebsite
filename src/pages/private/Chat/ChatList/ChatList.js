import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import ChatBox from "../ChatBox";
import styles from "./ChatList.module.scss";

// import DetailBar from "./DetailBar";
// import getPlacesData from "../../../api/googleClientApi";
// import getPlacesData from "./api";
const cx = classNames.bind(styles);
export default function ChatList() {
    const[showChatList, setShowChatList] = useState(true);
    const[showchatBox, setShowChatBox] = useState(false);

    const handleClose =()=>{
        setShowChatList(false)
    }
    const handleOpenUser = () =>{
        setShowChatBox(!showchatBox)
    }
    return (
      <div className={styles.wrapper}>
        {showChatList && (
        <div className={styles.chatlist}>
            {/* Seacrh & Close */}
            <div className={styles.head}>
                    <input type="text" placeholder="Find a user..." />
                <div className={styles.close} onClick={handleClose} >
                    <ion-icon 
                        name="close-outline"
                        ></ion-icon>
                </div>
                
            </div>
            {/* User Info */}
            <div className={styles.userInfo}>
                <div className={styles.userChatInfo} onClick={handleOpenUser} >
                    <img src="
                    https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/339454926_187296963628915_2303563453557099962_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=KRaNQ0i-83wAX8Z3A4G&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCtI4vtNtWpRCkMENiSCCP3_jPTzMCFhnGi6TDV273B-w&oe=6433297E
                    " alt="" />
                    <span>Uchiha Haha</span>
                </div>
                <div className={styles.userChatInfo} onClick={handleOpenUser} >
                    <img src="
                    https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/339454926_187296963628915_2303563453557099962_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=KRaNQ0i-83wAX8Z3A4G&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCtI4vtNtWpRCkMENiSCCP3_jPTzMCFhnGi6TDV273B-w&oe=6433297E
                    " alt="" />
                    <span>Uchiha Haha</span>
                </div>
                <div className={styles.userChatInfo} onClick={handleOpenUser} >
                    <img src="
                    https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/339454926_187296963628915_2303563453557099962_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=KRaNQ0i-83wAX8Z3A4G&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCtI4vtNtWpRCkMENiSCCP3_jPTzMCFhnGi6TDV273B-w&oe=6433297E
                    " alt="" />
                    <span>Uchiha Haha</span>
                </div>
            </div>
        </div>)}
            {showchatBox && <ChatBox/>}

        
      </div>
    );
  }