import React from "react";
import "./style.css";
const Home = () => {
  return (
    <>
      <div className="Home-container">
        <div className="Home-Title">
          <span className="Help-nature-to-rever">
            Help nature to reverse the damage caused by your car
          </span>
          <span className="Make-a-difference-by">
            Make a difference by contributing today
          </span>
          <button className="Make-your-Impact">Make your Impact</button>
          <span className="You-can-calculate">
            * You can calculate how your contribution will make this impact
          </span>
        </div>
        <div className="Img-box">
          <div className="car-img">
            <img src="./image/illustration-car.png" />
          </div>
          <div className="side-img">
            <img src="./image/illustration-landscape.png" />
          </div>
          <div className="bottom-text">
            <span className="How-it-works">How it works?</span>
          </div>
          <div className="Three-col">
            <div className="Calculate-box">
              <img src="./image/icon-calculate-1.png" />
              <span className="Calculate-your-impact">Calculate your impact</span>
              <span className="Enter-a-few-basic-de">
                Enter a few basic details of your car
              </span>
            </div>
            <div className="Monthly-box">
              <img src="./image/icon-contribute-1.png" />
              <span className="Contribute-mothly-or">
                Contribute mothly or one time
              </span>
              <span className="You-can-choose-a-mon">
                You can choose a monthly base contribution or ontime. Your
                choice.
              </span>
            </div>
            <div className="Trees-box">
              <img src="./image/icon-plant-tree-1.png" />
              <span className="Check-planted-trees">
                Check planted trees on your behalf
              </span>
              <span className="Instantly-check-how">
                Instantly check how many trees we plant on your behalf. We’ll
                also keep you posted
              </span>
            </div>
          </div>
        </div>
        <div className="Home-title2">
          <span className="How-your-contributio">
            How your contribution will make the impact
          </span>
          <span className="These-are-rough-esti">
            These are rough estimation, check your empact by entering your car
            details
          </span>
        </div>
        <div className="impact-box">
          <div className="heading-box">

          <img src="./image/impact-car.PNG"></img>
          <span className="Your-Car">Your Car</span>
          <span className="Estimated-carbon-emi">Estimated carbon emission</span>
          <span className="tCO2e-year">
            0.00137 tCO2e /year • 4 miles/ltr milage
          </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
