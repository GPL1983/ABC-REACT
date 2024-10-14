import React, { useState } from "react";
import "./heroslider.css";
import ImageSlider from "../../../components/ui/sliders/imageslider/ImageSlider";
import Error from "../../../components/error/Error";
import ImageLoader from "../../../components/skeleton/ImageLoader";

const HeroSlider = ({ heroSlider, isLoading, isError }) => {
  const [componentName] = useState("HeroSlider");

  if (isLoading) {
    return <ImageLoader loadingText={componentName} />;
  }

  if (isError) {
    return <Error errorText={componentName} />;
  }

  return (
    <>
      <ImageSlider heroSlider={heroSlider} sliderName={`dv${componentName}`} />
    </>
  );
};

export default HeroSlider;
