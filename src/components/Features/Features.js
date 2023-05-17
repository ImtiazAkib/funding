import React from "react";

const Features = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              OUR SERVICES
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              Put your trust in Kesef Capital Group to help your company thrive
              and grow today. Bad credit, no problem, we provide real solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>

              <div className="feature-info">
                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white text-center">
                  MERCHANT CASH ADVANCE
                </h1>

                <p className="text-sm text-gray-500 dark:text-gray-400 pt-3 pb-3">
                  Merchant Cash Advance programs allow a large variety of
                  industries to receive funding based on the flow of revenue
                  coming into the business through the credit card sales:
                </p>
                <ul>
                  <li>Quick Application Process</li>
                  <li>Approvals within 48 Hours</li>
                  <li>No Fixed Terms</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>

              <div className="feature-info">
                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white text-center">
                  BUSINESS LOAN OPTIONS
                </h1>

                <p className="text-sm text-gray-500 dark:text-gray-400 pt-3 pb-3">
                  We also provide a variety of business loans including:
                </p>
                <ul>
                  <li>Healthcare Financing</li>
                  <li>Franchise Programs</li>
                  <li>Secured Loans</li>
                  <li>Line of Credit</li>
                  <li>Asset Based</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                  alt=""
                />
              </div>

              <div className="feature-info">
                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white text-center">
                  UNSECURED LOANS
                </h1>

                <p className="text-sm text-gray-500 dark:text-gray-400 pt-3 pb-3">
                  We judge the health of your business based on your cash
                  flow-not just your credit scores. These programs offer fixed
                  payments, set terms, help build business credit and are tax
                  deductible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Features;
