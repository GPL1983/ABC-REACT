import React from "react";
import "./unlockrewards.css";
import { FaCheck } from "react-icons/fa";

const UnlockRewards = () => {
  return (
    <>
      <div className="dvRewards py-5 pb-lg-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="h5 heading-semibold text-colour7 text-uppercase mb-3">Unlocking Rewards: Your Guide</h2>
              <h2 className="heading2 mb-3">From Earning to Redeeming: We've Got Answers</h2>
              <p className="">
                Navigating our rewards program is as fun as a rollercoaster ride. Here are answers to some common
                questions to ensure your journey is smooth and rewarding.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 bg-image">
              <div className="row">
                <div className="col-lg-6 offset-xl-1 col-xl-6 py-lg-5">
                  <div className="row mb-3">
                    <div className="col-2 col-sm-1">
                      <span className="bg-colour1 b-radius p-2 text-colour6 d-inline-block">
                        <FaCheck />
                      </span>
                    </div>
                    <div className="col-10 col-sm-11">
                      <h2 className="heading5 mb-2">How do I accumulate points?</h2>
                      <p>
                        Earn points with every transaction made through the bank. Start accumulating rewards with every
                        interaction!
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-1">
                      <span className="bg-colour1 b-radius p-2 text-colour6 d-inline-block">
                        <FaCheck />
                      </span>
                    </div>
                    <div className="col-10 col-sm-11">
                      <h2 className="heading5 mb-2">What can I exchange my points for?</h2>
                      <p>
                        Your points are your gateway to discounts. Redeem them for exclusive Gift vouchers, shopping,
                        flight & hotel booking and mobile top-up.
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-2 col-sm-1">
                      <span className="bg-colour1 b-radius p-2 text-colour6 d-inline-block">
                        <FaCheck />
                      </span>
                    </div>
                    <div className="col-10 col-sm-11">
                      <h2 className="heading5 mb-2">How long are my points valid for?</h2>
                      <p>
                        Your points will remain active for 2 years from the date you earn them. Make sure to redeem them
                        before they expire!
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3 mb-lg-0">
                    <div className="col-2 col-sm-1">
                      <span className="bg-colour1 b-radius p-2 text-colour6 d-inline-block">
                        <FaCheck />
                      </span>
                    </div>
                    <div className="col-10 col-sm-11">
                      <h2 className="heading5 mb-2">How can I check my points balance?</h2>
                      <p>
                        To keep a tab on your rewards, simply log in and navigate to the 'My Account' dashboard. Your
                        points balance will be available there.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img-container">
                    <img
                      className="img-fluid"
                      src="/src/assets/images/homepage/reward-section/rewards.jpg"
                      alt="Image not found"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnlockRewards;
