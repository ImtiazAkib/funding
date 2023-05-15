import React from "react";
import { useForm } from "react-hook-form";
import "./CommonForm.css";
import emailjs from "@emailjs/browser";

const CommonForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .send("service_5v84lzc", "template_cvs6rwg", data, "f8WQ6GcdeFOqe3dMj")
      .then((res) => console.log("ok"))
      .catch((err) => console.log(err));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="common-form-container">
          <div className="common-single-box">
            <label htmlFor="Name">Name(required)</label>
            <input
              {...register("name", { required: "Your Name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-600">
                Your name is required
              </p>
            )}
          </div>
          <div className="common-single-box">
            <label htmlFor="business">Business Name:</label>
            <input {...register("business")} />
          </div>

          <div className="common-single-box">
            {props.info.select && (
              <label htmlFor={props.info.select}>{props.info.select}</label>
            )}

            {props.info.options && (
              <select {...register(props.info.reg)} className="green-select">
                {props.info.options.map((option) => (
                  <option key={Math.random() * 10} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="common-single-box">
            <label htmlFor="Phone">Phone:</label>
            <input {...register("phone")} />
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
            <label htmlFor="comments">Comments:</label>
            <textarea {...register("comments")} />
          </div>

          <input
            type="submit"
            value="Send message"
            className="message-btn uppercase bg-color"
          />
        </div>
      </form>
    </div>
  );
};

export default CommonForm;
