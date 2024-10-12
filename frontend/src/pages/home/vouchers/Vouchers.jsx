import React from "react";
import "./vouchers.css";
import CardSlider from "../../../components/ui/sliders/cardslider/CardSlider";

const Vouchers = ({ vouchers }) => {
  return (
    <div className="dvVouchers py-5">
      <div className="container-xl">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="heading1 text-colour6 mb-3">Most Featured Vouchers</h2>
            <p className="text-colour6">
              Choose from over 5,000+ gift vouchers in our expansive Loyalty Program selection.
            </p>
          </div>
        </div>
        <CardSlider vouchers={vouchers} sliderName="dvVouchersSlider" />
      </div>
    </div>
  );
};

export default Vouchers;
