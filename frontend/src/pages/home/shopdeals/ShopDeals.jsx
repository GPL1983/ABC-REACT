import React from "react";
import "./shopdeals.css";
import CardSlider from "../../../components/ui/sliders/cardslider/CardSlider";

const ShopDeals = ({ shopDeals }) => {
  return (
    <div className="dvShopDeals py-5">
      <div className="container-xl">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="heading1 mb-3">Shop Deals</h2>
            <p className="">Choose from over 5,000+ gift vouchers in our expansive Loyalty Program selection.</p>
          </div>
        </div>
        <CardSlider shopDeals={shopDeals} sliderName="dvShopDealsSlider" />
      </div>
    </div>
  );
};

export default ShopDeals;
