import React from "react";
import Slides from "./Slides";
const Swiper = () => {
  return (
    <>
      <div className="d-block d-md-none">
        <Slides slidesPerView={1}></Slides>{" "}
      </div>
      <div className="d-none d-md-block d-lg-none">
        <Slides slidesPerView={1}></Slides>{" "}
      </div>
      <div className="d-none d-lg-block">
        <Slides slidesPerView={2}></Slides>{" "}
      </div>
    </>
  );
};

export default Swiper;
