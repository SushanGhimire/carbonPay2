import React from "react";
// import planet from "../../assets/images/homepage/noPlanet.jpg";
import impact from "../../assets/images/homepage/impact.jpg";
import check from "../../assets/images/homepage/check.svg";

function WhatImpact() {
  const Carbonclimate = [
    {
      blog: "We direct 100% of merchant contribution to carbon removal.",
    },
    {
      blog:
        "CarbonPay dynamically selects Non-profit with highest net carbon capture effort",
    },
    {
      blog: "This creates environment of accountability and innovation",
    },
    {
      blog:
        "Our software help maximize the long-term impact. CarbonPay buys carbon removal from the exact same Nonprofits.",
    },
  ];
  return (
    <div className="md:flex py-10 px-5 bg-white">
      <div className="w-full md:w-1/2 md:relative">
        <img
          src={impact}
          className="h-full w-full object-cover object-center"
          alt=""
        />
        {/* <div className="bg-black absolute hidden md:flex w-full h-full top-0 opacity-20"></div> */}
      </div>
      <div className="flex-1 flex flex-col p-5 md:p-10 justify-center items-center">
        <div className="font-bold text-2xl md:text-4xl mt-10 md:mt-0 text-center font-header">
          What is CarbonPay for Climate Impact and Our planet?
        </div>
        <div>
          <div className="h-1 w-44 md:w-64 bg-primary mx-auto mt-3"></div>
        </div>
        <div className="mt-10 px-12 sm:px-0">
          <ul className="space-y-4">
            {Carbonclimate.map((blog) => {
              return (
                <div key={blog.blog} className="flex space-x-3 items-center">
                  <div className="w-8 h-8">
                    <img src={check} className="w-full h-full" alt="" />
                  </div>
                  <div className="flex-1 text-gray-700">{blog.blog}</div>
                </div>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="button-animation mt-8">
            <div className="animation-text px-6 rounded-full py-2 text-lg lg:text-xl font-header">
              Remove Carbon Now
            </div>
            <div className="animation-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatImpact;
