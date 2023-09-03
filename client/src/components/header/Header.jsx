import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoPersonOutline } from "react-icons/io5";
import { logout } from "../../features/auth/authSlice";
import { SiOverleaf } from "react-icons/si";
const Header = () => {
  const { token, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  const navRef = useRef();
  let currentScroll = 0;
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (e.currentTarget.scrollY > 150) {
        if (e.currentTarget.scrollY < currentScroll) {
          navRef?.current?.classList.add("show");
          navRef?.current?.classList.remove("hide");
        } else {
          navRef?.current?.classList.remove("show");
          navRef?.current?.classList.add("hide");
        }
        currentScroll = e.currentTarget.scrollY;
      } else if (e.currentTarget.scrollY > 0) {
        navRef?.current?.classList.add("show");
      } else {
        navRef?.current?.classList.remove("hide");
        navRef?.current?.classList.remove("show");
      }
    });

    // return () => window?.removeEventListener("scroll");
  }, []);
  return (
    <nav
      ref={navRef}
      className="navbar fixed-top navbar-dark navbar-expand-md py-md-0"
    >
      <div className="container d-flex">
        <Link to="/" className="navbar-brand mx-0 ">
          <SiOverleaf className="fs-1 text-primary" />
        </Link>

        {token ? (
          <div className="dropdown ms-auto me-3 order-2 order-md-3">
            <div
              className="dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <IoPersonOutline className="fs-5 mx-1 text-white" />
            </div>
            <ul className="dropdown-menu text-center px-2 slideIn animate dropdown-menu-end ">
              <li>
                <NavLink to="/my-account" className="dropdown-item" href="#">
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink to="/setting" className="dropdown-item" href="#">
                  Settings
                </NavLink>
              </li>
              <li>
                <button
                  disabled={isLoading}
                  onClick={onLogout}
                  className="dropdown-item bg-danger text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/auth/signup "
            className="btn text-white btn-primary ms-auto me-3 order-2 order-md-3"
          >
            Join
          </NavLink>
        )}
        <button
          className="navbar-toggler order-3 "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas bg-dark offcanvas-start w-50"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <NavLink to="/" className="navbar-brand">
              <SiOverleaf className="fs-1 text-primary" />
            </NavLink>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item mx-3  fs-7 ">
                <NavLink to="/" className="nav-link  ">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item mx-3  fs-7 ">
                <NavLink to="/disease-detection" className="nav-link ">
                  DIESASE DETECTION
                </NavLink>
              </li>
              {/* <li className="nav-item mx-3  fs-7 ">
                <NavLink className="nav-link " to="/about">
                  ABOUT
                </NavLink>
              </li> */}
            </ul>
          </div>
          {/* 
        {token ? (
          <div className="dropdown ms-auto me-3 order-2 order-md-3">
            <div
              className="dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <IoPersonOutline className="fs-5 mx-1 text-white" />
            </div>
            <ul className="dropdown-menu text-center px-2 slideIn animate dropdown-menu-end ">
              <li>
                <NavLink to="/my-account" className="dropdown-item" href="#">
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink to="/setting" className="dropdown-item" href="#">
                  Settings
                </NavLink>
              </li>
              <li>
                <button
                  disabled={isLoading}
                  onClick={onLogout}
                  className="dropdown-item bg-danger text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/auth/signup "
            className="btn text-white btn-primary ms-auto me-3 order-2 order-md-3"
          >
            Join
          </NavLink>
        )}
        <button
          className="navbar-toggler  order-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse order-4 order-md-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3  fs-7 ">
              <NavLink to="/" className="nav-link  py-md-5">
                HOME
              </NavLink>
            </li>
            <li className="nav-item mx-3  fs-7 ">
              <NavLink to="/disease-detection" className="nav-link py-md-5">
                DIESASE DETECTION
              </NavLink>
            </li>
            <li className="nav-item mx-3  fs-7 ">
              <NavLink className="nav-link py-md-5" to="/about">
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
