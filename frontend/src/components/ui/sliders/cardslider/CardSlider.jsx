import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperContainer from "../SwiperContainer"; // Adjust the path to your actual SwiperContainer

const CardSlider = ({ vouchers, shopDeals, sliderName }) => {
  const slides = vouchers || shopDeals || [];

  // Define custom Swiper options for the CardSlider
  const cardSliderOptions = {
    // autoplay: { delay: 3000 },
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  };

  return (
    <SwiperContainer sliderName={sliderName} options={cardSliderOptions}>
      {slides.length > 0 &&
        slides.map((item) => {
          const { id, imgUrl, points, title, type } = item;
          return (
            <SwiperSlide key={id}>
              <div className="dvProductCard bg-colour6">
                <div className="dvItem">
                  <a className="anchor" href="">
                    <div className="img-container">
                      <img src={imgUrl} alt={title} />
                    </div>
                    <h2 className="px-3 pt-3 pb-2">{title}</h2>
                    <div className="d-flex flex-wrap justify-content-between px-3 pb-3">
                      <p className="points">{points} Points</p>
                      <p className="points">{type}</p>
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </SwiperContainer>
  );
};

export default CardSlider;
