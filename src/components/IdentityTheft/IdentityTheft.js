import React from "react";
import "./IdentityTheft.css";

const IdentityTheft = () => {
  return (
    <div className="mt-40">
      {/* -------------------Header Section in Start Part-------------------- */}
      <div className="header">
        <div
          className="hero"
          style={{
            backgroundImage: `url("/images/identity.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">HEADER</h1>
              <p className="mb-5">
                Comprehensive Identity Theft Protection Let IDSeal protect you
                and your family from cyber attacks.
              </p>
              <button className="flex mx-auto mt-16 text-white bg-dark border-0 py-2 px-8 focus:outline-none  rounded text-lg">
                My Plans
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------Header Section in Start Part-------------------- */}
      {/* -------------------Cards Group-------------------- */}
      <div className="card-groups">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                HOW DOES IDSEAL PROTECTION WORK?
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Always-connected shouldn’t mean always at risk. IDSeal works
                around the clock to protect your personal data, maintain your
                privacy and prevent identity theft. Let IDSeal help keep your
                sensitive information safe and sealed.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div
                className="lg:flex-1 m-4 text-center border rounded-lg"
                style={{ boxShadow: "var(--light-shadow)" }}
              >
                <div className=" p-6 h-full">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-dark text-white mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    ENROLL
                  </h2>
                  <p className="leading-relaxed text-sm">
                    It’s fast and easy to get you and your family protected.
                    Simply choose a plan that fits your household, complete your
                    user profile(s), and IDSeal will handle the rest.
                  </p>
                </div>
              </div>
              <div
                className="lg:flex-1 m-4 text-center border rounded-lg"
                style={{ boxShadow: "var(--light-shadow)" }}
              >
                <div className=" p-6 ">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-dark text-white mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    MONITOR & ALERT
                  </h2>
                  <p className="leading-relaxed text-sm">
                    DSeal monitors your personal information, and with
                    proprietary technology, alerts you to a wide range of
                    potential threats to your identity. IDSeal can detect stolen
                    personal data on more than 600,000 Dark Web pages,
                    file-sharing sources, black market forums and more.
                  </p>
                </div>
              </div>
              <div
                className="lg:flex-1 m-4 text-center border rounded-lg"
                style={{ boxShadow: "var(--light-shadow)" }}
              >
                <div className=" p-6  h-full">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-dark text-white mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    RESOLVE
                  </h2>
                  <p className="leading-relaxed text-sm">
                    If your identity becomes compromised, one of IDSeal’s
                    U.S.-based Fraud Resolution Specialists will help you. It’s
                    like having an advocate at a credit bureau working for you
                    on the inside to help resolve any issues you may have with
                    identity theft.
                  </p>
                </div>
              </div>
              <div
                className="lg:flex-1 m-4 text-center border rounded-lg"
                style={{ boxShadow: "var(--light-shadow)" }}
              >
                <div className=" p-6  h-full">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-dark text-white mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    REIMBURSE
                  </h2>
                  <p className="leading-relaxed text-sm">
                    Included in all IDSeal plans, identity theft insurance
                    provides reimbursement for up to $1M with a $0 deductible,
                    for expenses associated with your identity theft recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* -------------------Cards Group-------------------- */}
      {/* -------------------Header Section in Middle Part-------------------- */}
      <div className="header">
        <div
          className="hero"
          style={{
            backgroundImage: `url("/images/identity.jpg")`,
            height: "100%",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-2xl font-bold">
                IDSEAL HAS YOU COVERED
              </h1>
              <p className="mb-5 tex-sm">
                Your IDSeal Membership Includes A Wide Range Of Identity Theft
                Protection Services, Including:
              </p>

              <div className="max-w-md md:ml-44 ml-3">
                <ul className="list-disc">
                  <li>3-Bureau Credit Reports, Scores and Monitoring</li>
                  <li>Identity Theft Insurance</li>
                  <li>Court and Criminal Records Monitoring</li>
                  <li>Social Media Monitoring</li>
                </ul>
              </div>

              <button className="flex mx-auto mt-16 text-white bg-dark border-0 py-2 px-8 focus:outline-none hover:bg-sky-900 rounded text-lg">
                My Plans
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------Header Section in Middle Part-------------------- */}
      {/* -----------------------plans------------------------------------------ */}
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                All IDSeal Plans Also Include
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-dark inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center  text-dark mb-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi w-14 h-14 bi-phone"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                      fill="#142951"
                    ></path>{" "}
                    <path
                      d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      fill="#142951"
                    ></path>{" "}
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Free IOS And Android App
                  </h2>
                  <p className="leading-relaxed text-base">
                    Download the app to receive alerts and notifications on the
                    go.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center text-green-500 mb-5 flex-shrink-0">
                  <svg
                    style={{ color: "#142951" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi w-14 h-14 bi-wallet"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />{" "}
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Lost Wallet Protection
                  </h2>
                  <p className="leading-relaxed text-base">
                    Download the app to receive alerts and notifications on the
                    go.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center text-dark mb-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi w-14 h-14 bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      fill="#142951"
                    ></path>{" "}
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    24/7 Member Support
                  </h2>
                  <p className="leading-relaxed text-base">
                    Download the app to receive alerts and notifications on the
                    go.
                  </p>
                </div>
              </div>
            </div>
            <button className="flex mx-auto mt-16 text-white bg-dark border-0 py-2 px-8 focus:outline-none hover:bg-sky-900 rounded text-lg">
              My Plans
            </button>
          </div>
        </section>
      </div>
      {/* -----------------------plans------------------------------------------ */}

      {/* -------------------------testimonial------------------------- */}
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="xl:w-4/5 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                This Theme is just awesome. It is so easy to create a gorgeous
                looking sites. I would also like to mention their excellent and
                superfast support. It never took more than 2-3hours to have the
                correct solution. I'm going to buy more themes of them, sure!
                Keep up the good work.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-dark mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                MARIE CLARK
              </h2>
            </div>
          </div>
        </section>
      </div>
      {/* -------------------------testimonial------------------------- */}
    </div>
  );
};

export default IdentityTheft;
