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
              <div className="row px-3" style={{ height: "210px" }}>
                <div className="col-12 bg-gold rounded fw-semibold">
                  <div className="row">
                    <div className="col-6 small">
                      <p className="small mt-3">
                        <span className="bg-secondary px-2 py-1 rounded">
                          Promo
                        </span>
                      </p>
                      <h4 className="text-warning mt-5 px-1">
                        {promotion.title}
                      </h4>
                      <p className="fs-6 px-1">{promotion.note}</p>
                    </div>
                    <div className="col-6">
                      <Img
                        src={promotion.img}
                        className={"img-fluid"}
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
