import React, { useState } from "react";
import "./KnowImpact.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useLocation, useNavigate } from "react-router-dom";

const marks = [
  {
    value: 1,
    label: "Single",
  },
  {
    value: 2,
    label: "Double",
  },
  {
    value: 3,
    label: "Tripple",
  },
];

const KnowImpact = () => {
  const location = useLocation();
  console.log("uselocation", location.state);

  const [impactlevel, setImpactlevel] = useState(1);
  const [mileagevalue, setMileagevalue] = useState(location.state.mileageValue);

  const handleMileagevalue = (e) => {
    setMileagevalue(e.target.button);
    console.log("valuebtn", e.target.button);
  };
  const handleImpactlevel = (event) => {
    setImpactlevel(event.target.value);
  };

  function scrollWin() {}
  const navigate = useNavigate();
  const openTab = () => {
    window.scrollTo(100, 0);
    const data = {
      ...location.state,
      singleImpact: impactlevel == 1 ? location.state.mileageValue : 0,
      doubleImpact: impactlevel == 2 ? location.state.mileageValue : 0,
      trippleImpact: impactlevel == 3 ? location.state.mileageValue : 0,
      bgColor:
        impactlevel == 1
          ? { color: "rgb(88, 218, 113)" }
          : impactlevel == 2
          ? { color: "rgb(51, 197, 255)" }
          : { color: "rgb(97, 66, 234)" },
    };
    navigate("/MyGarage", { state: data });
  };

  return (
    <>
      <div className="Impact-heading">
        <div className="Impact-text"> Impact Calculator</div>
      </div>
      <div className="Impact-box">
        <div className="Impact-heading-box">
          <div className="left-text">
            <span className="Mercedese-Benz-2">{location.state.name}</span>
            <span className="Petrol">
              {location.state.year.$y} {location.state.variant}
            </span>
          </div>
          <div className="Sb-box-right">
            <span className="SB71-HJN-2">{location.state.Rnum}</span>
          </div>
        </div>
        <hr />
        <div className="Two-box">
          <div className="Box-1">
            <div className="milage-box">
           
                <TextField
                  value={mileagevalue}
                  onChange={handleMileagevalue}
                  id="demo-helper-text-misaligned-no-helper"
                  label="Mileage"
                  placeholder="Milage value"
                  defaultValue = 'Initial value' 
                
                />
            
              <div className="Two-btn1">
                <button className="btn-one-km">Km</button>
                <button className="btn-two-mi">Miles</button>
              </div>
            </div>
            <div className="impact-div-2">
              <span className="Impact-level">Impact level</span>
              <Box>
                <Slider
                  style={
                    impactlevel == 1
                      ? { color: "rgb(88, 218, 113)" }
                      : impactlevel == 2
                      ? { color: "rgb(51, 197, 255)" }
                      : { color: "rgb(97, 66, 234)" }
                  }
                  onChange={handleImpactlevel}
                  aria-label="Custom marks"
                  max={3}
                  min={1}
                  marks={marks}
                />
              </Box>
            </div>
            <div className="Two-btn2">
              <button className="btn-one">One Time</button>
              <button className="btn-two">Monthly</button>
            </div>
            <hr className="imp-hr" />
            <div className="Last-two-containt">
              <div className="Add-btn">
                <button onClick={openTab}>Add To Cart</button>
              </div>
              <div className="text">
                <span className="Month"> £10.05</span>
                {/* <span className="Months">12 Months</span> */}
                {/* {handleButton== 0 ? 10.05 :button== 2 ? 234 :0} */}
              </div>
            </div>
          </div>
          <div className="Box-2">
            <div className="Your-impact">
              <span className="YOUR-IMPACT">YOUR IMPACT</span>
            </div>
            <div className="Two-images">
              <div className="first-circle">
                <img
                  src="../image/mercedes_logos.png"
                  style={
                    impactlevel == 1
                      ? { color: "rgb(88, 218, 113)" }
                      : impactlevel == 2
                      ? { color: "rgb(51, 197, 255)" }
                      : { color: "rgb(97, 66, 234)" }
                  }
                />
                <span className="-tCO2e">
                  {impactlevel == 1
                    ? 0.001
                    : impactlevel == 2
                    ? 0.002
                    : impactlevel == 3
                    ? 0.003
                    : 0}
                  tCO2e
                </span>
              </div>
              <div className="second-tree">
                <div className="tree-img">
                  <img src="../image/icon-plant-1.png" className="Tree-img-1" />
                  <img src="../image/icon-plant-1.png" className="Tree-img-2" />
                  <img src="../image/icon-plant-1.png" className="Tree-img-3" />
                </div>
                {/* <span className="num">+7</span> */}
                <span className="-Trees-planted">1 Trees planted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowImpact;
// const navigate = useNavigate();
// const openmilage = (name) => {

//   navigate("/MyGarage",{
//     state: {
//     value: mileageValue
//     }
//   });
// };
