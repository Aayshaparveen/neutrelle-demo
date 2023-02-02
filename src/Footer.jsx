import React from "react";
import "./FooterStyle.css";
import { BsFacebook } from "react-icons/bs";
import {AiFillTwitterSquare} from "react-icons/ai"
import {FaInstagramSquare} from "react-icons/fa"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="icon">
        <BsFacebook  size="2em"/>
        <FaInstagramSquare size="2em"/>
        <AiFillTwitterSquare size="2em"/>
        </div>
        <div className="bottom">
            <img className="bottom-logo" src="https://neutrelle.ismartapps.tech/wp-content/uploads/2022/07/logo-neutrelle-bw.png"></img>
            <p>&copy; Neutrelle LTD 2022</p>
        </div>
        <div className="last-box">
            <h3>Privacy Policy</h3>
            <h3>Terms of Use</h3>
        </div>
        </div>
        <div className="last-container">
        Website design, development by Ismart Apps, UK
        </div>
  
    </>
  );
};

export default Footer;
