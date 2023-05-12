import React from "react";
import "./PartnershipPrograms.css";
import CommonForm from "../CommonForm/CommonForm";

const PartnershipPrograms = () => {
  return (
    <div className="contact-container md:flex justify-evenly mt-9 mb-9">
      <div>
        <h1 className="text-4xl">PARTNERSHIP PROGRAMS</h1>
        <h2 className="text-2xl mt-10">BUILDING SUCCESSFUL RELATIONSHIPS</h2>
        <p className="text-gray-500 text-sm mt-5">
          General Merchant Funding takes pride in the large variety of
          relationships we have been able to build and maintain through the
          years. <br /> <br />
          We have worked with a variety of different businesses, from industry
          leaders in cash advance to the smaller ISO’s, sales agents and
          affiliates. We value every relationship, no matter how large or small
          and you are our top priority. Contact General Merchant Funding today
          to learn more about the programs we offer and how you too can be a
          part of our great success. <br /> <br />
          Complete the form and a member of our team will contact you to start
          building a successful relationship!
        </p>
      </div>
      <div>
        <CommonForm />
      </div>
    </div>
  );
};

export default PartnershipPrograms;
