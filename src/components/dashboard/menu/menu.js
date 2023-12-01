import React from "react";
import Dashboard from "../../../assets/images/dashboard (18) 2dashboard@1x.png";
import CurrentListings from "../../../assets/images/list (3) 1currentListing@1x.png";
import ExpiredListings from "../../../assets/images/magnifying-glass 1expired listing@1x.png";
import Messages from "../../../assets/images/message (2) 1message@1x.png";
import BootMarketing from "../../../assets/images/dashboard (18) 1boots marketing@1x.png";
import Documents from "../../../assets/images/support (4) 1documents@1x.png";
import VirtualOffice from "../../../assets/images/dashboard (18) 4virtual office@1x.png";
import Analytics from "../../../assets/images/support (4) 1analytics@1x.png";
import Support from "../../../assets/images/support (4) 1support@1x.png";
import Settings from "../../../assets/images/settings (4) 1setting@1x.png";

import "./menu.scss";

const Menu = () => {
  let menuOption = [
    { id: 1, title: "Dashboard", icon: Dashboard },
    { id: 2, title: "current listings", icon: CurrentListings },
    { id: 3, title: "expired listings", icon: ExpiredListings },
    { id: 4, title: "message", icon: Messages },
    { id: 5, title: "boot marketing", icon: BootMarketing },
    { id: 6, title: "vitual office", icon: Documents },
    { id: 7, title: "documents", icon: VirtualOffice },
    { id: 8, title: "analytics", icon: Analytics },
    { id: 9, title: "", icon: Support },
    { id: 9, title: "settings", icon: Settings },
  ];
  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        <div className="list-items">
          {menuOption.map(
            (items) =>
              items.title !== "settings" && (
                <div className={"items-group"} key={items.id}>
                  <div className="menu-img">
                    <img
                      src={items.icon}
                      alt="icon_image"
                      width="15px"
                      height="15px"
                    />
                  </div>
                  <div className="menu-text">
                    <div>{items.title.toLocaleUpperCase()}</div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="last-items">
          {menuOption.map(
            (item) =>
              item.title === "settings" && (
                <div className="items-group2" key={item.id}>
                  <div className="menu-img">
                    <img src={item.icon} alt="icon_image" />
                  </div>
                  <div className="menu-text">
                    <div>{item.title.toLocaleUpperCase()}</div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
