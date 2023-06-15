import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiFlowerPot } from "react-icons/all";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";
import { banner_text } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [activeText, setActiveText] = useState(0);
  const navigate = useNavigate();
  SwiperCore.use([Autoplay]);
  const onChange = (e) => {
    setActiveText(e.activeIndex);
  };

  return (
    <div className="w-100 overflow-hidden">
      <div className="position-absolute flex-column top-0 start-0 w-100 vh-100 d-flex align-items-center justify-content-center">
        {banner_text[activeText].icon ? (
          <motion.i
            style={{ zIndex: 4, fontFamily: "Playfair Display" }}
            key={
              activeText +
              banner_text[activeText].text +
              banner_text[activeText].icon
            }
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: "1.5" }}
            className="fs-5  mb-sm-2 text-light fst-italic "
          >
            <GiFlowerPot className="display-1 " />
          </motion.i>
        ) : null}

        {banner_text[activeText].icon ? null : (
          <motion.p
            style={{ zIndex: 4, fontFamily: "Playfair Display" }}
            key={activeText + banner_text[activeText].text}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: "1.5" }}
            className="fs-5  mb-sm-2 text-light fst-italic "
          >
            {banner_text[activeText].text}
          </motion.p>
        )}

        <motion.p
          style={{ zIndex: 4 }}
          key={activeText + banner_text[activeText].header}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: "1" }}
          className="display-1 text-center lh-sm fst-italic fw-bold mb-0 text-light "
        >
          {banner_text[activeText].header}
        </motion.p>

        {banner_text[activeText].icon ? (
          <motion.p
            style={{ zIndex: 4, fontFamily: "Playfair Display" }}
            key={activeText + banner_text[activeText].text}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: "1.5" }}
            className="fs-5  mb-sm-2 fst-italic text-primary"
          >
            {banner_text[activeText].text}
          </motion.p>
        ) : null}

        {banner_text[activeText].icon ||
        banner_text[activeText].detection ? null : (
          <motion.a
            href="#service"
            style={{
              zIndex: 4,
              fontFamily: "Playfair Display",
              letterSpacing: "1px",
            }}
            key={"button"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: "1.5" }}
            className="btn btn-primary mt-2 px-5 py-2 text-light fs-6 fw-semibold"
          >
            Explore
          </motion.a>
        )}

        {banner_text[activeText].detection ? (
          <motion.button
            onClick={() => navigate("/disease-detection")}
            style={{
              zIndex: 4,
              fontFamily: "Playfair Display",
              letterSpacing: "1px",
            }}
            key={"buttonfordetection"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: "1.5" }}
            className="btn btn-primary mt-2 px-5 py-2 text-light fs-6 fw-semibold"
          >
            Detect
          </motion.button>
        ) : null}
      </div>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{ delay: 8000 }}
        initialSlide={0}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        speed={1000}
        modules={[EffectCube, Pagination]}
        onActiveIndexChange={(e) => onChange(e)}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://themes.g5plus.net/spring/wp-content/uploads/revslider/Slider02/slider-06.jpg"
            alt="plant-banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0681/1208/9404/files/main-banner-1_1903x922.jpg?v=1668763214"
            alt="plant-banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://themes.g5plus.net/spring/wp-content/uploads/revslider/Slider02/slider-05.jpg"
            alt="plant-banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
