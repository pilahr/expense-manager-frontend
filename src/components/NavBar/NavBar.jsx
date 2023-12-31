import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import NavItem from "../NavItem/NavItem";
import HomeIcon from "../../assets/icons/home.png";
import AddIcon from "../../assets/icons/add.png";
import ChartIcon from "../../assets/icons/pie-chart.png";
import CalendarIcon from "../../assets/icons/calendar.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        to="/home"
      >
        <NavItem icon={HomeIcon} />
      </NavLink>

      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        to="/add"
      >
        <NavItem icon={AddIcon} />
      </NavLink>

      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        to="/spending"
      >
        <NavItem icon={CalendarIcon} />
      </NavLink>

      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        to="/report"
      >
        <NavItem icon={ChartIcon} />
      </NavLink>
    </div>
  );
};

export default NavBar;
