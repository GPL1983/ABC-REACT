import React from "react";

const CategoryCard = ({ id, imgUrl, title, iconUrl, description }) => {
  //   console.log(id);

  return (
    <>
      <div className={`row`}>
        <div
          className={`${
            id === 2 || id == 4 || id == 6
              ? `order-md-1 col-md-6 ps-md-0 d-md-flex`
              : `order-md-0 col-md-6 pe-md-0 d-md-flex`
          } `}
        >
          <img className="img-fluid" src={imgUrl} alt="image not found" />
        </div>
        <div
          className={`${
            id === 2 || id == 4 || id == 6
              ? `order-md-0 col-md-6 d-md-flex flex-md-column justify-content-md-center pe-md-0`
              : `order-md-1 col-md-6 d-md-flex flex-md-column justify-content-md-center ps-md-0`
          } `}
        >
          <div className="bg-colour3 p-3 p-md-4 h-100">
            <div className="d-md-flex flex-md-column justify-content-md-center h-100">
              <div>
                <img className="my-3 my-md-2 my-lg-3 icon" src={iconUrl} alt="image not found" />
              </div>
              <h2 className="heading5 text-colour1 mb-3 mb-md-2 mb-lg-3">{title}</h2>
              <p>{description}</p>
              <div>
                <a href="/FlightSearch.aspx" className="btn btn-one text-uppercase my-3 my-md-2 my-lg-3">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
