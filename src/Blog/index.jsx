import React from "react";
import "./style.css";

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
      <div className="blog-container2">
        <div className="Blog4">
          <img src="./image/Blog(4).png" className="Blog-img"></img>
          <span className="Nov-2022-by-Neu">12 Nov 2022 • by Neutrelle</span>
          <span className="million-tons-of">
            380 million tons of plastic are made every year. None of it is truly
            recyclable.
          </span>
          <span className="Not-even-water-bottl">
            Not even water bottles and milk jugs meet standards for
            recyclability, a new report finds.
          </span>
        </div>
        <div className="Blog5">
          <img src="./image/Blog(5).png" className="Blog-img"></img>
          <span className="Nov-2022-by-Neu">12 Nov 2022 • by Neutrelle</span>
          <span className="Idaho-cobalt-mine-is">
            Idaho cobalt mine is a harbinger of what’s to come
          </span>
          <span className="A-new-venture-near-S">
            A new venture near Salmon signals an uptick in hardrock mining
            across the West.
          </span>
        </div>
        <div className="Blog6">
          <img src="./image/Blog(6).png" className="Blog-img"></img>
          <span className="Nov-2022-by-Neu">12 Nov 2022 • by Neutrelle</span>
          <span className="Disaster-debris-is-p">
            Disaster debris is pushing Puerto Rico’s landfills to the brink
          </span>
          <span className="Composting-could-be">
            Composting could be the solution.
          </span>
        </div>
      </div>
      <div className="Readmore-box">
        <button className="Readmore-button">Read More</button>
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
