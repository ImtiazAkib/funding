import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [dropShow, setDropShow] = useState(false);

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
                onMouseEnter={() => setDropShow(true)}
                onMouseLeave={() => setDropShow(false)}
              >
                <li>Products</li>
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
        <ul
          className={`dropdown bg-green-900 ${
            dropShow ? "dropShow" : "dropHide"
          }`}
          onMouseEnter={() => setDropShow(true)}
          onMouseLeave={() => setDropShow(false)}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/unsecured-loans"
          >
            <li>Unsecured Loans</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/merchant-cash-advance"
          >
            <li>Merchant Cash Advance</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/equipment-financing"
          >
            <li>Equipment Financing</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/lines-of-credit"
          >
            <li>Lines Of Credit</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/credit-card-processing"
          >
            <li>Credit Card Processing</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/credit-repair"
          >
            <li>Credit Repair</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/debt-consolidation"
          >
            <li>Debt Consolidation</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/term-loans"
          >
            <li>Term Loans</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/identity-theft"
          >
            <li>Identity Theft</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
