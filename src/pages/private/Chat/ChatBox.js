import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import ChatList from "./ChatList/ChatList";
import Draggable from 'react-draggable';

import styles from "./ChatBox.module.scss";


// import DetailBar from "./DetailBar";
// import getPlacesData from "../../../api/googleClientApi";
// import getPlacesData from "./api";
const cx = classNames.bind(styles);
export default function Chat() {
    const [showChatBoxForm, setShowChatBoxForm] = useState(true);

    const handleCloseForm = () => {
        setShowChatBoxForm(false);
      }
      const handleOpen = () => {
        setShowChatBoxForm(true);
      }

      const parentRef = useRef(null);

      const handleDrag = (e, ui) => {
        const { x, y } = ui;
        parentRef.current.querySelector('.child').style.transform = `translate(${x}px, ${y}px)`;
  };


    const messageInput = document.getElementById("message-input");

    if(messageInput){
        messageInput.addEventListener("input", () => {
        messageInput.style.height = "auto";
        messageInput.style.height = messageInput.scrollHeight + "px";
        });
    }
 

    return (
    <div className={styles.wrapper} id="myForm" >
        {/* <button onClick={handleOpen}>Show</button> */}
        {showChatBoxForm && (
            // <Draggable>
        <div className={styles.chatbox} >
            {/* Chat Infor */}
            <div className={styles.userInfor} >
                <div className={styles.user}>
                    <img src="
                    https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/338908937_208501041874651_5125055509384339581_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=FuJ5Hf5XApwAX-r9kMu&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAdHd43_isyAeW6iPZEweR2L3mfBvJvd-sXU_3dbjQi8A&oe=6431A31D
                    " alt="" />
                    <span>Thanos</span>
                </div>
                <div className= {styles.chatIcons}>
                    <ion-icon name="call"></ion-icon>
                    <ion-icon name="videocam"></ion-icon>
                    <div className={styles.close} id="close" onClick={handleCloseForm}>
                        <ion-icon 
                            name="close-outline"
                            style={{"margin-right":"0px", "font-size":"30px"}}
                            ></ion-icon>
                    </div> 
                </div>
            </div>
            
            {/* Messages */}
            <div className={styles.messages}>
                {/* Message */}
                <div className={cx("message", "owner")} >
                    <div className={styles.messageInfo}>
                        <img src="
https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg
                        " alt="" />
                    </div>
                    {/* Content */}
                    <div className={styles.messageContent}>
                        <p>Helooooooooooooooo</p>
                        <img src="
                        // https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg
                        " alt="" />
                    </div>
                </div>

                
            </div>
            {/* input */}
            <div className={styles.input}>
                <div className={styles.inputIcons} style={{"display":"flex"}}>
                    <input type="file" style={{display:"none"}} id="file" />
                    <label htmlFor="file">
                        <ion-icon name="camera"></ion-icon>
                    </label>
                </div>
                <div className={styles.inputIcons} style={{"display":"flex"}}>
                    <input type="file" style={{display:"none"}} id="file" />
                    <label htmlFor="file">
                        <ion-icon name="attach-outline"></ion-icon>
                    </label>
                </div>
                
                <input type="text" placeholder="Write here..." />
                {/* <div className={styles.messageBox} style={{"align-items":"center", "display":"flex"}}>
                    <textarea className={styles.messageinput} id="message-input" placeholder="Write here..."></textarea>
                </div> */}
                
                <div className={styles.inputIcons}>
                    <ion-icon name="send"></ion-icon>
                </div>
            </div>
        </div>
        // </Draggable>
        )}
        
        {/* <ChatList/> */}
    </div>
)
    
}