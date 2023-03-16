import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
const Forgotpassword = () => {
  const [Email, setEmail] = useState("");
  const [EmailErrorMsg, setEmailErrorMsg] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const handelChange = (e) => {
    console.log("output", e.target.value);

    if (e.target.name == "Email") {
      setEmail(e.target.value);
      setEmailErrorMsg("");
      setShowEmailError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Email == "") {
      setShowEmailError(true);
      setEmailErrorMsg("Email address is required");
    }
    if (Email.length !== "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") {
      setShowEmailError(true);
      setEmailErrorMsg("Enter a valid Email Address");
    }
  };
  return (
    <>
      <div className="Forgot_container">
        <div className="Back-btn">
          <Button variant="outlined">Back to sign in</Button>
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
            onChange={handelChange}
          />
          {showEmailError == true ? (
            <p className="error-Etext">{EmailErrorMsg}</p>
          ) : null}
        </div>
        <div className="Reset_btn">
          <Button variant="contained" onClick={handleSubmit}>
            Reset Password
          </Button>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
