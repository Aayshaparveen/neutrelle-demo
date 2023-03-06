import React, { useState } from "react";
import "./style.css";
import "../pages/SignIn";
import VerticalTabs from "../VerticalTabs";
const MyGarage = () => {
 
  return (
    <>
      <div className="mygarage-container">
        <div className="Top-box">
          <div className="Heading-contant1">
            <span className="My-Garage">My Garage</span>
            <span className="Details-of-all-of-yo">
              Details of all of your impact and vehicles
            </span>
          </div>
          <div className="Heading-contant2">
            <div className="heading-box">
              <span className="Hey-good-morning">Hey, good morning</span>
              <span className="Eva-Lee">Eva Lee</span>
            </div>
            <div className="image-box">
              <img src="./image/small-img.PNG" />
            </div>
          </div>
        </div>
        <div className="Bottom-box">
          <VerticalTabs/>
        </div>
      </div>
    </>
  );
};

export default MyGarage;
