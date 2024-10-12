import React from "react";
import "./heroslider.css";
import ImageSlider from "../../../components/ui/sliders/imageslider/ImageSlider";

const HeroSlider = ({ heroSlider }) => {
  // console.log(heroSlider);

  return (
    <>
      <ImageSlider heroSlider={heroSlider} sliderName="dvHeroSlider" />
    </>
  );
};

export default HeroSlider;
