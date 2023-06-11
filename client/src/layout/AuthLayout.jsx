import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import person from "../animations/person.json";
import { GoHome } from "react-icons/go";
import { useSelector } from "react-redux";
const AuthLayout = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, [token]);
  return (
    <div className="auth position-relative row w-100 m-0 vh-100">
      <NavLink to="/" className="position-absolute top-0 start-0">
        <GoHome className="fs-5" />
      </NavLink>

      <div className="left order-2 order-md-1 h-100 d-flex flex-column justify-content-center align-items-center col-md-6 col-12 ">
        <Outlet />
      </div>
      <div className="bg-white order-1 order-md-2 right h-100 d-flex justify-content-center align-items-center col-md-6 col-12">
        <Lottie className="h-100" animationData={person} />
      </div>
    </div>
  );
};

export default AuthLayout;
