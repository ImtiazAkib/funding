import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import Form from "../Form/Form";
import Features from "../Features/Features";
import { Link } from "react-router-dom";
import { formForState } from "../../info";

const Home = () => {
  return (
    <div>
      <div className={`relative new-container`}>
        <Carousel autoSlideInterval={5000} />
        <div className="autoplay"></div>
        <p className="carousel-info">
          PROVIDING REAL SOLUTIONS FOR YOUR BUSINESS
        </p>
        <div className="moving-sentence">
          <div className="moving-sentence__text">
            Put your trust in General Merchant Funding to help your company
            thrive and grow today. Bad credit, no problem, we provide real
            solutions.
          </div>
        </div>
        <div className="carousel-form">
          <Form info={formForState} />
        </div>
      </div>
      <div>
        <Features />
      </div>
      <div
        className="hero"
        style={{
          backgroundImage: `url("/images/feature.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="text-4xl font-light">BUSINESS LOANS</h2>
            <p className="pt-4 pb-4 text-lg">$1,000 UP TO $3,000,000</p>
            <p className="text-sm pb-6">
              General Merchant Funding has been providing real solutions to
              small and medium businesses throughout the United States through a
              variety of business loans since 2009. Our funding advisors have
              the product knowledge and years of experience to help you get
              approved. Don’t be embarrassed by bad credit, we understand and
              are here to provide the funding your business needs.
            </p>
            <Link
              to="/gmf-application"
              className="inline-flex text-white bg-dark border-0 py-2 px-6 focus:outline-none hover:bg-sky-900 rounded text-lg"
            >
              Start your aplication
            </Link>
          </div>
        </div>
      </div>

      <div className="reviews">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="/images/feature.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                3 MINUTE APPLICATION
              </h1>
              <p className="mb-8 leading-relaxed">
                The funding your business needs can be just around the corner.
                Start the application process today by completing our quick 3
                minute application. It will be the fist step in the right
                direction to get grow your business.
              </p>
              <div className="flex justify-center">
                <Link
                  to="/gmf-application"
                  className="inline-flex text-white bg-dark border-0 py-2 px-6 focus:outline-none hover:bg-sky-900 rounded text-lg"
                >
                  Start your aplication
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
