import React from "react";
import "./error.css";

const Error = ({ errorText }) => {
  return (
    <>
      <h1>{errorText} Error</h1>
    </>
  );
};

export default Error;
