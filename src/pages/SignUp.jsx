import React from "react";
import "./SignUpStyle.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import InputAdornment from "@mui/material/InputAdornment";
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
function SignUp() {
  const [FullName, setFullName] = useState("");
  const [showFnameError, setShowFnameError] = useState(false);

  const [Email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [EmailErrorMsg, setEmailErrorMsg] = useState("");

  const [Password, setPassword] = useState("");
  const [PasswordErrorMsg, setPasswordErrorMsg] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);

  const [PhoneNo, setPhoneNo] = useState("");
  const [PhoneNoErrorMsg, setPhoneNoErrorMsg] = useState("");
  const [showPhoneNoError, setShowPhoneNoError] = useState(false);

  const handelChange = (e) => {
    console.log("output", e.target.value);
    if (e.target.name == "FullName") {
      setFullName(e.target.value);
      setShowFnameError(false);
    }
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
    if (e.target.name == "PhoneNo") {
      setPhoneNo(e.target.value);
      setPhoneNoErrorMsg("");
      setShowPhoneNoError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (FullName == "") {
      setShowFnameError(true);
    }
    if (Email == "") {
      setEmailErrorMsg("This feild is required");
      setShowEmailError(true);
    }
    if (Email.length < 8 && Password.length > 0) {
     
      setShowEmailError(true);
      setEmailErrorMsg("Enter a valid Email Address");
    }
    if (Password == "") {
      setShowPasswordError(true);
      setPasswordErrorMsg("Password feild is required");
    }
    if (Password.length < 8 && Password.length > 0) {
      setShowPasswordError(true);
      setPasswordErrorMsg("Password must be alteast 8 characters");
    }
    if (PhoneNo == "") {
      setShowPhoneNoError(true);
      setPhoneNoErrorMsg("Phone Number is required");
    }
    
    if (PhoneNo.startsWith("0")) {
      if ((PhoneNo.length < 11 && PhoneNo.length > 0) || PhoneNo.length > 11) {
        setShowPhoneNoError(true);
        setPasswordErrorMsg("Phone no is invalid");
      }
    } else {
      if ((PhoneNo.length < 10 && PhoneNo.length > 0) || PhoneNo.length > 0) {
        setShowPhoneNoError(true);
        setPhoneNoErrorMsg("Phone no is invalid");
      }
    }
  };

  return (
    <>
      <div className="MyGarage-container2">
        <div className="SignUp-container">
          <p className="SignUp-heading">Sign Up</p>
          <form className="SignUp-form">
            <CssTextField
              label="Full Name *"
              name="FullName"
              id="custom-css-outlined-input"
              onChange={handelChange}
            />
            {showFnameError == true ? (
              <p className="error-text">This feild is required</p>
            ) : null}
            <CssTextField
              label="Email Address *"
              name="Email"
              id="custom-css-outlined-input"
              onChange={handelChange}
            />
            {showEmailError == true ? (
              <p className="error-text">{EmailErrorMsg}</p>
            ) : null}

            <CssTextField
              label="Password *"
              name="Password"
              id="custom-css-outlined-input"
              onChange={handelChange}
            />
            {showPasswordError == true ? (
              <p className="error-text">{PasswordErrorMsg}</p>
            ) : null}

            <CssTextField
              label=" Mobile Number"
              name=" PhoneNo "
              id="custom-css-outlined-input"
              onChange={handelChange}
              // type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+44</InputAdornment>
                ),
              }}
            />
            {showPhoneNoError == true ? (
              <p className="error-text">{PhoneNoErrorMsg}</p>
            ) : null}

            <button onClick={handleSubmit} className="SignUp-button">
              Sign In
            </button>
            <footer>
              <p className="account-text">
                Already have an account?
                <Link to="/MyGarage" className="SignIn-link">
                  Sign In
                </Link>
              </p>
              <p className="Terms-message">
                By continuing you agreeing to our{" "}
                <span className="Link">Terms of Service</span>
                and <span className="Link">Privancy Pollcy</span>
              </p>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
