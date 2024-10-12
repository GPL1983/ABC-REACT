import React from "react";
import "./imageslider.css";
import { SwiperSlide } from "swiper/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import SwiperContainer from "../SwiperContainer";

const ImageSlider = ({ heroSlider, sliderName }) => {
  const slides = heroSlider;
  const cardSliderOptions = {
    // autoplay: { delay: 3000 },
    breakpoints: {
      0: { slidesPerView: 1 },
    },
  };

  // const options = {
  //   loop: false,
  //   modules: [Pagination, Navigation, Autoplay],
  //   // autoplay: { delay: 3000 },
  //   navigation: true,
  //   pagination: true,
  //   navigation: {
  //     nextEl: ".swiper-button-prev", // Custom button element
  //     prevEl: ".swiper-button-next", // Custom button element
  //   },
  //   pagination: {
  //     el: ".swiper-pagination", // Custom pagination element
  //     clickable: true,
  //   },
  //   spaceBetween: 0,
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //     },
  //   },
  // };

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
