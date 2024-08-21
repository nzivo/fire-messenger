import React from "react";
import "./RightSidebar.css";
import assets from "../../assets/assets";
import { logout } from "../../config/firebase";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          John Nzivo
          <img src={assets.green_dot} className="dot" alt="" />
        </h3>
        <p>Hey, I am using Fire Message</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button onClick={() => logout()}>Sign Out</button>
    </div>
  );
};

export default RightSidebar;
