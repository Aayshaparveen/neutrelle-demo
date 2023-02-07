import React from "react";
import "./ConactUsStyle.css";
const ContactUs = () => {
  return (
    <div className="Container">
      <div className="contact-box">
        <span className="contact-heading">Contact Us</span>
      </div>
      {/* <div>
        <span class="We-are-here-to-help">
          We are here to help. Please enter your message and a member of the
          team will be in touch within 48 hours!
        </span>
      </div> */}
      <div className="contact-img-box">
        <img src="./image\illustration-contact-us-1.png"></img>
      </div>
    </div>
  );
};

export default ContactUs;
