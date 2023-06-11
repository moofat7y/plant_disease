import React from "react";

const MainHeader = ({ text, header, extraClass }) => {
  return (
    <div className={` mb-5 ${extraClass ? extraClass : "text-center"}`}>
      <h4
        style={{ fontFamily: "Lato ", fontWeight: 0, letterSpacing: "0.2em" }}
        className="fs-7 text-primary mb-3"
      >
        {text}
      </h4>
      <h3
        style={{
          maxWidth: "600px",
          letterSpacing: "0.1em",
          fontWeight: "500",
          fontFamily: "Playfair Display",
        }}
        className={`mx-auto fst-italic text-black`}
        dangerouslySetInnerHTML={{ __html: header }}
      />
    </div>
  );
};

export default MainHeader;
