import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import "./style.css";
import { Link } from "react-router-dom";
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
      borderColor: 'transparent',
    },
    "&.Mui-focused fieldset": {
      // borderColor: 'black',
      border: "1px solid black",
      borderRadius: "1px 15px",
    },
  },
});
const ImpactCalculator = () => {
  
  const [RegistrationNumber, setRegistrationNumber] = useState("");
  const [showRnumberError, setShowRnumberError] = useState(false);
 
  const handelChange = (e) => {
    console.log("output", e.target.value);
    if (e.target.name == "RegistrationNumber") {
      setRegistrationNumber(e.target.value);
      setShowRnumberError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if(RegistrationNumber == ""){
        setShowRnumberError(true)
    }
  };
  
  return (
    <div className="main-container">
      <p className="heading">Impact Calculator</p>
      <div className="main-box">
        <h2 className="title">Check your car's Impact</h2>
        <p className="sub-title">Enter your car details to check</p>
        <div className="Registration-box">
          <CssTextField
            label="Enter Registration Number*"
            id="custom-css-outlined-input"
            name=" RegistrationNumber"
            placeholder="e.g. “SD22SZP”"
            onChange={handelChange}
          />
            
          <button onClick={handleSubmit}>Check Registration Number</button>
        </div>

           {showRnumberError == true ? (
              <p className="error-message">This feild is required</p>
            ) : null}

        <div className="bottom-container">
          <div className="line-box">
            <div className="left-line"></div>
            <div className="text-div">
              <p>OR</p>
            </div>
            <div className="right-line"></div>
          </div>
          <div className="details">
            <Link to="/Cardeatils">Enter details manually</Link>
            <p className="arrow">
            
              <img src="./image/icon-arrow.svg"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCalculator;
