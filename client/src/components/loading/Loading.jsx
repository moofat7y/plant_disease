import React from "react";
import Lottie from "lottie-react";
import loading from "../../animations/loading.json";
import { useSelector } from "react-redux";
const Loading = () => {
  const user = useSelector((state) => state.user);
  const { statusLoading } = user;

  return (
    <>
      {statusLoading ? (
        <div
          style={{ zIndex: "10000" }}
          className="w-100 vh-100 bg-light d-flex align-items-center justify-content-center"
        >
          <Lottie
            style={{
              width: "50%",
              height: "50%",
            }}
            animationData={loading}
          />{" "}
        </div>
      ) : null}
    </>
  );
};

export default Loading;
