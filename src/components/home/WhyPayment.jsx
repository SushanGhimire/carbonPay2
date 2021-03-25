import React from "react";
import videoBg from "../../assets/images/homepage/videoBg3.mp4";
function WhyPayment() {
  return (
    <div className="w-full relative md:mt-56 h-100">
      <div className="w-full absolute  overflow-hidden h-full">
        <div className="w-full h-full">
          {/* <img src={image} className="h-full mx-auto object-cover" alt="" /> */}
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={videoBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="w-full h-full bg-black absolute bg-opacity-50"></div>
      <div className="absolute w-full flex justify-center flex-col items-center space-y-4 top-56 right-0">
        <div className="font-bold text-white text-4xl md:text-6xl mt-10 md:mt-0">
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
