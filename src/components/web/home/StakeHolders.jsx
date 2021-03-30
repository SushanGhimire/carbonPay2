import React from "react";
import merchant from "../../../assets/images/homepage/merchant.svg";
import consumer from "../../../assets/images/homepage/consumer.svg";
import nature from "../../../assets/images/homepage/nature.svg";

function StakeHolders() {
  const cards = [
    {
      logo: merchant,
      name: "merchant",
      title: "Climate Impact Payment to increase transaction",
      bg: "bg-seconday",
    },
    {
      logo: consumer,
      name: "Consumers",
      title: "Make Climate Conscious purchase with impact tracking page",
    },
    {
      logo: nature,
      name: "Climate Impact Non-Profit",
      title:
        "Accountability and Incentives for highest net carbon capture efforts",
    },
  ];
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 lg:px-20 py-20 bg-light_white">
      <div className="col-span-1 sm:col-span-2 md:col-span-3">
        <div className="text-xl sm:text-4xl text-center mt-10 font-header">
          Stakeholders
        </div>
        <div>
          <div className="h-1 w-20 md:w-32 bg-primary mx-auto mt-3"></div>
        </div>
      </div>
      {cards.map((card, index) => {
        return (
          <div
            className="col-span-1 py-10 transition-all duration-300 ease-in-out px-3 hover:bg-gray-50 "
            key={index}
          >
            <div className={`flex flex-col space-y-4 `}>
              <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 lg:w-20 lg:h-20">
                <img src={card.logo} alt="" />
              </div>
              <div className="text-center text-2xl sm:text-xl lg:text-2xl text-gray-800 font-semibold font-header">
                {card.name}
              </div>
              <div className="text-center sm:text-base lg:text-lg text-gray-700">
                {card.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StakeHolders;
