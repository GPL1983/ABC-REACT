import React from "react";
import "./welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="dvTurnTransaction py-4 pt-md-0 pb-md-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h2 className="heading1 pt-0 text-center">Turn Transactions into Rewards</h2>
              <span className="h4 heading-regular text-center text-colour7 d-block py-3">
                Infinity Rewards - Our Diverse Loyalty Program
              </span>
              <p className="text-center">
                Designed for the discerning customer, it offers diverse redemption options like flight bookings, hotel
                stays, car rentals, vouchers, online shopping, and point exchanges. Experience the joy of rewards that
                fit your lifestyle, turning every transaction into a chance for delightful experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
