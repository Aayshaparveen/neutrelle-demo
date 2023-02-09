import React from "react";
import "./BlogStyle.css";

const Blog = () => {
  return (
    <>
      <div className="Blog-box">Blogs</div>
      <div className="blog-container1">
        <div className="Blog1">
          <img src="./image/Blog(1).png" className="Blog-img"></img>
          <span className="Nov-2022-by-Neu">12 Nov 2022 • by Neutrelle</span>
          <span className="The-worlds-healthie">
            The world's healthiest forests are on Indigenous land. Here’s why.
          </span>
          <span className="A-new-report-finds-I">
            A new report finds Indigenous land rights are key to preserving
            biodiversity.
          </span>
        </div>
        <div className="Blog2">
          <img src="./image/Blog(2).png" className="Blog-img"></img>
          <span className="Nov-2022-by-Neu">12 Nov 2022 • by Neutrelle</span>
          <span className="How-sunken-basketbal">
            How sunken basketball courts could protect New Yorkers from the next
            Superstorm Sandy
          </span>
          <span className="The-city-wants-to-us">
            The city wants to use its public housing developments to soak up
            extreme rain.
          </span>
        </div>
        <div className="Blog3">
          <img src="./image/Blog(3).png" className="Blog-img"></img>
          <span className="Nov-2022-by-Neu">12 Nov 2022 • by Neutrelle</span>
          <span className="As-drought-chokes-Mi">
            As drought chokes Mississippi River, barges carrying grain shipments
            have nowhere to go
          </span>
          <span className="With-no-rain-forecas">
            With no rain forecast until January, farmers are left high and dry.
          </span>
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

export default Blog;
