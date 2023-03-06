import React, { useState } from "react";
import "./KnowImpact.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
  const [impactlevel, setImpactlevel] = useState(1);
  const [mileageValue, setMileageValue] = useState();
  const handelImpactlevel = (event) => {
    setImpactlevel(event.target.value);
    console.log(event.target.value);
  };
  // const navigate = useNavigate();
  // const openmilage = (name) => {
    
  //   navigate("/MyGarage",{
  //     state: {
  //     value: mileageValue
  //     }
  //   });
  // };
  const handelMileage =(e) =>{
    setMileageValue(e.target.value);
  }
  function scrollWin() {
    window.scrollTo(200, 0);
  }
  return (
    <>
      <div className="Impact-heading">
        <div className="Impact-text"> Impact Calculator</div>
      </div>
      <div className="Impact-box">
        <div className="Impact-heading-box">
          <div className="left-text">
            <span className="Mercedese-Benz-2">Mercedese-Benz</span>
            <span className="Petrol">2022 • Petrol</span>
          </div>
          <div className="Sb-box-right">
            <span className="SB71-HJN-2">SB71 HJN</span>
          </div>
        </div>
        <hr />
        <div className="Two-box">
          <div className="Box-1">
            <div className="milage-box">
              <TextField
              value={mileageValue}
              onChange={handelMileage}
                id="demo-helper-text-misaligned-no-helper"
                label="Mileage"
                placeholder="Milage value"
                // state={{
                //   value: mileageValue 
                // }}
                
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
                  onChange={handelImpactlevel}
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
                <Link to="/MyGarage">

                <button >Add To Cart</button>
                </Link>
              </div>
              <div className="text">
                <span className="Month">£0.84 /Month</span>
                <span className="Months">12 Months</span>
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
                  // onChange={handelImpactlevel}
                  style={
                    impactlevel == 1
                      ? { color: "rgb(88, 218, 113)" }
                      : impactlevel == 2
                      ? { color: "rgb(51, 197, 255)" }
                      : { color: "rgb(97, 66, 234)" }
                  }
                />
                <span className="-tCO2e">0.06614 tCO2e</span>
              </div>
              <div className="second-tree">
                <div className="tree-img">
                  <img src="../image/icon-plant-1.png" className="Tree-img-1" />
                  <img src="../image/icon-plant-1.png" className="Tree-img-2" />
                  <img src="../image/icon-plant-1.png" className="Tree-img-3" />
                </div>
                <span className="num">+7</span>
                <span className="-Trees-planted">10 Trees planted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowImpact;
