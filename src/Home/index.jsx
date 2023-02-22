import React from "react";
import "./style.css";
const Home = () => {
  return (
    <><div className="Home-container">
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
            <img src="./image/illustration-car.png"/>
        </div>
        <div className="side-img">
            <img src="./image/illustration-landscape.png"/>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
