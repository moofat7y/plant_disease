import React from "react";

const SecBanner = ({ banner_image, section }) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        height: "50vh",
        backgroundPositionY: "top",
        backgroundSize: "cover",
        backgroundImage: `url(${banner_image})`,
      }}
    >
      <h2
        className="mt-5 mb-1 text-light fw-bold fs-1"
        style={{ fontFamily: "Playfair Display" }}
      >
        {section}
      </h2>
      <div className="d-flex align-items-center justify-content-center text-light">
        <span>Home</span>
        <span className="mx-3 d-inline-block">/</span>
        <span>{section}</span>
      </div>
    </div>
  );
};

export default SecBanner;
