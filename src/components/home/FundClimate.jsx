import React from "react";
import coal from "../../assets/images/homepage/coal.jpg";
import planting from "../../assets/images/homepage/planting.jpg";

function FundClimate() {
  const climates = [
    {
      img: coal,
      dis:
        " CarbonPay dynamically connects small percentage of each transaction with non-profit with highest net-carbon removal efforts",
      aos: "fade-right",
    },
    {
      img: planting,
      dis:
        " CarbonPay automatically sends confirmation email to customer about what happened to their purchase.",
      aos: "fade-left",
    },
  ];
  return (
    <div className="bg-gray-100 p-5 md:px-10 md:pb-10 pt-10 md:pt-20  flex flex-col justify-center md:relative">
      <div className="col-span-2 flex flex-col justify-center items-center ">
        <div className="mx-auto lg:w-1/2 text-3xl md:text-4xl font-bold text-center">
          Fund Climate Change Efforts with Payment
        </div>
        <div>
          <div className="h-1 w-44 md:w-64 bg-primary mx-auto mt-3"></div>
        </div>
        <div className="mx-auto mt-5 text-lg text-gray-600 text-center xl:text-justify md:h-44">
          With CarbonPay, you can direct a fraction of each payment to donate to
          best carbon removal non-profits in just a few clicks.
        </div>
      </div>
      <div className="md:absolute md:flex justify-center mt-10  md:mt-0 inset-x-0  md:top-64">
        <div className="md:2/3 lg:w-1/2 px-5 rounded-lg sm:flex overflow-hidden space-y-4 sm:space-y-0 sm:space-x-4 py-5 animation-card">
          {climates.map((climate, index) => {
            return (
              <div
                key={index}
                className="sm:3/4 md:w-1/2 flex  flex-col bg-gray-200 border border-gray-300 cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:border-green-primary"
              >
                <div
                  className="h-40 md:h-44 bg-center bg-cover "
                  style={{
                    backgroundImage: `url(${climate.img})`,
                  }}
                >
                  {/* <img
                    src={climate.img}
                    className="h-full w-full object-cover"
                    alt=""
                  /> */}
                </div>
                <div className="p-5 text-center text-gray-700 ">
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
