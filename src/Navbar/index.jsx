import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./style.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar">
      <a href="#" onClick={() => setOpenMenu(false)}>
        <img
          src=".//image/dark-green.png"
          // src="https://neutrelle.co.uk/wp-content/uploads/2022/12/dark-green.png"
          className="logo"
          // alt="logo"
        />
      </a>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link bottom-dash" : "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
              to="/"
              end
            >
              Our Mission
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link bottom-dash" : "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
              to="/ImpactCalculator"
            >
              Impact Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link bottom-dash" : "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
              to="/MyGarage"
            >
              My Garage
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link bottom-dash" : "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
              to="/Blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link bottom-dash" : "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
              to="/ContactUs"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <div onClick={() => setOpenMenu(true)}>
            <GiHamburgerMenu className="mobile-nav-icon" />
          </div>
          <AiOutlineClose
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
