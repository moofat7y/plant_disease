import React from "react";
import Lottie from "lottie-react";
import loading from "../../animations/loading.json";
const LoadingPage = () => {
  return (
    <>
      <div
        style={{ zIndex: "10000" }}
        className="w-100 vh-100 position-fixed bg-light d-flex align-items-center justify-content-center"
      >
        <Lottie
          style={{
            width: "50%",
            height: "50%",
          }}
          animationData={loading}
        />
      </div>
    </>
  );
};

export default LoadingPage;
