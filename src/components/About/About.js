import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className=" flex flex-col  md:mt-64 mt-40 mb-24 about">
      <div className="about-head">
        <h1 className="text-5xl uppercase pb-8">PRODUCTS</h1>
        <h2 className="text-3xl pb-7">BUSINESS FUNDING</h2>
        <h3 className="text-base">
          A VARIETY OF OPTIONS TO SUIT EVERY BUSINESS
        </h3>
      </div>
      <div className="md:flex  md:w-4/5 self-center text-sm leading-6">
        <p className="md:pr-5">
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
        <p>
          We offer a wide variety of business financing options and business
          loans to meet the array of needs of our customers. These services
          include Unsecured Loans, Merchant Cash Advances, Secured Loans and
          Equipment Financing. We understand that business owners have varied
          credit profiles, cash flow and revenue. We can quickly and easily
          process applications. Our experienced team of dedicated employees will
          work diligently to get you approved and make the process simple and
          stress free. <br /> <br /> We work hard on a daily basis to achieve
          our main goal. This has always been to provide REAL business solutions
          for the people who need them. We strive to work efficiently, honestly
          and without prejudice. This customer driven formula has proven itself
          time and time again. Put your trust in General Merchant Funding to
          help your company thrive and grow today.
        </p>
      </div>
    </div>
  );
};

export default About;
