import React from "react";

function FlexCard({ title, des, direction, img }) {
  return (
    <div
      className={`md:flex  px-5 items-center py-10 ${
        direction ? "flex-row-reverse" : ""
      } font-header`}
    >
      <div className="flex w-full md:w-1/2 flex-col space-y-3 md:px-10 lg:px-12  ">
        <div className="font-bold text-2xl sm:text-3xl lg:text-4xl mt-10 md:mt-0 text-left  font-header">
          {title}
        </div>
        <div className="lg:text-base text-center md:text-left text-gray-700">
          {des}
        </div>
      </div>
      <div className="flex-1 w-full  mt-10 md:mt-0">
        <div className="h-100">
          <img src={img} className="h-full mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FlexCard;
