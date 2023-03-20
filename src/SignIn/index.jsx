import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
const SignInpage = () => {
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // Validation
  const [showPassword, setShowPassword] = React.useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [EmailErrorMsg, setEmailErrorMsg] = useState("");
  const [PasswordErrorMsg, setPasswordErrorMsg] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleEmail = (e) => {
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

  const handlePassword = (e) => {
    console.log("output", e.target.value);
    if (e.target.name == "Password") {
      setPassword(e.target.value);
      setPasswordErrorMsg("");
      setShowPasswordError(false);
    }
    if ( e.target.value == "") {
      setShowPasswordError(true);
      setPasswordErrorMsg("Password is required");
    }
    // if (e.target.value.length < 8 && e.target.value.length > 0) {
    //   setShowPasswordError(true);
    //   setPasswordErrorMsg("Password must be alteast 8 characters");
    // }
  };
  const handleSignIn = (e) => {
    console.log("enable", e.target.value);
  };
  return (
    <>
      <div className="signin_container">
        <p className="signin_heading">Sign In with email</p>
        <form className="form_box">
          <TextField
            id="standard-basic"
            label="Email address"
            name="Email"
            variant="standard"
            onChange={handleEmail}
          />
          {showEmailError == true ? (
            <p className="error-Etext">{EmailErrorMsg}</p>
          ) : null}
          <FormControl sx={{ m: 1, width: "49ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              name="Password"
              onChange={handlePassword}
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {showPasswordError == true ? (
            <p className="error-Ptext">{PasswordErrorMsg}</p>
          ) : null}
        </form>
        <div className="F-box">
          <Link to="./ForgotPassword" className="F-password">
            Forgot password?
          </Link>
        </div>
        <div className="terma_condation_section">
          By signing in, you have read and agree to our <a>Vista General Terms and
          Conditions.</a> For more details on how we use the information we collect
          about you, please read our <br/><a>Vista Privacy and Cookie Policy.</a>
        </div>
        <div className="Btn-section">
          <div className="sign_btn">
            <button
              className={Password  == "" ? "disable-btn" : "enable-btn"}
              onClick={handleSignIn}
              disabled={!Password }
            >
              Sign In
            </button>
          </div>
          <p>or</p>
          <div className="Create-btn-box">
            <Link to="./Create_account">
              <button className="Create-btn">Create an account</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInpage;
