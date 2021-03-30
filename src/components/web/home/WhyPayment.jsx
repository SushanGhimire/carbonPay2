import React from "react";
import whyBg from "../../../assets/images/homepage/whyBg2.jpg";
function WhyPayment() {
  return (
    <div
      className="w-full relative  h-100 bg-center bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${whyBg})`,
      }}
    >
      <div className="w-full h-full bg-black absolute bg-opacity-50"></div>
      <div className="absolute w-full flex justify-center flex-col items-center space-y-4 top-52 right-0">
        <div className="font-bold text-white text-4xl md:text-6xl  font-header">
          Why Payment?
        </div>
        <div className="text-base md:text-lg font-bold text-white text-center">
          Taking 1% of every internet transaction to fund Climate Change effort
          has fastest impact
        </div>
      </div>
    </div>
  );
}

export default WhyPayment;
