import React, { useRef } from "react";

const handleSliderBtn = (targetEle, scrollAmount) => {
  targetEle.scrollLeft += scrollAmount;
  console.log("scrollAmout",scrollAmount);
};

const Slider = ({ children }) => {
  const sliderBody = useRef();
  let scrollAmountToLeft = 0;
  let scrollAmountToRight = 0;

  return (
    <div className="slider d-flex flex-column gap-1 overflow-hidden px-0">
      <div className="arrows d-none d-md-flex gap-2 mb-2">
        <button
          className="fs-5 fw-bold btn-outline-primary btn btn-sm"
          onClick={() => {
            scrollAmountToLeft -= 150;
            handleSliderBtn(sliderBody.current, scrollAmountToLeft)
          }}
        >
          {"<"}
        </button>
        <button
          className="fs-5 fw-bold btn-outline-primary btn btn-sm"
           onClick={() => {
            scrollAmountToRight += 150;
            handleSliderBtn(sliderBody.current, scrollAmountToRight)
          }}
        >
          {">"}
        </button>
      </div>
      <div ref={sliderBody} className="slider-body products flex-1 d-flex">
        {children}
      </div>
    </div>
  );
};

export default Slider;
