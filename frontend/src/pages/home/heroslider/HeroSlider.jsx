import React, { useState } from "react";
import "./heroslider.css";
import ImageSlider from "../../../components/ui/sliders/imageslider/ImageSlider";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";

const HeroSlider = ({ heroSlider, isLoading, isError }) => {
  const [componentName] = useState("HeroSlider");

  if (isLoading) {
    return <Loading loadingText={componentName} />;
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
