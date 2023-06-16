import React from "react";
import MainHeader from "../MainHeader";
import { BsTree } from "react-icons/bs";
import { RiPlantLine, RiSeedlingLine } from "react-icons/ri";
import { IoWaterOutline } from "react-icons/io5";

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <MainHeader
          text="BEST SERVICES"
          header='Detect plant using <span class="fw-bold">CNN MODEL</span>'
        />

        <div className="services pt-5 row">
          <div className="box col-12 col-md-6  col-lg-3 mb-3 mb-lg-0">
            <div className="content d-flex flex-column align-items-center">
              <BsTree className="mb-4 fs-1 text-primary" />
              <h3 className="fs-5 fw-semibold mb-3">
                Treatment recommendations
              </h3>
              <p className="text-info text-center">
                Recommendations on how to treat diesased plant
              </p>
            </div>
          </div>

          <div className="box col-12 col-md-6  col-lg-3 mb-3 mb-lg-0">
            <div className="content d-flex flex-column align-items-center">
              <RiPlantLine className="mb-4 fs-1 text-primary" />
              <h3 className="fs-5 fw-semibold mb-3">Disease identification</h3>
              <p className="text-info text-center">
                The website's AI-powered algorithms can identify the disease
                affecting the plant
              </p>
            </div>
          </div>

          <div className="box col-12 col-md-6  col-lg-3 mb-3 mb-lg-0">
            <div className="content d-flex flex-column align-items-center">
              <RiSeedlingLine className="mb-4 fs-1 text-primary" />
              <h3 className="fs-5 fw-semibold mb-3">Plant Monitoring</h3>
              <p className="text-info text-center">
                The website can offer a service where users can set up plant
                monitoring systems
              </p>
            </div>
          </div>

          <div className="box col-12 col-md-6  col-lg-3 mb-3 mb-lg-0">
            <div className="content d-flex flex-column align-items-center">
              <IoWaterOutline className="mb-4 fs-1 text-primary" />
              <h3 className="fs-5 fw-semibold mb-3">User Community</h3>
              <p className="text-info text-center">
                Provide a platform for users to connect and share their
                experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
