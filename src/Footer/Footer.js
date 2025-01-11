import React from "react";
import footerLogo from "../Images/Logo.svg";
import "./Footer.scss";
import facebookLogo from "../Images/Icon Button.svg";
import Insta from "../Images/Insta.svg";
import LinkedIn from "../Images/LinkedIn.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="links">
          <img src={footerLogo} alt="logo" />
          <div>FAQ</div>
          <div>Privacy</div>
          <div>Support</div>
          <div>Contact</div>
        </div>
        <div className="icons">
          <img src={facebookLogo} alt="FB" />
          <img src={Insta} alt="Instagram" />
          <img src={LinkedIn} alt="LinkedIn" />
        </div>
      </div>
      <div className="copyright">
        © 2024 Central Texas Fly Fishing All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
