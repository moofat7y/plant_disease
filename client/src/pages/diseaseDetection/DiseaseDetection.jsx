import React from "react";
import Detect from "../../components/diseaseDetection/Detect";
import SecBanner from "../../components/SecBanner";

const DiseaseDetection = () => {
  return (
    <div className={"disease-detection"}>
      <SecBanner
        banner_image={
          "https://cdn.shopify.com/s/files/1/0681/1208/9404/files/footer-parallax.jpg?v=1668839490"
        }
        section={"Detection"}
      />

      <section className="detection">
        <div className="contianer">
          <Detect />
        </div>
      </section>
    </div>
  );
};

export default DiseaseDetection;
