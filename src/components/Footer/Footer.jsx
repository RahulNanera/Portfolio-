import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1 id="footerh1">Rahul Nanera</h1>
      <div className="terms">
        <p id="footerp">Copyright &copy; 2024 | All Rights Reserved</p>
        <div className="policies">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
