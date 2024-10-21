import React, { useState } from "react";
import "./redemptionmenu.css";
import IconCard from "../../../components/ui/iconcard/IconCard";
import Error from "../../../components/error/Error";
import RedemptionMenuLoader from "../../../components/skeleton/RedemptionMenuLoader";

const RedemptionMenu = ({ redemptionMenu, isLoading, isError }) => {
  const [componentName] = useState("RedemptionMenu");
  // console.log(redemptionMenu);

  if (isLoading) {
    return <RedemptionMenuLoader loadingText={componentName} menucount={redemptionMenu.length} />;
  }

  if (isError) {
    return <Error errorText={componentName} />;
  }

  return (
    <>
      {/* OPTION 1 */}
      {/* <div className="dvRedemptionMenu">
        <div className="container-fluid">
          <div className="row justify-content-md-center flex-nowrap flex-md-wrap scroll-hoz py-4 pt-md-5 pb-md-3">
            <IconCard redemptionMenu={redemptionMenu} />
          </div>
        </div>
      </div> */}

      {/* OPTION 2 */}
      <div className="dvRedemptionMenu">
        <div className="container-fluid">
          <div className="row justify-content-md-center flex-nowrap flex-md-wrap scroll-hoz py-4 pt-md-5 pb-md-3">
            {redemptionMenu.length > 0 &&
              redemptionMenu.map((item) => {
                // const { id, imgUrl, title } = item;
                // return <IconCard key={id} id={id} imgUrl={imgUrl} title={title} />;
                return <IconCard key={item.id} {...item} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RedemptionMenu;
