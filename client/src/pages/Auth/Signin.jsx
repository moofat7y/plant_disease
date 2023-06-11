import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import LoadingBtn from "../../components/loading/LoadingBtn";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordShow, setPasswordShow] = useState(false);
  const { isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(data) {
    dispatch(login({ data, navigate }));
  }
  return (
    <div className="signin col-xl-6 col-lg-8 ">
      <div className="py-3 text-center">
        <h2 className="fw-bold fs-1 mb-1">Login</h2>
        <span className="fs-6  text-secondary">
          <span className="">Main</span>
          <BsDot className="fs-5" />
          <span>Login</span>
        </span>
      </div>
      <div className="wrraper  bg-white w-100 ">
        <div className="text-center">
          <h3 className="semibold">Signin</h3>
          <p>
            Don't have an account?
            <Link to="/auth/signup" className="mx-1">
              Create account
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group mb-3">
            <input
              {...register("email", {
                required: "Email required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email",
                },
              })}
              type="text"
              className={`form-control px-3 py-2  ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Email"
            />
            {errors.email ? (
              <div className="invalid-feedback">{errors.email.message}</div>
            ) : null}
          </div>

          <div className=" form-group">
            <div className=" position-relative">
              <input
                {...register("password", {
                  required: "Password is required",
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
          <Link className="mb-3 mt-2 d-inline-block" to="/auth/forgot-password">
            Forgot passwrod?
          </Link>
          <LoadingBtn
            label="Login"
            bgcolor="btn-primary"
            loading={isLoading}
            textcolor="text-white"
            extraClass="py-3  w-100"
          />
        </form>
      </div>
    </div>
  );
};

export default Signin;
