import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" text-white">
        <div className="form-title">
          <h2>Get Funded in 24 Hours or Less</h2>
        </div>
        <div className="form-container bg-color">
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
            <label htmlFor="State">State</label>
            <div className=" glass-select">
              <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>
          </div>

          <input type="submit" value="Get your lone" className="submit-btn" />
        </div>
      </form>
    </div>
  );
};

export default Form;