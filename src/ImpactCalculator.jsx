import React from "react";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { LinearProgress } from '@mui/material';
import ImpactCalculatorStyle from './ImpactCalculatorStyle.css';
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'gray',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
       boxShadow:'0px 2px 2px 0px',
        borderRadius: '1px 15px',
        border:'0px '
      },
      '&.Mui-focused fieldset': {
        // borderColor: 'black',
        border: '1px solid black',
        borderRadius: '1px 15px',
      },
    },
  });
const ImpactCalculator = () => {
  return (
    <>
      <h1 className="heading">Impact Calcultor</h1>
      <div className="main-container">
        <h2 className="title">Check your car's Impact</h2>
        <p className="sub-title">Enter your car details to check</p>
        <div className="Registration-box">
        <CssTextField
          label="Enter Registration Number*"
          id="custom-css-outlined-input"
        />
        <button>Check Registration Number</button>
        </div>
        <div className="linear-box">
         <div className="left-linear">
            <p>OR</p>
            <div className="right-linear"></div>
            <div className="details">
                <p>Enter details manually</p>
            </div>
         </div>

        </div>
      </div>
    </>
  );
};

export default ImpactCalculator;
