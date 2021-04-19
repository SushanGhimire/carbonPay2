import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function FlexCard({ title, des, direction, img }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={`md:flex  px-5 items-center py-10 ${
        direction ? "flex-row-reverse" : ""
      } font-header`}
    >
      <div
        className="flex w-full md:w-1/2 flex-col space-y-3 md:px-10 lg:px-12 "
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <div className="font-bold text-2xl sm:text-3xl lg:text-4xl mt-10 md:mt-0 text-center md:text-left  font-header">
          {title}
        </div>
        <div className="lg:text-base text-center md:text-left text-gray-700 font-rubik">
          {des}
        </div>
      </div>
      <div
        className="flex-1 w-full  mt-10 md:mt-0"
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <div className="h-100">
          <img src={img} className="h-full mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FlexCard;
