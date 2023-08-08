import React from "react";
import "./NavItem.scss";

const NavItem = ({ icon }) => {
  return (
    <div className="nav-item">
      <img src={icon} alt="nav-icon" className="nav-item__image" />
    </div>
  );
};

export default NavItem;
