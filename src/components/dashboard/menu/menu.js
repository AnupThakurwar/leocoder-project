import React, { useState } from "react";
import "./menu.scss";
import { menuOption } from "../../../constants/constants";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
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
                  <div
                    className="menu-text"
                    onClick={() => {
                      setSelectedMenu(items.name);
                    }}
                  >
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
