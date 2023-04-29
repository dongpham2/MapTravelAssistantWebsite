import React, { useEffect, useState, useRef, useContext } from "react";
import classNames from "classnames/bind";

import styles from "./ChatBox.module.scss";
import { ChatContext } from "./context/ChatContext";

const cx = classNames.bind(styles);

export default function Message({message}) {
    const {data} = useContext(ChatContext)
    
    const ref = useRef()
    const currentUser = {
        uid : "IrzDfxSJZQO1cn4zDd1zZCh6DZ42", 
        email: "han1@gmail.com",
        photoURL: "https://uploads.mwp.mprod.getusinfo.com/uploads/sites/54/2022/02/Image-for-Rejoining-Paris-Agreement.jpeg",
        displayName: "Han1"
    } 
    useEffect(() =>{
        ref.current?.scrollIntoView({behavior:"smooth"})
           
    }, [message])
    return(
        <div ref={ref} key={message.id} className={`${styles.message} ${message.senderId === currentUser.uid && styles.owner}`} >
                        <div className={styles.messageInfo}>
                            <img src={message.senderId === currentUser.uid ? currentUser.photoURL: data.user.photoURL} alt="" />
                        </div>
                        {/* Content */}
                        <div className={styles.messageContent}>
                            <p>{message.text}</p>
                            {message.img &&
                                <img src={message.img} alt="" />}
                        </div>
                    </div>
    )
}
