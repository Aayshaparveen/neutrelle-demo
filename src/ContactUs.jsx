import React from "react";
import "./ConactUsStyle.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const ContactUs = () => {
  return (
    <div className="Container">
      <div className="contact-box">
        <div>
          <span className="contact-heading">Contact Us</span>
        </div>
        <p class="We-are-here-to-help">
          We are here to help. Please enter your message and a member of the
          team will be in touch within 48 hours!
        </p>
        <form>
        <TextField id="demo-helper-text-misaligned-no-helper1" label=" Your Name *" placeholder="Full Name" />
        <TextField id="demo-helper-text-misaligned-no-helper2" label=" Email *" placeholder="Your Email" />
        <TextField id="demo-helper-text-misaligned-no-helper3" label=" Message *" placeholder="Your Message" />
        </form>
      </div>

      <div className="contact-img-box">
        <img src="./image\illustration-contact-us-1.png"></img>
      </div>
    </div>
  );
};

export default ContactUs;
