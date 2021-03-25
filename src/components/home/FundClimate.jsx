import React from "react";
import coal from "../../assets/images/homepage/connect.svg";
import planting from "../../assets/images/homepage/email.svg";

function FundClimate() {
  const climates = [
    {
      img: coal,
      qst: "What Carbon Pay Does?",
      dis:
        " CarbonPay dynamically connects small percentage of each transaction with non-profit with highest net-carbon removal efforts",
      aos: "fade-right",
    },
    {
      img: planting,
      qst: "How To Verify?",
      dis:
        " CarbonPay automatically sends confirmation email to customer about what happened to their purchase.",
      aos: "fade-left",
    },
  ];
  return (
    <div className="p-5 md:px-10 md:pb-10 pt-10 md:pt-20 lg:pt-28  flex flex-col justify-center">
      <div className="flex flex-col justify-center items-centerpy-5">
        <div className="mx-auto lg:w-1/2 text-3xl md:text-4xl font-bold text-center">
          Fund Climate Change Efforts with Payment
        </div>
        <div>
          <div className="h-1 w-44 md:w-64 bg-primary mx-auto mt-3"></div>
        </div>
        <div className=" mt-5 text-lg text-gray-600 text-center">
          With CarbonPay, you can direct a fraction of each payment to donate to{" "}
          <br />
          best carbon removal non-profits in just a few clicks.
        </div>
      </div>
      <div className="md:flex justify-center ">
        <div className="md:2/3 lg:w-1/2 px-5 rounded-lg sm:flex  space-y-4 sm:space-y-0 sm:space-x-4 py-5 ">
          {climates.map((climate, index) => {
            return (
              <div
                key={index}
                className="sm:3/4 md:w-1/2 flex  flex-col cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-green-primary  rounded-lg shadow-lg p-5"
              >
                <div className="w-16 h-16 mx-auto">
                  <img src={climate.img} alt="" />
                </div>
                <div className="flex justify-center font-semibold items-center space-x-2 mt-3 text-lg">
                  <span className="text-primary ">.0{index + 1}</span>
                  <div>{climate.qst}</div>
                </div>
                <div className="text-center text-gray-700 mt-2 pb-3">
                  {climate.dis}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FundClimate;
