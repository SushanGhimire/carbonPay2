import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
function StakeHolders({ cards, title, grid }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`grid w-full grid-cols-1 sm:grid-cols-2 md:${grid} gap-6 px-10 lg:px-20 py-20 bg-light_white font-rubik`}
    >
      <div
        className={`col-span-1 sm:col-span-2 md:${
          grid === "grid-cols-3" ? "col-span-3" : "col-span-4"
        }`}
      >
        <div className="text-xl sm:text-4xl text-center mt-10 font-header font-bold">
          {title}
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
            data-aos={card.aos}
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
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
