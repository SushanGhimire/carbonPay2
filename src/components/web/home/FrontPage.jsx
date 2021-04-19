import { React, useEffect } from "react";
// import image from "../../../assets/images/homepage/forest.svg";
// import wave from "../../assets/img/svg.png";
import bubble from "../../../assets/images/homepage/bubble.svg";
import AOS from "aos";
import "aos/dist/aos.css";
function FrontPage({ header, des, img }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="md:min-h-screen md:flex px-10 md:relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bubble})` }}
    >
      {/* left side  */}
      <div
        className="md:w-1/2  flex flex-col space-y-4 text-center items-center justify-center z-20"
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <div className="font-bold text-4xl md:text-6xl mt-10 md:mt-0">
          {header}
        </div>
        <div className="text-base md:text-lg font-bold text-gray-600">
          {des}
        </div>
        <div>
          <div className="button-animation">
            <div className="animation-text px-6 rounded-full py-2">
              Start Now
            </div>
            <div className="animation-bg"></div>
          </div>
        </div>
      </div>
      {/* right side  */}
      <div
        className="flex-1 mt-5 md:mt-0 z-20 flex justify-center items-center bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${img})` }}
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <img src={img} className=" md:h-64 md:hidden object-cover" alt="" />
      </div>
      {/* <div className="hidden md:flex w-full absolute inset-x-0 bottom-0 z-10">
        <img src={wave} className="w-full h-full object-cover " alt="" />
      </div> */}
    </div>
  );
}

export default FrontPage;
