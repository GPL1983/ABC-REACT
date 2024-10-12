import React from "react";
import "./rewards.css";
import CategoryCard from "../../../components/ui/categorycard/CategoryCard";

const Rewards = ({ rewards }) => {
  // console.log(rewards);

  return (
    <>
      <div className="dvRedemptionLinks bg-colour4 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="h4 heading-semibold text-colour7">Rewards that cater to every desire.</h2>
            </div>
          </div>
          {rewards.length > 0 &&
            rewards.map((item) => {
              const { id } = item;
              return <CategoryCard key={id} {...item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Rewards;
