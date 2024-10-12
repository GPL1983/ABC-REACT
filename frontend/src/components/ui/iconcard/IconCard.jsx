import React from "react";
import "./iconcard.css";

const IconCard = ({ id, imgUrl, title }) => {
  //   console.log(props);

  return (
    <>
      {/* OPTION 1 */}
      {/* {redemptionMenu.length > 0 &&
        redemptionMenu.map((item) => {
          return (
            <div key={item.id} className="col-auto mb-md-3">
              <a
                className="text-center d-flex flex-column align-items-center carrentalredemption redemptionoptions"
                href=""
              >
                <div className="d-flex flex-column align-items-center justify-content-center p-2 p-lg-2 p-xl-4 rounded-circle imageBox">
                  <img src={item.imgUrl} />
                </div>
                <p className="mt-2">{item.title}</p>
              </a>
            </div>
          );
        })} */}

      {/* OPTION 2 */}
      <div key={id} className="col-auto mb-md-3">
        <a className="text-center d-flex flex-column align-items-center carrentalredemption redemptionoptions" href="">
          <div className="d-flex flex-column align-items-center justify-content-center p-2 p-lg-2 p-xl-4 rounded-circle imageBox">
            <img src={imgUrl} />
          </div>
          <p className="mt-2">{title}</p>
        </a>
      </div>
    </>
  );
};

export default IconCard;
