import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 50;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > navbarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="responsive-nav">
        <div className="head-container">
          <div className="head-top">
            <img src="/images/logo.png" alt="logo" className="logo" />
          </div>
        </div>
        <div className="">
          <button className="show-btn" onClick={() => setToggle(!toggle)}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div
          className={`nav-container ${isSticky ? "sticky" : ""} ${
            toggle ? "hide" : ""
          }`}
        >
          <div className={`nav bg-color`}>
            <ul>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                <li>About Us</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/products"
              >
                <li>Products</li>
                {/* <ul>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/gmf-application"
                  >
                    <li>3 Minute Application</li>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/gmf-application"
                  >
                    <li>3 Minute Application</li>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/gmf-application"
                  >
                    <li>3 Minute Application</li>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/gmf-application"
                  >
                    <li>3 Minute Application</li>
                  </NavLink>
                </ul> */}
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/gmf-application"
              >
                <li>3 Minute Application</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/partnership-programs"
              >
                <li>Partnership Programs</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/reviews"
              >
                <li>News & Reviews</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/contact"
              >
                <li>Contact Us</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
