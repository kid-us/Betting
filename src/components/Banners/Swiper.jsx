import React from "react";
import Slides from "./Slides";
const Swiper = () => {
  return (
    <>
      {/* Extra large */}
      <div className="d-block d-md-none">
        <Slides slidesPerView={1}></Slides>
      </div>
      {/* Large */}
      <div className="d-none d-md-block d-lg-none">
        <Slides slidesPerView={1}></Slides>
      </div>
      {/* Small */}
      <div className="d-none d-lg-block">
        <Slides slidesPerView={2}></Slides>
      </div>
    </>
  );
};

export default Swiper;
