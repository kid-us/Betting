import React from "react";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "../Img/Img";
import "swiper/css";
import "swiper/css/pagination";
import { promo } from "../../constant/promo";
const Slides = ({ slidesPerView }) => {
  return (
    <>
      <div className="mt-4">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
        >
          {promo.map((promotion) => (
            <SwiperSlide key={promotion.id}>
              <div className="row px-3 fw-semibold">
                <div className="col-12">
                  <div className="row bg-gold rounded">
                    <div className="col-6 small">
                      <p className="small mt-3">
                        <span className="bg-secondary px-2 py-1 rounded">
                          Promo
                        </span>
                      </p>
                      <h4 className="text-warning mt-lg-5 px-lg-1">
                        {promotion.title}
                      </h4>
                      <p className="font-monospace px-lg-1 pt-2 promo-note">
                        {promotion.note}
                      </p>
                    </div>
                    <div className="col-6 py-1">
                      <Img
                        src={promotion.img}
                        className={"promo-img pt-lg-0"}
                        alt={promotion.title}
                      ></Img>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slides;
