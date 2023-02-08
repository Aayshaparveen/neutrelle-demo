import React from "react";
import "./ConactUsStyle.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import styled from "@emotion/styled";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "gray",
    background: "white",
    padding: "0px 10px",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      boxShadow: "0px 0px 1px 0px",
      borderRadius: "1px 15px",
      border: "1px solid rgb(226, 226, 226) ",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      // borderColor: 'black',
      border: "1px solid black",
      borderRadius: "1px 15px",
    },
  
  },
});
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    
    "& > :not(style)": { m: 1 },
    
  }}
/>;
const ContactUs = () => {
  return (
    <>
    <div className="Container">
      <div className="contact-box">
        <div>
          <span className="contact-heading">Contact Us</span>
        </div>
        <p className="We-are-here-to-help">
          We are here to help. Please enter your message and a member of the
          team will be in touch within 48 hours!
        </p>
        <form>
          <CssTextField
            label="Your Name *"
            placeholder="Full Name"
            id="custom-css-outlined-input"
          />
          <CssTextField
            label="Email *"
            placeholder="Your Email"
            id="custom-css-outlined-input"
          />
          <TextField
            placeholder="Your Message"
            id="demo-helper-text-aligned"
            label=" Message"
          />
        </form>
        <div className="checkbox">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I'm not a robot"
            />
          </FormGroup>
          <img src="./image/RecaptchaLogo.png" className="RecaptchaLogo-img"></img>
        </div>
        <div>
          <button className="Message-box">Send Message</button>
        </div>
      </div>

      <div className="contact-img-box">
        <img src="./image\illustration-contact-us-1.png"></img>
      </div>

    </div>
      <div className="last-impact">
        <div className="section">
          <div className="box1">
            <h2>Let's decarbonise our World!</h2>
          </div>
          <div className="box2">
            <button className="impact-button">
              <a href="./ImpactCalculator">Make your Impact</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
