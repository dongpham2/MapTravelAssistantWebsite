import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Chat.module.scss";
// import DetailBar from "./DetailBar";
// import getPlacesData from "../../../api/googleClientApi";
// import getPlacesData from "./api";
const cx = classNames.bind(styles);
export default function Chat() {
  return <div className={styles.wrapper}>
    <div className={styles.chatBox}>
        {/* //Sidebar */}
        <div className={styles.sidebar}>
            {/* Navbar */}
            <div className={styles.navbar}>
                <span className={styles.logo}>Chats</span>
                <div className={styles.user}>
                    <img src="" alt="" />
                    <span>Hannn</span>
                </div>
            </div>
            {/* Search */}
            <div className={styles.search}>
                <div className={styles.searchForm}>
                    <input type="text" placeholder="Search a chat..." />
                </div>
                <div className={styles.userChat}>
                    <img src="" alt="" />
                    <div className={styles.userChatInfo}>
                        <span>Nat</span>
                    </div>
                </div>
            </div>
            {/* Chats */}
            <div className={styles.chats}>
                <div className={styles.userChat}>
                    <img src="" alt="" />
                    <div className={styles.userChatInfo}>
                        <span>winter Dong</span>
                        <p>what's up?</p>
                    </div>
                </div>

                <div className={styles.userChat}>
                    <img src="" alt="" />
                    <div className={styles.userChatInfo}>
                        <span>winter Dong</span>
                        <p>what's up?</p>
                    </div>
                </div>

                <div className={styles.userChat}>
                    <img src="" alt="" />
                    <div className={styles.userChatInfo}>
                        <span>winter Dong</span>
                        <p>what's up?</p>
                    </div>
                </div>

                <div className={styles.userChat}>
                    <img src="" alt="" />
                    <div className={styles.userChatInfo}>
                        <span>winter Dong</span>
                        <p>what's up?</p>
                    </div>
                </div>

                <div className={styles.userChat}>
                    <img src="" alt="" />
                    <div className={styles.userChatInfo}>
                        <span>winter Dong</span>
                        <p>what's up?</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Chat */}
        <div className={styles.chat}>
            <div className={styles.chatInfo}>
                <span>winter Dong</span>
                <div className={styles.chatIcons}>
                    <img src="
                    https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg
                    " alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            
            {/* Messages */}
            <div className={styles.messages}>
                {/* Message */}
                <div className={cx("message", "owner")}>
                    <div className={styles.messageInfo}>
                        <img src="
https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg
                        " alt="" />
                        <span>just now</span>
                    </div>
                    <div className={styles.messageContent}>
                        <p>Heloooo</p>
                        <img src="
                        https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg
                        " alt="" />
                    </div>
                </div>
            </div>
            
            {/* Input */}
            <div className={styles.input}>
                <input type="text" placeholder="Type here ..." />
                <div className="send">
                    <img src="Attach" alt="" />
                    <input type="file" style={{display:"none"}} id="file" />
                    <label htmlFor="file">
                        <img src="Image" alt="" />
                    </label>
                    <button>Send</button>
                </div>
            </div>
        </div>
    </div>
  </div>;
}
