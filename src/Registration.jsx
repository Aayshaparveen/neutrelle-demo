import React from "react";
import TextField from "@mui/material/TextField";
import "./RegistrationStyle.css";
import styled from "@emotion/styled";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "gray",
    background: "white",
    padding: "0px 10px",
  },
  "& .MuiOutlinedInput-root": {
      "& fieldset": {
          marginRight:"400px",
          boxShadow: "0px 0px 1px 0px",
          borderRadius: "1px 15px",
          border: "1px solid rgb(226, 226, 226) ",
        },
        "&:hover fieldset": {
          borderColor: 'transparent',
        },
    
    "&.Mui-focused fieldset": {
      border: "1px solid black",
      borderRadius: "1px 15px",
    },
  },
});
const Registration = () => {
  return (
    <div className="main-container2">
      <p className="heading">Impact Calculator</p>
      <div className="main-box">
        <h2 className="title">Check your car's Impact</h2>
        <p className="sub-title">Enter your car details to check</p>
        <div className="Registration-box">
          <p className="Registration-title">Registration</p>
          <CssTextField
            label="Enter Registration Number*"
            id="custom-css-outlined-input"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
