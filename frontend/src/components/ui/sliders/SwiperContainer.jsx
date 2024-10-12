import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const SwiperContainer = ({ children, sliderName, options }) => {
  // Create unique class names for navigation and pagination
  const uniquePrevClass = `${sliderName}-button-prev`;
  const uniqueNextClass = `${sliderName}-button-next`;
  const uniquePaginationClass = `${sliderName}-pagination`;

  const defaultOptions = {
    loop: false,
    modules: [Pagination, Navigation, Autoplay],
    navigation: {
      nextEl: `.${uniqueNextClass}`, // Unique next button
      prevEl: `.${uniquePrevClass}`, // Unique prev button
    },
    pagination: {
      el: `.${uniquePaginationClass}`, // Unique pagination
      clickable: true,
    },
    spaceBetween: 16,
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
    ...options, // Merge passed options with default options
  };

  return (
    <>
      <Swiper {...defaultOptions} className={`${sliderName}`}>
        {children} {/* Render SwiperSlide components */}
        <div className={`swiper-button-prev ${uniquePrevClass}`}>
          <FaArrowAltCircleLeft />
        </div>
        <div className={`swiper-button-next ${uniqueNextClass}`}>
          <FaArrowAltCircleRight />
        </div>
        <div className={`swiper-pagination ${uniquePaginationClass}`}></div>
      </Swiper>
    </>
  );
};

export default SwiperContainer;
