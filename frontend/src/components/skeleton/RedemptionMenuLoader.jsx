import React from "react";
import "./skeleton.css";

const RedemptionMenuLoader = ({ menucount, loadingText }) => {
  return (
    <>
      <div className="row justify-content-md-center flex-nowrap flex-md-wrap scroll-hoz py-4 pt-md-5 pb-md-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="col-auto mb-md-3">
            <a className="text-center d-flex flex-column align-items-center">
              <div className="redemption-icon d-flex flex-column align-items-center justify-content-center p-2 p-lg-2 p-xl-4 rounded-circle">
                <img src="" />
              </div>
              <p className="mt-2 redemption-text"></p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default RedemptionMenuLoader;
