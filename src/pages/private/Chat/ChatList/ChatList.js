import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import {collection, query, where, getDocs, getDoc, doc, setDoc, updateDoc, serverTimestamp} from "firebase/firestore"
import {db} from "../firebase"
import ChatBox from "../ChatBox";
import styles from "./ChatList.module.scss";
import { ChatContext } from "../context/ChatContext";
// import {AuthContext} from "../context/Authcontext"

// import DetailBar from "./DetailBar";
// import getPlacesData from "../../../api/googleClientApi";
// import getPlacesData from "./api";
const cx = classNames.bind(styles);
export default function ChatList() {

    const[showChatList, setShowChatList] = useState(true);
    const[showchatBox, setShowChatBox] = useState(false);
    
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [err, setErr] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);
    const {dispatch} = useContext(ChatContext)

    const currentUser = {
        uid : "IrzDfxSJZQO1cn4zDd1zZCh6DZ42", 
        email: "han1@gmail.com",
        photoURL: "https://uploads.mwp.mprod.getusinfo.com/uploads/sites/54/2022/02/Image-for-Rejoining-Paris-Agreement.jpeg",
        displayName: "Han1"
    } 
    
    useEffect(() =>{
        getAllDocuments()
    }, [])

    const handleClose =()=>{
        setShowChatList(false)
    }
    const handleOpenUser = async(user) =>{
        setSelectedUser(user);
        //check group chat exist if not create
        // console.log(user.uid)
        const combinedId = currentUser.uid > user.uid 
        ? currentUser.uid + user.uid 
        : user.uid + currentUser.uid
        try{
            const res = await getDoc(doc(db, "chats", combinedId));
            // console.log(res)
            if(!res.exists() ){
                await setDoc(doc(db, "chats", combinedId), {messages:[]})
                console.log("aa")
                //create user chats
                const res = await getDoc(doc(db, "userChats", currentUser.uid))
                const res2 = await getDoc(doc(db, "userChats", user.uid))
                if(!res.exists()){
                    await setDoc(doc(db, "userChats", currentUser.uid), {
                        [combinedId+".userInfo"]:{
                            uid: user.uid,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        },
                        [combinedId+".date"]:serverTimestamp()
                    });
                    console.log("cc")
                }else{
                    await updateDoc(doc(db, "userChats", currentUser.uid), {
                        [combinedId+".userInfo"]:{
                            uid: user.uid,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        },
                        [combinedId+".date"]:serverTimestamp()
                    });
                    console.log("cc11")
                }
                //create user chats
                if(!res2.exists()){
                    await setDoc(doc(db, "userChats", user.uid), {
                        [combinedId+".userInfo"]: {
                            uid:currentUser.uid,
                            displayName: currentUser.displayName,
                            photoURL: currentUser.photoURL
                        },
                        [combinedId+".date"]:serverTimestamp()
                    });
                    console.log("dd")
                }else{
                    await updateDoc(doc(db, "userChats", user.uid), {
                        [combinedId+".userInfo"]: {
                            uid:currentUser.uid,
                            displayName: currentUser.displayName,
                            photoURL: currentUser.photoURL
                        },
                        [combinedId+".date"]:serverTimestamp()
                    });
                    console.log("dd22")
                }
            }
        }catch(err){}
        // setUser(null);
        // setUsername("")
        dispatch({type:"CHANGE_USER", payload: user})
    };

    const getAllDocuments = async () =>{
        const querySnapshot = await getDocs(collection(db, "users"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ email: doc.email, ...doc.data() });
        });
        setUsers(docs) ;//console.log(user)
    }

    const handleSearch = async (event) =>{
        const inputUser = event.target.value.toLowerCase()
        setErr(false)
        if(inputUser === ""){
            getAllDocuments();
        }
        else{
            let docs = [];
            users.forEach((doc) =>{
                if(doc.displayName.toLowerCase().includes(inputUser) === true)
                { 
                    docs.push({email: doc.email, ...doc})}
            })
            if(docs != ""){
                setUsers(docs)
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
                    <input 
                        type="text" 
                        placeholder="Find a user..."  
                        onChange={(handleSearch)} 
                        // value={username}
                        />
                <div className={styles.close} onClick={handleClose} >
                    Close
                </div>
                
            </div>
            {/* User Info */}
            <div className={styles.userInfo}>
                {err && <span>User not found</span>}
                {!users ? null :users.map((doc) =>(
                    <div key={doc.email} 
                        className={styles.userChatInfo} 
                        onClick={() => handleOpenUser(doc)}>
                            <img src={doc.photoURL} alt="" />
                            <span>{doc.displayName}</span>
                    </div>
                ))}
            </div>
        </div>)}
            <ChatBox/>
      </div>
    );
  }