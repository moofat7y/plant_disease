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
            <h4 className="mt-3 fs-4 fw-semibold text-dark">Potato</h4>
            <p className="mt-4 text-info">
              Some common potato diseases include potato blight, black scurf,
              and potato virus Y. By using potato detection methods can take
              proactive steps to keep their potato plants healthy.
            </p>
          </div>
        </div>

        <div
          style={{ padding: "80px 60px" }}
          className="col-12 col-sm-6 col-xl-3 box"
        >
          <div className="image">
            <img src={image2} loading="lazy" alt="" className="" />
            <h4 className="mt-3 fs-4 fw-semibold text-dark">Tomato</h4>
            <p className="mt-4 text-info">
              Early detection of tomato diseases is important for preventing
              crop losses and reducing the need for chemical treatments. Some
              common tomato diseases include late blight and early blight.
            </p>
          </div>
        </div>

        <div
          style={{ padding: "80px 60px" }}
          className="col-12 col-sm-6 col-xl-3 box"
        >
          <div className="image">
            <img src={image3} loading="lazy" alt="" className="" />
            <h4 className="mt-3 fs-4 fw-semibold text-dark">Apple</h4>
            <p className="mt-4 text-info">
              Some common apple diseases include apple scab, fire blight, and
              powdery mildew. By using apple detection methods can take
              proactive steps to keep their apple trees healthy.
            </p>
          </div>
        </div>

        <div
          style={{ padding: "80px 60px" }}
          className="col-12 col-sm-6 col-xl-3 box"
        >
          <div className="image">
            <img src={image4} loading="lazy" alt="" className="" />
            <h4 className="mt-3 fs-4 fw-semibold text-dark">Corn</h4>
            <p className="mt-4 text-info">
              Early detection of corn diseases is important for preventing crop
              losses and reducing the need for chemical treatments. Some common
              corn diseases include gray leaf spot, northern corn leaf blight,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
