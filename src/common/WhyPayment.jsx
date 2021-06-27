import React from "react";
import whyBg from "../assets/images/homepage/whyBg2.jpg";
function WhyPayment({ title, des }) {
  return (
    <div
      className="w-full relative  h-100 bg-center bg-cover bg-no-repeat bg-fixed flex justify-center items-center"
      style={{
        backgroundImage: `url(${whyBg})`,
      }}
    >
      <div className="w-full h-full bg-black absolute bg-opacity-60 z-10"></div>
      <div className=" w-full flex-col space-y-4 z-20">
        <div className="font-bold text-white text-4xl md:text-7xl  font-header text-center">
          {title}
        </div>
        <div className="text-2xl md:text-3xl font-bold text-white text-center font-rubik max-w-2xl mx-auto">
          {des}
        </div>
      </div>
    </div>
  );
}

export default WhyPayment;
