import React from "react";

const AboutUS = () => {
  return (
    <div id="aboutUS" className="">
      <h1 className="fs-5 pt-4 fs-bold text-primary">About Us</h1>
      {/* <div className="d-flex flex-wrap align-items-center"> */}
      <h2 className="main-header d-block fw-bolder fst-italic text-uppercase display-6 mb-4">
        we are using ai in detection
        <br /> of apple scap disease Specifically,
        <br /> using deep learning model calld CNN
      </h2>
      <div className="d-flex flex-column flex-wrap">
        <p className="fs-5 col-12 col-lg-10">
          We specializes in the detection of apple scab disease using deep
          learning technology. By leveraging advanced computer vision algorithms
          and machine learning model called CNN, we are able to accurately
          identify and classify diseased apple trees with high precision and
          recall rates.
        </p>
        <p className="fs-5 col-12 col-lg-10">
          Our approach involves collecting large amounts of data on apple scab
          disease symptoms, including leaf discoloration, spotting, and
          deformation. We then use this data to train our deep learning model to
          recognize these patterns and distinguish them from healthy apple
          trees.
        </p>
        <p className="fs-5 col-12 col-lg-10">
          Our cutting-edge technology allows us to detect apple scab disease at
          early stages, enabling farmers to take proactive measures to prevent
          further spread and minimize crop loss. We believe that our work in
          this field has the potential to revolutionize the way apple farming is
          done, and we are committed to advancing our research even further.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AboutUS;
