import React from "react";
import "./KnowImpact.css";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
const KnowImpact = () => {
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
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Mileage"
                placeholder="Milage value"
              />
              <div className="Two-btn1">
                <button className="btn-one-km">Km</button>
                <button className="btn-two-mi">Miles</button>
              </div>
            </div>
            <div className="impact-div-2">
              <span className="Impact-level">Impact level</span>

              <Slider defaultValue={0} step={3} marks min={3} max={9} />
              <div className="lable-div">
                <p className="first"> Single</p>
                <p className="second">Double</p>
                <p className="third">Tripple</p>
              </div>
            </div>
            <div className="Two-btn2">
              <button className="btn-one">One Time</button>
              <button className="btn-two">Monthly</button>
            </div>
            <hr className="imp-hr" />
            <div className="Last-two-containt">
              <div className="Add-btn">
                <button>Add To Cart</button>
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
                <img src="../image/mercedes_logos.png" />
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
