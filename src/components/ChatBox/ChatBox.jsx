import React from "react";
import "./Chatbox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>
          John Nzivo <img className="dot" src={assets.green_dot} alt="" />
        </p>
        <img src={assets.help_icon} alt="" className="help" />
      </div>
      <div className="chat-message">
        <div className="sender-message">
          <p className="message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            delectus illum, autem laudantium dolorum voluptates dolores atque.
            Iusto perspiciatis odit, nisi quod voluptate rerum reprehenderit
            quae, ad repellendus totam minima.
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2.30 PM</p>
          </div>
        </div>
        <div className="sender-message">
          <img className="message-image" src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2.30 PM</p>
          </div>
        </div>
        <div className="receiver-message">
          <p className="message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            delectus illum, autem laudantium dolorum voluptates dolores atque.
            Iusto perspiciatis odit, nisi quod voluptate rerum reprehenderit
            quae, ad repellendus totam minima.
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2.30 PM</p>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Send a message" name="" id="" />
        <input
          type="file"
          name=""
          id="image"
          accept="image/png, image/png"
          hidden
        />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
};

export default ChatBox;
