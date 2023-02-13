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
      <div className="MyGarage-container">
        <div className="SignUp-container">
          <p className="SignUp-heading">Sign Up</p>
          <form className="SignUp-form">
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
                <a className="forget-password" href="/forgot_password">
                  <span className="Forget-password">
                    I've forgotten my password
                  </span>
                </a>
              </div>
            </div>
            <button onClick={handleSubmit} className="SignUp-button">
              Sign In
            </button>
            <footer>
              <p>
                Already have an account?
                <Link to="/MyGarage">Sign In</Link>
              </p>
              <h5>
                By continuing you agreeing to our <span>Terms of Service</span>
                and <span>Privancy Pollcy</span>
              </h5>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
