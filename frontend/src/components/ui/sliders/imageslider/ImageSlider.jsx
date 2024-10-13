import React from "react";
import "./imageslider.css";
import { SwiperSlide } from "swiper/react";
import SwiperContainer from "../SwiperContainer";

const ImageSlider = ({ heroSlider, sliderName }) => {
  const slides = heroSlider;
  const cardSliderOptions = {
    // autoplay: { delay: 3000 },
    breakpoints: {
      0: { slidesPerView: 1 },
    },
  };

  return (
    <>
      <SwiperContainer sliderName={sliderName} options={cardSliderOptions}>
        {slides.length > 0 &&
          slides.map((item) => {
            const { id, imgUrl } = item;
            return (
              <SwiperSlide key={id}>
                <img src={imgUrl} className="img-fluid" alt="" />
              </SwiperSlide>
            );
          })}
      </SwiperContainer>
    </>
  );
};

export default ImageSlider;
