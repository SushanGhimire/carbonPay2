import { React, useEffect } from "react";
import bubble from "../../../assets/images/homepage/bubble.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import carbonVideo from "../../../assets/images/neutral/carbonpay.mp4";
import image from "../../../assets/images/homepage/forest.svg";
function VideoFrontPage() {
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
        <div className="animation-card">
          <img src={image} className="w-64" alt="" />
        </div>
        <div className="font-bold text-4xl md:text-6xl mt-10 md:mt-0">
          CarbonPay
        </div>
        <div className="text-base md:text-lg font-semibold text-gray-600 font-rubik">
          Removing Carbon with Every Online Purchase
        </div>
      </div>
      {/* right side  */}

      <div
        className="flex-1 mt-5 md:mt-0 z-20 flex justify-center items-center relative"
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <video
          src={carbonVideo}
          className=""
          // controls="controls"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}

export default VideoFrontPage;
