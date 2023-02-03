import React from "react";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import {ImArrowUpRight2 } from "react-icons/im";
import Registration from './Registration';
import "./ImpactCalculatorStyle.css";
// import { Navigate } from "react-router-dom";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "gray",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      boxShadow: "0px 0px 1px 0px",
      borderRadius: "1px 15px",
      border: "1px solid rgb(226, 226, 226) ",
    },
    "&.Mui-focused fieldset": {
      // borderColor: 'black',
      border: "1px solid black",
      borderRadius: "1px 15px",
    },
  },
});
const ImpactCalculator = () => {
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
          />
          <button>Check Registration Number</button>
        </div>
        <div className="bottom-container">
        <div className="line-box">
          <div className="left-line">
            <hr />
            </div>
            <div className="text-div">
                <h5>OR</h5>
            </div>
          <div className="right-line">
            <hr />
          </div>
        </div>
        <div className="details">
          {/* <Navigate to="./Regitration"/> */}
         <a href="./Registration">Enter details manually</a>
         <p className="arrow"><ImArrowUpRight2/></p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ImpactCalculator;
