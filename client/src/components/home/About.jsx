import React from "react";
import MainHeader from "../MainHeader";
import { Link } from "react-router-dom";
import image from "../../assets/aboutimg.jpg";

const About = () => {
  return (
    <section className="secondary about">
      <div className="container">
        <div className="row">
          <div className="col-12 order-2 order-lg-1 col-lg-6">
            <MainHeader
              text="ABOUT"
              header="We are using ai in detection of plant disease, using deep learning model called cnn."
              extraClass={"text-start"}
            />

            <p className="text-info lh-lg">
              We specializes in the detection of plant disease using deep
              learning technology.
              <br /> By leveraging advanced computer vision algorithms and
              machine learning model called CNN, we are able to accurately
              identify and classify diseased plant leaf with high precision and
              recall rates. Our approach involves collecting large amounts of
              data on apple scab disease symptoms, including leaf discoloration,
              spotting, and deformation.
              <br /> We then use this data to train our deep learning model to
              recognize these patterns and distinguish them from healthy plant
              leaf.
            </p>

            <Link
              to="/disease-detection"
              className="btn mt-4 fs-7 detect-link px-5"
            >
              DETECT
            </Link>
          </div>

          <div className="col-12 mb-4 mb-lg-0 order-1 order-lg-2 col-lg-6">
            <div className="image-box">
              <img
                loading="lazy"
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
                className="w-100 rounded-3"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
