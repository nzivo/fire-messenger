import React from "react";
import "./ProfileUpdate.css";
import assets from "../../assets/assets";

const ProfileUpdate = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input type="file" id="avatar" accept=".png, .jpg, .jeg" hidden />
            <img src={assets.avatar_icon} alt="" />
            Upload profile image
          </label>
          <input type="text" placeholder="Full Name" required />
          <textarea name="" placeholder="Profile bio" id="" required></textarea>
          <button type="submit">Save</button>
        </form>
        <img className="profile-pic" src={assets.logo_icon} alt="" />
      </div>
    </div>
  );
};

export default ProfileUpdate;
