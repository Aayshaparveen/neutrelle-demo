import React, {useState} from "react";
import "./style.css";
import Slider from "@mui/material/Slider";
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
          <button className="Make-your-Impact1">Make your Impact</button>
          <span className="You-can-calculate">
            * You can calculate how your contribution will make this impact
          </span>
        </div>
        <div className="Img-box">
          <div className="car-img">
            <img src="./image/illustration-car.png" />
          </div>
          <div className="side-img">
            <img src="./image/illustration-landscape-1-e1672209294981.png" />
          </div>
          <div className="bottom-text">
            <span className="How-it-works">How it works?</span>
          </div>
          <div className="Three-col">
            <div className="Calculate-box">
              <img src="./image/icon-calculate-1.png" />
              <span className="Calculate-your-impact">
                Calculate your impact
              </span>
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
          <div className="headingbox">
            <div className="carimg">
              <img src="./image/impact-car.PNG" />
            </div>
            <div className="three-span">
              <span className="Your-Car">Your Car</span>
              <span className="Estimated-carbon-emi">
                Estimated carbon emission
              </span>
              <span className="tCO2e-year">
                0.00137 tCO2e /year • 4 miles/ltr milage
              </span>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="bottombox">
            <div className="impact-box-1">
              <div className="impact-div">
                <span className="Impact-level">Impact level</span>
                {/* <Slider defaultValue={30} aria-label="Disabled slider" /> */}
                <Slider defaultValue={0} step={3} marks min={3} max={9}  />
                <div className="lable-div">

                <p className="first"> Single</p>
                <p className="second">Double</p>
                <p className="third">Tripple</p>
                </div>
              </div>
              <div className="contribution-div">
                <span className="Your-contribution">Your contribution</span>
                <div className="Two-btn">
                  <button className="btn-one">One Time</button>
                  <button className="btn-two">Monthly</button>
                </div>
              </div>
            </div>
               
            <div className="impact-box-2">
              <span className="Trees-planted">3 Trees planted</span>
              <div className="Tree-img-box">
                <img src="./image/icon-plant-1.png" className="Tree-img-1" />
                <img src="./image/icon-plant-1.png" className="Tree-img-2" />
                <img src="./image/icon-plant-1.png" className="Tree-img-3" />
              </div>
              <span className="Month">£0.84 /Month</span>
              <span className="One-year">One year</span>
            </div>
          </div>
        </div>
        <button className="Make-your-Impact2">Make your Impact</button>
        <div className="Last-box">
          <div className="what-impact-div">
            <span className="What-impacts-do-we-m">
              What impacts do we make?
            </span>
          </div>

          <div className="Four-img">
            <div className="Img1">
              <div className="Img1-span1">
                <span className="Reforestation-in-the">
                  Reforestation in the UK
                </span>
              </div>
              <img src="./image/illustration-Reforestation-in-the-UK.png" />
            </div>
            <div className="Img2">
              <div className="Img2-span2">
                <span className="Closing-the-loop-for">
                  Closing the loop for Motorsport
                </span>
              </div>
              <img src="./image/illustration-Closing-the-loop-for-Motorsport-1.png" />
            </div>
            <div className="Img3">
              <div className="Img3-span3">
                <span className="Fuelling-the-Future">Fuelling the Future</span>
              </div>
              <img src="./image/icon-plant-1.png" />
            </div>
            <div className="Img4">
              <div className="Img4-span4">
                <span className="Planting-for-People">Planting for People</span>
              </div>
              <img src="./image/illustration-Fuelling-the-Future-1.png" />
            </div>
          </div>
          <div className="Details-box">
            <span className="Find-out-more">Find out more</span>
            <p className="Arrow">
              <img src="./image/icon-arrow.svg" />
            </p>
          </div>
        </div>
      </div>
      <div className="last-impact">
        <div className="section">
          <div className="box1">
            <h2>Let's decarbonise our World!</h2>
          </div>
          <div className="box2">
            <button className="impact-button">
              <a href="./ImpactCalculator">Make your Impact</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
