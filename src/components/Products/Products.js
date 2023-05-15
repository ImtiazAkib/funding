import React from "react";
import { NavLink } from "react-router-dom";
import "./Products.css";

const Products = () => {
  return (
    <div className=" flex flex-col  md:mt-64 mt-40 mb-24 about">
      <div className="about-head">
        <h1 className="text-5xl uppercase pb-8">About us</h1>
        <h2 className="text-3xl pb-7">BUSINESS FINANCING OPTIONS</h2>
        <h3 className="text-base">
          PUT YOUR TRUST IN GENERAL MERCHANT FUNDING
        </h3>
      </div>
      <div className="md:flex  md:w-4/5 self-center text-sm leading-6">
        <p className="md:pr-5 products-info">
          Kesef Capital Group is a financing firm specializing in providing
          business financing options to small and medium sized businesses
          throughout the United States. The companies founders have been on the
          other side of the table. They have worked on Main Street running their
          own companies and experienced the daily struggles many business owners
          face. We have learned from this experience, creating our own niche
          providing these companies with alternative financing options. <br />{" "}
          <br /> Our “Strength in Numbers” motto will continue to support
          businesses as the global economy continues to move. We firmly believe
          that independent business owners will continue to grow the nation’s
          economy and we are ready to help in any capacity we can. Over the
          years working with business owners, we’ve helped provide over $200
          million in unsecured capital for companies. They have used this
          capital to expand their operations, hire new employees, add locations,
          purchase equipment and consolidate debt.
        </p>
        <div className="md:pl-28 pl-10 products-links">
          <ul>
            <NavLink to="/unsecured-loans">
              <li>Unsecured Loans</li>
            </NavLink>
            <NavLink to="/merchant-cash-advance">
              <li>Merchant Cash Advance</li>
            </NavLink>
            <NavLink to="/term-loans">
              <li>Term Loans</li>
            </NavLink>
            <NavLink to="/equipment-financing">
              <li>Equipment Financing</li>
            </NavLink>
            <NavLink to="/line-of-credit">
              <li>Line Of Credit</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
