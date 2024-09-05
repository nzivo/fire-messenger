import React, { useContext, useEffect, useState } from "react";
import "./RightSidebar.css";
import assets from "../../assets/assets";
import { logout } from "../../config/firebase";
import { AppContext } from "../../context/AppContext";

const RightSidebar = () => {
  const { userData, chatUser, messages } = useContext(AppContext);
  const [messageImages, setMessageImages] = useState([]);

  useEffect(() => {
    let tempVar = [];
    messages.map((msg) => {
      if (msg.image) {
        tempVar.push(msg.image);
      }
    });
    setMessageImages(tempVar);
  }, [messages]);

  return chatUser ? (
    <div className="right-sidebar">
      <div className="rs-profile">
        <img src={chatUser.userData.avatar} alt="" />
        <h3>
          {Date.now() - chatUser.userData.lastSeen <= 61000 ? (
            <img src={assets.green_dot} className="dot" alt="" />
          ) : null}
          {chatUser.userData.name}
        </h3>
        <p>{chatUser.userData.bio}</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          {messageImages.map((url, index) => (
            <img
              onClick={() => (window.location.href = url)}
              key={index}
              src={url}
              alt=""
            />
          ))}
        </div>
      </div>
      <button onClick={() => logout()}>Sign Out</button>
    </div>
  ) : (
    <div className="right-sidebar">
      <div className="rs-profile">
        <img src={userData.avatar} alt="" />
        <h3>
          {userData.name}
          <img src={assets.green_dot} className="dot" alt="" />
        </h3>
        <p>{userData.bio}</p>
      </div>
      <hr />
      <button onClick={() => logout()}>Sign Out</button>
    </div>
  );
};

export default RightSidebar;
