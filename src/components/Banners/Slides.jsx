import React from "react";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
              <div className="row px-3" style={{ height: "200px" }}>
                <div className="col-12 bg2 rounded fw-semibold">
                  <div className="row my-4">
                    <div className="col-6 small">
                      <p className="small">
                        <span className="bg-secondary px-2 py-1 rounded">
                          Promo
                        </span>
                      </p>
                      <h4 className="text-warning">{promotion.title}</h4>
                      <p>{promotion.note}</p>
                    </div>
                    <div className="col-6">
                      <img src={promotion.img} className="img-fluid" alt="" />
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
