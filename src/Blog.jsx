import React from "react";
import "./BlogStyle.css";

const Blog = () => {
  return (
    <>
      <div className="Blog-box">Blog</div>
      <div className="blog-container1">
        <div className="Blog1">
          <img src="./image/Blog(1).png" className="Blog-img"></img>
          <span class="Nov-2022-by-Neu">12 Nov 2022 • by Neutrelle</span>
          <span class="The-worlds-healthie">
            The world's healthiest forests are on Indigenous land. Here’s why.
          </span>
          <span class="A-new-report-finds-I">
            A new report finds Indigenous land rights are key to preserving
            biodiversity.
          </span>
        </div>
        <div className="Blog2"></div>
        <div className="Blog3"></div>
      </div>
    </>
  );
};

export default Blog;
