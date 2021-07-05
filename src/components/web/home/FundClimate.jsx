import { useEffect } from "react";
import buy from "../../../assets/images/homepage/buy.svg";
import click from "../../../assets/images/homepage/click.svg";
import email from "../../../assets/images/homepage/email.svg";
import save from "../../../assets/images/homepage/save.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function FundClimate() {
  useEffect(() => {
    AOS.init();
  }, []);
  const climates = [
    {
      img: buy,
      qst: "BUY:",
      dis: "Buy your goods/services from any online website using digital payment.",
      aos: "fade-up",
    },
    {
      img: click,
      qst: "CLICK:",
      dis: "Click our button to contribute a few extra dollars to CarbonPay.",
      aos: "fade-down",
    },
    {
      img: email,
      qst: "VERIFY:",
      dis: "You’ll receive an email tracking which non-profit your contributions went to.",
      aos: "fade-up",
    },
    {
      img: save,
      qst: "SAVE: ",
      dis: "Your contributions will help offset our carbon footprint and save our planet!.",
      aos: "fade-down",
    },
  ];
  return (
    <div className="p-5 md:px-10 md:pb-28 pt-10 md:pt-20 lg:pt-28  flex flex-col justify-center bg-light_white font-rubik">
      <div className="flex flex-col justify-center items-centerpy-5">
        <div className="mx-auto lg:w-1/2 text-3xl md:text-4xl font-semibold text-center font-rubik">
          Fund Climate Change Efforts <br /> with{" "}
          <span className="font-extrabold text-primary">Minimal</span> Payment
        </div>
        <div>
          <div className="h-1 w-44 md:w-64 bg-primary mx-auto mt-3"></div>
        </div>
        <div className=" mt-5 text-lg text-gray-600 text-center font-rubik">
          With CarbonPay, you can direct a fraction of each payment towards the
          <br />
          best carbon removal non-profits in just a few clicks.
        </div>
      </div>
      <div className="md:flex justify-center ">
        <div className=" w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 ">
          {climates.map((climate, index) => {
            return (
              <div
                key={index}
                className="flex  flex-col  hover:border-green-primary  p-5 "
                data-aos={climate.aos}
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
              >
                <div className="w-16 h-16 mx-auto">
                  <img src={climate.img} alt="" />
                </div>
                <div className="flex text-lg justify-center font-semibold items-center space-x-2 mt-3  py-2">
                  <span className="text-primary font-header ">
                    .0{index + 1}
                  </span>
                  <div>{climate.qst}</div>
                </div>
                <div className="text-center text-gray-700 pb-3">
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
