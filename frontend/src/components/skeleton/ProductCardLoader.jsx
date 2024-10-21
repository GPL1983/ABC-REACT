import React from "react";
import "./skeleton.css";

const ProductCardLoader = ({ cardcount, loadingText }) => {
  return (
    <>
      <div className="container-xl">
        <div className="row">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="col-3">
              <div className="product-card bg-colour6">
                <div className="dvItem">
                  <a className="anchor">
                    <div className="img-container">
                      <img
                        src="https://static.wixstatic.com/media/2c0034_df20b7f859ea482485bceb862e8ab848~mv2.png"
                        alt=""
                      />
                    </div>
                    <h2 className=""></h2>
                    <div className="d-flex flex-wrap justify-content-between">
                      <p className="points"></p>
                      <p className="points"></p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCardLoader;
