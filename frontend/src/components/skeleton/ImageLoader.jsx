import React from "react";
import "./skeleton.css";

const ImageLoader = ({ loadingText }) => {
  return (
    <div className="image-loader d-flex">
      <h1 className="m-auto heading-semibold">Loading...</h1>
    </div>
  );
};

export default ImageLoader;
