import React from "react";
import "./SignInStyle.css";
import "../pages/SignUp";
// import './ForgotPassword';
// import "./ForgotPasswordStyle";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
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
function SignIn() {
  const [Email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [EmailErrorMsg, setEmailErrorMsg] = useState("");

  const [Password, setPassword] = useState("");
  const [PasswordErrorMsg, setPasswordErrorMsg] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handelChange = (e) => {
    console.log("output", e.target.value);
    if (e.target.name == "Email") {
      setEmail(e.target.value);
      setEmailErrorMsg("");
      setShowEmailError(false);
    }
    if (e.target.name == "Password") {
      setPassword(e.target.value);
      setPasswordErrorMsg("");
      setShowPasswordError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Email == "") {
      setShowEmailError(true);
      setEmailErrorMsg("This feild is required");
    }
    if (Email.length < 8 && Password.length > 0) {
     
      setShowEmailError(true);
      setEmailErrorMsg("Enter a valid Email Address");
    }

    if (Password == "") {
      setShowPasswordError(true);
      setPasswordErrorMsg("This feild is required");
    }
    if (Password.length < 8 && Password.length > 0) {
      setShowPasswordError(true);
      setPasswordErrorMsg("Password must be alteast 8 characters");
    }
  };

  return (
    <>
      <div className="MyGarage-container1">
        <div className="SignIn-container">
          <p className="SignIn-heading">Sign In</p>
          <form className="SignIn-form">
            <CssTextField
              label="Email Address"
              name="Email"
              id="custom-css-outlined-input"
              onChange={handelChange}
            />
            {showEmailError == true ? (
              <p className="error-text">{EmailErrorMsg}</p>
            ) : null}

            <CssTextField
              label="Password"
              name="Password"
              id="custom-css-outlined-input"
              onChange={handelChange}
            />
            {showPasswordError == true ? (
              <p className="error-text">{PasswordErrorMsg}</p>
            ) : null}
            <div className="Remember-container">
              <div className="rememberme-inner">
                <input
                  className="PrivateSwitchBase-input"
                  type="checkbox"
                  //   data-indeterminate="false"
                  //   aria-label="controlled"
                />
                <span className="remember">Remember me</span>
              </div>
              <div>
                <Link to="ForgotPassword" className="Forget-password">
                  I've forgotten my password
                </Link>
              </div>
            </div>
            <div className="SignIn-button">
              <button onClick={handleSubmit}>Sign In</button>
            </div>
            <div className="account">
              <p className="account-text">Don't have an account?</p>
              <p>
                <Link to="../pages/SignUp" className="SignUp-link">
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
