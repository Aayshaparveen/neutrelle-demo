import React from "react";
import "./SignUpStyle.css";
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
function SignUp() {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [showFnameError, setShowFnameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showMobileNumberError, setShowMobileNumberError] = useState(false);

  const handelChange = (e) => {
    console.log("output", e.target.value);
    if (e.target.name == "FullName") {
      setFullName(e.target.value);
    }
    if (e.target.name == "Email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "Password") {
      setPassword(e.target.value);
    }
    if (e.target.name == "MobileNumber") {
      setMobileNumber(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (FullName == "") {
      setShowFnameError(true);
    }
    if (Email == "") {
      setShowEmailError(true);
    }
    if (Password == "") {
      setShowPasswordError(true);
    }
    if (MobileNumber == "") {
      setShowMobileNumberError(true);
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

            <CssTextField
              label=" Mobile Number"
              name=" MobileNumber "
              id="custom-css-outlined-input"
              onChange={handelChange}
            />
           
                
            {showMobileNumberError == true ? (
              <p className="error-text">This feild is required</p>
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
