import React from "react";
import "./error.css";

const Error = ({ errorText }) => {
  return (
    <>
      <div className="d-flex p-5 alert alert-danger">
        <div className="m-auto text-center">
          <h2 className="heading-semibold">{errorText} Error</h2>
          <h5 className="">
            Well, that wasn't supposed to happen! Don't worry, your rewards are safe. Refresh and let's try again!
          </h5>
        </div>
      </div>
    </>
  );
};

export default Error;
