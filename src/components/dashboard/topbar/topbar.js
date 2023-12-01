import React from "react";
import { ReactComponent as Options } from "../../../assets/images/burger-bar@2x.svg";
import Logout from "../../../assets/images/on-off-button 2logout@2x.svg";
import ProfileImage from "../../../assets/images/Ellipse 20profile.png";
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="topbar-container">
        <div className="group1">
          <div className="burger-bar">
            <Options />
          </div>
          <div className="profile">
            <img src={ProfileImage} alt="profile_image" />
          </div>
          <div className="profile-label">
            <h4 className="profile-label">GOOD MORNING LOGAN</h4>
          </div>
        </div>
        <div className="group2">
          <div className="logout">
            <img src={Logout} alt="profile_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
