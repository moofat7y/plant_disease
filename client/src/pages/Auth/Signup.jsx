import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import LoadingBtn from "../../components/loading/LoadingBtn";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { notifyError, notifySuccess } from "../../utils/helpers";
import api from "../../utils/api";
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [submitData, setSubmitData] = useState({
    isLoading: false,
    isSuccess: false,
    isError: null,
  });

  async function onSubmit(data) {
    setSubmitData((prev) => {
      return { ...prev, isLoading: true };
    });
    try {
      const res = await api.put("auth/signup", data);
      setSubmitData((prev) => {
        return { ...prev, isLoading: false };
      });
      reset();
      notifySuccess(res?.data?.message);
      navigate("/auth/signin");
    } catch (error) {
      notifyError(error?.response?.data?.message);
      setSubmitData((prev) => {
        return {
          ...prev,
          isLoading: false,
          isError: error?.response?.data?.message,
        };
      });
    }
  }
  return (
    <div className="signup ">
      <div className="py-3 text-center">
        <h2 className="fw-bold fs-1 mb-1">Join Now</h2>
        <span className="fs-6  text-secondary">
          <span className="">Main</span>
          <BsDot className="fs-5" />
          <span>Signup</span>
        </span>
      </div>
      <div className="wrraper  bg-white w-100 ">
        <div className="text-center">
          <h3 className="semibold">Create Account</h3>
          <p>
            Already have an account?
            <Link to="/auth/signin" className="mx-1">
              Signin
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group flex-nowrap  gap-3 mb-3">
            <div className="flex-grow-1">
              <input
                {...register("firstname", {
                  required: "firstname is required",
                  minLength: { value: 2, message: "Invalid firstname" },
                })}
                type="text"
                className={`form-control px-3 py-2  ${
                  errors.firstname ? "is-invalid" : ""
                }`}
                placeholder="First Name"
              />
              {errors.firstname ? (
                <div className="invalid-feedback">
                  {errors.firstname.message}
                </div>
              ) : null}
            </div>

            <div className="flex-grow-1">
              <input
                {...register("lastname", {
                  required: "lastname is required",
                  minLength: { value: 2, message: "Invalid lastname" },
                  maxLength: { value: 10, message: "Invalid lastname" },
                })}
                type="text"
                className={`form-control px-3 py-2  ${
                  errors.lastname ? "is-invalid" : ""
                }`}
                placeholder="Last Name"
              />
              {errors.lastname ? (
                <div className="invalid-feedback">
                  {errors.lastname.message}
                </div>
              ) : null}
            </div>
          </div>

          <div className="input-group mb-3">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email",
                },
              })}
              type="text"
              className={`form-control px-3 py-2 ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Email"
            />
            {errors.email ? (
              <div className="invalid-feedback">{errors.email.message}</div>
            ) : null}
          </div>

          <div className="mb-3 form-group">
            <div className=" position-relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
                    message:
                      "Password should be combination of one uppercase , one lower case, one special char, one digit and min 6 , max 20 char long",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "Password should be combination of one uppercase , one lower case, one special char, one digit and min 6 , max 20 char long",
                  },
                })}
                type={`${passwordShow ? "text" : "password"}`}
                name="password"
                className={`form-control px-3 py-2 ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Password"
              />
              <div
                onClick={() => setPasswordShow((prev) => !prev)}
                role="button"
                className="password-switch position-absolute top-50 end-0 translate-middle"
              >
                {passwordShow ? (
                  <VscEyeClosed className="fs-6" />
                ) : (
                  <VscEye className="fs-6" />
                )}
              </div>
            </div>
            {errors.password ? (
              <div className="invalid-feedback d-block">
                {errors.password.message}
              </div>
            ) : null}
          </div>

          <div className="mb-3 ">
            <div className="position-relative">
              <input
                type={`${confirmPasswordShow ? "text" : "password"}`}
                name="confirmPassword"
                className={`form-control px-3 py-2 ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return "Passwords do not match";
                    }
                  },
                })}
              />
              <div
                onClick={() => setConfirmPasswordShow((prev) => !prev)}
                role="button"
                className="password-switch position-absolute top-50 end-0 translate-middle"
              >
                {confirmPasswordShow ? (
                  <VscEyeClosed className="fs-6" />
                ) : (
                  <VscEye className="fs-6" />
                )}
              </div>
            </div>
            {errors.confirmPassword ? (
              <div className="invalid-feedback d-block">
                Passwords do not match{" "}
              </div>
            ) : null}
          </div>

          <p className="text-secondary fs-7">
            By continuing, you agree to Conditions of Use and Privacy Notice.
          </p>

          <LoadingBtn
            label="Signup"
            bgcolor="btn-primary"
            textcolor="text-white"
            loading={submitData.isLoading}
            extraClass="py-3 w-100 mb-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
