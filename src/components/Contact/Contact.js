import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900 md:mt-64 mt-28 mb-28">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          BUILDING SUCCESSFUL RELATIONSHIPS
        </h1>
        <p className="text-gray-500 text-sm mt-5">
          Kesef Capital Group takes pride in the large variety of relationships
          we have been able to build and maintain through the years. We have
          worked with a variety of different businesses, from industry leaders
          in cash advance to the smaller mom and pop shops. We value every
          relationship and, no matter how large or small, you are our top
          priority. Contact Kesef Capital Group today to learn more about the
          programs we offer and how you too can be a part of our great success.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 text-white bg-green-100 rounded-full dark:text-white bg-color">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              GET IN CONTACT
            </h1>
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Talk to a funding specialist.
            </h2>

            <p className="text-gray-500 dark:text-gray-300">
              Get paired with a trusted advisor to talk about your business
              needs.
            </p>

            <Link
              to=""
              className="inline-flex text-white bg-color border-0 py-2 px-6 focus:outline-none  rounded text-lg"
            >
              Reach Out
            </Link>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 text-white bg-green-100 rounded-full dark:text-white bg-color">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              FILL OUT AN APPLICATION
            </h1>
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Apply for financing.
            </h2>

            <p className="text-gray-500 dark:text-gray-300">
              Tell us about your business and upload supporting documents.
            </p>

            <Link
              to=""
              className="inline-flex text-white bg-color border-0 py-2 px-6 focus:outline-none rounded text-lg"
            >
              Apply Now
            </Link>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 text-white bg-green-100 rounded-full dark:text-white bg-color">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              PARTNER WITH US
            </h1>
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
              Become an affiliate or broker.
            </h2>

            <p className="text-gray-500 dark:text-gray-300">
              A member of our team will reach out to start building a succesful
              relationship
            </p>

            <Link
              to="/partnership-programs"
              className="inline-flex text-white bg-color border-0 py-2 px-6 focus:outline-none  rounded text-lg"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
