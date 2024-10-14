import React from "react";
import "./skeleton.css";

const RedemptionMenuLoader = ({ menucount }) => {
  return (
    <>
      <div className="row justify-content-md-center flex-nowrap flex-md-wrap scroll-hoz py-4 pt-md-5 pb-md-3">
        {Array.from({ length: menucount }).map((_, index) => (
          <div class="col-auto mb-md-3">
            <a class="text-center d-flex flex-column align-items-center" href="">
              <div class="skeleton-icon d-flex flex-column align-items-center justify-content-center p-2 p-lg-2 p-xl-4 rounded-circle">
                <img src="" />
              </div>
              <p class="mt-2 skeleton-text"></p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default RedemptionMenuLoader;
