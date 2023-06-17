import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { SiOverleaf } from "react-icons/si";

const Footer = () => {
  const { token, isLoading } = useSelector((state) => state.auth);
  return (
    <footer className="pt-5 pb-4 bg-dark">
      <div className="container">
        <div
          style={{ borderBottom: "1px solid #2a2a2a" }}
          className="row flex-wrap pb-4"
        >
          <div className="col-12 col-md-3 p-3 d-flex flex-column">
            <Link
              to="#"
              className="nav-link fs-1 text-light mb-4 fw-bolder text-capitalize"
            >
              <SiOverleaf className="fs-1 text-primary" />
            </Link>
            <p className="fs-7 text-muted col-12 col-sm-10">
              We specializes in the detection of apple scab disease using deep
              learning technology.
              <br />
            </p>
          </div>
          <div className="col-12 col-sm-6 p-3 col-md-3">
            <nav className="w-100">
              <h3
                style={{ fontFamily: "Playfair Display" }}
                className="fs-5 fw-bold text-light mb-4"
              >
                Quik Links
              </h3>
              <ul className="navbar-nav w-100 flex-start">
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link fs-7 text-muted d-inline-block py-1 lh-sm"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link fs-7 text-muted d-inline-block py-1 lh-sm"
                  >
                    Disease Detection
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link fs-7 text-muted d-inline-block py-1 lh-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link fs-7 text-muted d-inline-block py-1 lh-sm"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-12 col-sm-6 p-3 col-md-3 text-white d-flex flex-column">
            <nav>
              <h3
                style={{ fontFamily: "Playfair Display" }}
                className="fs-5 fw-bold text-light mb-4"
              >
                Account
              </h3>
              <ul className="navbar-nav w-100 text-white">
                <li className="nav-item  ">
                  <Link
                    to="/my-account"
                    className="nav-link py-1 lh-sm text-capitalize text-muted fs-7"
                  >
                    account
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link
                    to="/my-account"
                    className="nav-link py-1 lh-sm text-capitalize text-muted fs-7"
                  >
                    my profile
                  </Link>
                </li>

                {token ? null : (
                  <li className="nav-item  ">
                    <Link
                      to="/auth"
                      className="nav-link py-1 lh-sm text-capitalize text-muted fs-7"
                    >
                      Join
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>

          <div className="col-12 col-sm-6 p-3 col-md-3 text-white d-flex flex-column">
            <div>
              <h3
                style={{ fontFamily: "Playfair Display" }}
                className="fs-5 fw-bold text-light mb-4"
              >
                Contact
              </h3>
              <ul className="navbar-nav w-100 text-white">
                <li className="nav-item py-1 d-flex align-items-center text-muted fs-7">
                  <MdLocationPin className="me-2 fs-6" />
                  Mansoura
                </li>
                <li className="nav-item py-1 d-flex align-items-center text-muted fs-7">
                  <IoIosCall className="me-2 fs-6" />
                  <a className="nav-link py-0 lh-sm" href="tel:012345678">
                    012345678
                  </a>
                </li>

                <li className="nav-item py-1 d-flex align-items-center text-muted fs-7">
                  <MdEmail className="me-2 fs-6" />
                  <a
                    className="nav-link py-0 lh-sm"
                    href="mailto:example@gmail.com"
                  >
                    example@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="social py-4">
          <p
            style={{ fontFamily: "Playfair Display" }}
            className="text-white text-center"
          >
            Powered By MET Team © 2023
          </p>
          <div className="links mt-4 d-flex gap-4 justify-content-center align-items-center">
            <a href="facebook" aria-label="Facebook" className="nav-link">
              <FaFacebookF className="text-muted fs-5" />
            </a>

            <a href="twitter" aria-label="Twitter" className="nav-link">
              <FaTwitter className="text-muted fs-5" />
            </a>

            <a href="instagram" aria-label="Instagram" className="nav-link">
              <FaInstagram className="text-muted fs-5" />
            </a>

            <a href="linkedin" aria-label="Linkedin" className="nav-link">
              <FaLinkedinIn className="text-muted fs-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
