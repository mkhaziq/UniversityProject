import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; M Khaziq</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="http://instagram.com/m.khaziq">Instagram</a>
        <a href="http://facebook.com/mkhaziq">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
