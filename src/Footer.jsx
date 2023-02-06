import React from "react";
import "./FooterStyle.css";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="icon">
          <ImFacebook size="1.5em" />
          <AiOutlineInstagram size="1.6em" />
          <BsTwitter size="1.6em" />
        </div>
        <div className="bottom">
          <img
            className="bottom-logo"
            src="https://neutrelle.ismartapps.tech/wp-content/uploads/2022/07/logo-neutrelle-bw.png"
          ></img>
          <p>&copy; Neutrelle LTD 2023</p>
        </div>
        <div className="last-box">
          {/* <h3>Privacy Policy</h3>
            <h3>Terms of Use</h3> */}
          <p className="last-para-link">
            <a href="https://neutrelle.co.uk/privacy-policy/">Privacy Policy</a>
          </p>
          <p className="last-para-link">
            <a href="https://neutrelle.co.uk/terms-of-use/">Terms of Use</a>
          </p>
        </div>
      </div>
      <div className="last-container">
        <p className="last-container-para">
          Website design, development by      
          <a href="https://ismartapps.io/">iSmart Apps, UK</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
