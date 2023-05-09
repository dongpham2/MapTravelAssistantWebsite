import React, { useEffect, useState, useRef, useContext } from "react";
import classNames from "classnames/bind";

import styles from "./ChatBox.module.scss";
import { ChatContext } from "./context/ChatContext";

const cx = classNames.bind(styles);

export default function Message({message}) {
    const {data} = useContext(ChatContext)
    
    const ref = useRef()
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
    useEffect(() =>{
        ref.current?.scrollIntoView({behavior:"smooth"})
           
    }, [message])
    return(
        <div ref={ref} key={message.id} className={`${styles.message} ${message.senderId === currentUser.uid && styles.owner}`} >
                        <div className={cx("message-info")}>
                            <img src={message.senderId === currentUser.uid ? currentUser.photoURL: data.user.photoURL} alt="" />
                        </div>
                        {/* Content */}
                        <div className={cx("message-content")}>
                            <span
                            dangerouslySetInnerHTML={{
                                __html:message.text
                            }}
                            ></span>
                            {message.img &&
                                <img src={message.img} alt="" />}
                        </div>
                    </div>
    )
}
