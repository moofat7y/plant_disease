import React from "react";
import image1 from "../../assets/info-box-01.png";
import image2 from "../../assets/info-box-02.png";
import image3 from "../../assets/info-box-03.png";
import image4 from "../../assets/info-box-04.png";
import MainHeader from "../MainHeader";
const Examples = () => {
  return (
    <section className="examples">
      <div className="container">
        <MainHeader header="Plants that model can detect it" text="Plants" />
      </div>
      <div className="row gap-0">
        <div
          style={{ padding: "80px 60px" }}
          className="col-12 col-sm-6 col-xl-3 box"
        >
          <div className="image">
            <img src={image1} loading="lazy" alt="" className="" />
            <h4 className="mt-3 fs-4 fw-semibold text-dark">Make Exercises</h4>
            <p className="mt-4 text-info">
              Plants need less water in the winter. Like a mist for the face, an
              extra spritz of filtered water daily between waterings keeps
              humidity levels nice for these plants.
            </p>
          </div>
        </div>

        <div
          style={{ padding: "80px 60px" }}
          className="col-12 col-sm-6 col-xl-3 box"
        >
          <div className="image">
            <img src={image2} loading="lazy" alt="" className="" />
            <h4 className="mt-3 fs-4 fw-semibold text-dark">Make Exercises</h4>
            <p className="mt-4 text-info">
              Plants need less water in the winter. Like a mist for the face, an
              extra spritz of filtered water daily between waterings keeps
              humidity levels nice for these plants.
            </p>
          </div>
        </div>

        <div
          style={{ padding: "80px 60px" }}
          className="col-12 col-sm-6 col-xl-3 box"
        >
          <div className="image">
            <img src={image3} loading="lazy" alt="" className="" />
            <h4 className="mt-3 fs-4 fw-semibold text-dark">Make Exercises</h4>
            <p className="mt-4 text-info">
              Plants need less water in the winter. Like a mist for the face, an
              extra spritz of filtered water daily between waterings keeps
              humidity levels nice for these plants.
            </p>
          </div>
        </div>

        <div
          style={{ padding: "80px 60px" }}
          className="col-12 col-sm-6 col-xl-3 box"
        >
          <div className="image">
            <img src={image4} loading="lazy" alt="" className="" />
            <h4 className="mt-3 fs-4 fw-semibold text-dark">Make Exercises</h4>
            <p className="mt-4 text-info">
              Plants need less water in the winter. Like a mist for the face, an
              extra spritz of filtered water daily between waterings keeps
              humidity levels nice for these plants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
