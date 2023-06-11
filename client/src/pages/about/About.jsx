import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/section/Section";
import images from "../../assets/images";
import AboutUS from "../../components/about/AboutUS";
import AboutAppleScabDisease from "../../components/about/AboutAppleScabDisease";

const About = () => {
  return (
    <div className="about">
      <Section className="py-5" containerClassName="container py-5">
        <div className="row">
          <div className="col-lg-9">
            <AboutUS />
            <AboutAppleScabDisease />
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <div className="col-12 col-lg-8 position-sticky top-50 d-flex flex-column align-items-center flex-wrap gap-3 py-4 mx-auto">
              <img
                src={images.main.detection_animation}
                alt="..."
                className="w-100"
                style={{ mixBlendMode: "darken", maxWidth: "315px" }}
              />
              <Link
                to="/disease-detection"
                className="btn btn-primary text-white fs-7 text-capitalize"
              >
                detect a disease now
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
