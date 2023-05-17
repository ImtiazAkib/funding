import React from "react";
import "./GmfApplication.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const GmfApplication = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_m8rltto", "template_bhm28fq", data, "f8WQ6GcdeFOqe3dMj")
      .then((res) => console.log("ok"))
      .catch((err) => console.log(err));
    reset();
  };

  return (
    <div className="gmf-container md:flex justify-evenly  md:mt-64 mt-40 md:pl-9">
      <div className="gmf-left">
        <h1 className="text-3xl mb-7">
          LET OUR TEAM START WORKING FOR YOU TODAY!
        </h1>
        <p className="text-sm">
          The funding your business needs can be just around the corner. Start
          the application process today by completing our quick 3 minute
          application. It will be the first step in the right direction to grow
          your business. We understand that asking for help can be difficult
          especially if you do not have desirable credit. Our team of dedicated
          professionals understand your concerns and are here to guide you
          through the entire application process. <br />
          <br />
          Taking the first step to applying for business funding is the hardest.
          Imagine the relief you will feel knowing you are one step closer to
          getting the funding your business needs. Businesses need funding for a
          variety of reasons, and no matter what situation you are in – we are
          here to help.
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="common-form-container">
            <div className="common-single-box">
              <label htmlFor="Requested Amount">Requested Amount*</label>
              <input
                type="number"
                {...register("requestedAmount", {
                  required: "Requested Amount is required",
                })}
                aria-invalid={errors.requestedAmount ? "true" : "false"}
              />
              {errors.requestedAmount?.type === "required" && (
                <p role="alert" className="text-red-600">
                  Requested Amount is required
                </p>
              )}
            </div>
            <div className="common-single-box">
              <label htmlFor="Monthly Business Revenue">
                Monthly Business Revenue*
              </label>
              <input
                type="number"
                {...register("monthlyBusinessRevenue", {
                  required: "Monthly Business Revenue is required",
                })}
                aria-invalid={errors.monthlyBusinessRevenue ? "true" : "false"}
              />
              {errors.monthlyBusinessRevenue?.type === "required" && (
                <p role="alert" className="text-red-600">
                  Monthly Business Revenue is required
                </p>
              )}
            </div>

            <div className="common-single-box">
              <label htmlFor="purpose">Purpose of funding?*</label>

              <select {...register("purpose")} className="green-select">
                <option value="Expansion">Expansion</option>
                <option value="Fund Existing Project">
                  Fund Existing Project
                </option>
                <option value="Payroll">Payroll</option>
                <option value="Pay Outstanding Debt">
                  Pay Outstanding Debt
                </option>
                <option value="Consolidation">Consolidation</option>
                <option value="Start a New Venture">Start a New Venture</option>
                <option value="Improve Cash Flow">Improve Cash Flow</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="common-single-box">
              <label htmlFor="about">How did you hear about Us?*</label>

              <select {...register("about")} className="green-select">
                <option value="Google Search">Google Search</option>
                <option value="Other Search Engine">Other Search Engine</option>
                <option value="Email Campaign">Email Campaign</option>
                <option value="Direct Mail">Direct Mail</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="common-single-box">
              <label htmlFor="FirstName">FirstName*</label>
              <input
                {...register("firstName", {
                  required: "First Name is required",
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName && (
                <p role="alert" className="text-red-600">
                  {errors.firstName?.message}
                </p>
              )}
            </div>
            <div className="common-single-box">
              <label htmlFor="LastName">LastName*</label>
              <input
                {...register("lastName", { required: "Last Name is required" })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName && (
                <p role="alert" className="text-red-600">
                  {errors.lastName?.message}
                </p>
              )}
            </div>
            <div className="common-single-box">
              <label htmlFor="Email">Email(required)</label>
              <input
                {...register("mail", { required: "Email Address is required" })}
                aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.mail && (
                <p role="alert" className="text-red-600">
                  {errors.mail?.message}
                </p>
              )}
            </div>
            <div className="common-single-box">
              <label htmlFor="Phone">Phone:</label>
              <input {...register("phone")} />
            </div>

            <input type="submit" className="message-btn uppercase bg-color" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GmfApplication;
