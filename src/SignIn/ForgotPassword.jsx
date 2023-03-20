import { TextField } from "@mui/material";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const Forgotpassword = () => {
  const [Email, setEmail] = useState("");
  const [EmailErrorMsg, setEmailErrorMsg] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const handelEmail = (e) => {
    console.log("output", e.target.value);

    if (e.target.name == "Email") {
      setEmail(e.target.value);
      setEmailErrorMsg("");
      setShowEmailError(false);
    }

    if (e.target.value == "") {
      setShowEmailError(true);
      setEmailErrorMsg("Email address is required");
    }
    if (Email.length > 0 && !/\S+@\S+\.\S+/.test(Email)) {
      setShowEmailError(true);
      setEmailErrorMsg("Email address format is invalid.");
    }
  };
  const handleForgotpassword = (e) => {
    console.log("enable", e.target.value);
  };
  return (
    <>
      <div className="Forgot_container">
        <div className="Back-btn-box">
        <button className="Back-btn">
          <Link to="/SignIn" className="Link_text">
            <BiArrowBack className="left_arrow"/>Back to Sign In
            </Link></button>
          
        </div>
        <h2 className="R-heading">Reset your password.</h2>
        <p className="Enter-deatils">
          Enter your email address and we'll send your instructions.
        </p>
        <div className="form-box">
          <TextField
            id="standard-basic"
            label="Email address"
            name="Email"
            variant="standard"
            onChange={handelEmail}
          />
          {showEmailError == true ? (
            <p className="error-Etext">{EmailErrorMsg}</p>
          ) : null}
        </div>
        <div className="Reset_btn">
          <button
            className={Email == "" ? "disable-btn" : "enable-btn"}
            onClick={handleForgotpassword}
            disabled={!Email}
          >
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
