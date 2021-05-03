import React from "react";
import merchantform from "../../../assets/images/documentation/merchantform.png";

function MerchantSelect() {
  return (
    <div className="flex flex-col pt-10 px-16 ">
      {/*Merchant Signup */}
      <div className="flex flex-col  max-w-2xl space-y-2 pb-10">
        {/* <div className="text-2xl font-semibold text-primary">
          Merchant Select %
        </div> */}
        {/* create acction  */}
        <div className="flex flex-col  pb-2">
          <div className="text-2xl font-semibold  text-primary">
            Merchant Select Donation %
          </div>
          <div className="flex  mt-2">
            After Login with login credintials merchat can fill their
            information on Merchant Form along with donation percentage they
            want to donate on every online purchanse which is powered by
            Aspiration.
          </div>
          <div>
            <img src={merchantform} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantSelect;
