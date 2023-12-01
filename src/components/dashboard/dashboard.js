import React from "react";
import "./dashboard.scss";
import Topbar from "./topbar/topbar";
import Menu from "./menu/menu";
import Main from "./main/main";
import AdvertiseSection from "./aside/AdvertiseSection";

const Dashboard = () => {
  return (
    <div className="dash-wrapper">
      <div>
        <Topbar />
        <div className="dash-inner">
          <Menu />
          <Main />
          <AdvertiseSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
