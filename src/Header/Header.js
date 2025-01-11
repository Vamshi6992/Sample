import React from "react";
import "./Header.scss";
import theme from "../Images/Icons.svg";
import logo from "../Images/Vector.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span className="heading">Central Texas Fly Fishing</span>
      </div>
      <div className="nav_links">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Contact</div>
        <img className="theme" src={theme} alt="theme" />
      </div>
    </div>
  );
};

export default Header;
