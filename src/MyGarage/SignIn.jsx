import React from "react";
import "./SignInStyle.css";
import "./SignUp"
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
  const [Password, setPassword] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handelChange = (e) => {
    console.log("output", e.target.value);
    if (e.target.name == "Email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "Password") {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (Email == "") {
      setShowEmailError(true);
    }
    if (Password == "") {
      setShowPasswordError(true);
    }
  };

  return (
    <>
      <div className="MyGarage-container1">
        <div className="SignIn-container">
          <p className="SignIn-heading">Sign In</p>
          <form className="SignIn-form">
            <CssTextField
              label="Email Address *"
              name="Email"
              id="custom-css-outlined-input"
              onChange={handelChange}
            />
            {showEmailError == true ? (
              <p className="error-text">This feild is required</p>
            ) : null}

            <CssTextField
              label="Password *"
              name="Password"
              id="custom-css-outlined-input"
              onChange={handelChange}
            />
            {showPasswordError == true ? (
              <p className="error-text">This feild is required</p>
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
                  <a className="forget-password" >
                    
                      <Link to="ForgotPassword" className="Forget-password">
                      I've forgotten my password
                      </Link>
                    
                  </a>
                </div>
            </div>
            <button onClick={handleSubmit} className="SignIn-button">
              Sign In
            </button>
            <div className="account">
              <p className="account-text">
                Don't have an account?
                </p>
                <p>
                <Link to="SignUp" className="SignUp-link">
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
