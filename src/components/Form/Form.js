import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import emailjs from "@emailjs/browser";

const Form = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_m8rltto", "template_cvs6rwg", data, "f8WQ6GcdeFOqe3dMj")
      .then((res) => console.log("ok"))
      .catch((err) => console.log(err));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" text-white">
        <div className="form-title bg-sky-900">
          <h2>Get Funded in 24 Hours or Less</h2>
        </div>
        <div className="form-container bg-dark">
          <div className="single-box">
            <label htmlFor="Name">Your Name</label>
            <input
              {...register("name", { required: "Your Name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-300">
                Your name is required
              </p>
            )}
          </div>

          <div className="single-box">
            <label htmlFor="Email">Your Email</label>
            <input
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && (
              <p role="alert" className="text-red-300">
                {errors.mail?.message}
              </p>
            )}
          </div>

          <div className="single-box">
            <label htmlFor="Phone">Your Phone</label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p role="alert" className="text-red-300">
                {errors.phone?.message}
              </p>
            )}
          </div>
          <div className="single-box">
            <label htmlFor="Loan Amount">Loan Amount</label>
            <input
              type="number"
              {...register("loanAmount", {
                required: "Loan Amount is required",
              })}
              aria-invalid={errors.loanAmount ? "true" : "false"}
            />
            {errors.loanAmount && (
              <p role="alert" className="text-red-300">
                {errors.loanAmount?.message}
              </p>
            )}
          </div>

          <div className="single-box">
            <label htmlFor="State">State</label>
            <div className=" glass-select">
              {props.info && (
                <select {...register("state")}>
                  {props.info.options.map((info) => (
                    <option key={Math.random() * 10} value={info}>
                      {info}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          <input
            type="submit"
            value="Get your Loan"
            className="submit-btn uppercase"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
