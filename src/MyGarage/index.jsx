import React from "react";
import "./style.css"
const MyGarage = () => {
  return (
    <>
      <div className="mygarage-container">
        <div className="Top-box">
          <div className="Heading-contant1">
            <span class="My-Garage">My Garage</span>
            <span class="Details-of-all-of-yo">
              Details of all of your impact and vehicles
            </span>
          </div>
          <div className="Heading-contant2">
            <div className="heading-box">
            <span class="Hey-good-morning">Hey, good morning</span>
            <span class="Eva-Lee">Eva Lee</span>
            </div>
            <div className="image-box">
                <img  src="./image/small-img.PNG"/>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default MyGarage;
