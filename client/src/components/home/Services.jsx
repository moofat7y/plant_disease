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
              <h3 className="fs-5 fw-semibold mb-3">Gardent Care</h3>
              <p className="text-info text-center">
                Let’s find a plant combination to suit your border or pot
              </p>
            </div>
          </div>

          <div className="box col-12 col-md-6  col-lg-3 mb-3 mb-lg-0">
            <div className="content d-flex flex-column align-items-center">
              <RiPlantLine className="mb-4 fs-1 text-primary" />
              <h3 className="fs-5 fw-semibold mb-3">Plant Renovation</h3>
              <p className="text-info text-center">
                Add colour and interest to your spring garden with our plants
              </p>
            </div>
          </div>

          <div className="box col-12 col-md-6  col-lg-3 mb-3 mb-lg-0">
            <div className="content d-flex flex-column align-items-center">
              <RiSeedlingLine className="mb-4 fs-1 text-primary" />
              <h3 className="fs-5 fw-semibold mb-3">Seed Supply</h3>
              <p className="text-info text-center">
                We do not have only plants but also many seed suit your style.
              </p>
            </div>
          </div>

          <div className="box col-12 col-md-6  col-lg-3 mb-3 mb-lg-0">
            <div className="content d-flex flex-column align-items-center">
              <IoWaterOutline className="mb-4 fs-1 text-primary" />
              <h3 className="fs-5 fw-semibold mb-3">Watering Graden</h3>
              <p className="text-info text-center">
                Join us for one of our open days and find plants for your garden
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
