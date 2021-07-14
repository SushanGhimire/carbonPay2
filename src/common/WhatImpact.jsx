// import { useEffect } from "react";
import { Link } from "react-router-dom";
import check from "../assets/images/homepage/check.svg";
// import AOS from "aos";
// import "aos/dist/aos.css";
function WhatImpact({ Carbonclimate, cardImage, title }) {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <div className="md:flex pt-10 pb-20 px-5 bg-white font-rubik">
      <div className="w-full md:w-1/2 md:relative flex justify-center items-center">
        <img
          src={cardImage}
          className="w-full h-full md:w-full md:h-1/2 lg:h-full lg:w-full object-cover "
          alt=""
          // data-aos="flip-left"
          // data-aos-anchor-placement="top-bottom"
          // data-aos-duration="2000"
        />
      </div>
      <div className="flex-1 flex flex-col p-5 md:p-10 justify-center items-center">
        <div className="font-bold text-2xl sm:text-3xl lg:text-4xl mt-10 md:mt-0 text-center font-header">
          {title}
        </div>
        <div>
          <div className="h-1 w-44 md:w-64 bg-primary mx-auto mt-3"></div>
        </div>
        <div className="mt-10  sm:px-0">
          <ul className="space-y-4">
            {Carbonclimate.map((blog, index) => {
              return (
                <div
                  key={index}
                  className="flex space-x-3 items-center"
                  // data-aos={blog.aos}
                  // data-aos-anchor-placement="top-bottom"
                  // data-aos-duration={blog.time}
                >
                  <div className="lg:w-8 w-6 h-6 lg:h-8">
                    <img src={check} className="w-full h-full" alt="" />
                  </div>
                  <div className="flex-1 text-gray-700 text-sm md:text-base">
                    {blog.blog}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
        {!localStorage.getItem("access") && (
          <div>
            <Link to="/register" className="button-animation mt-8">
              <div className="animation-text px-6 rounded-full py-2 text-lg lg:text-xl font-header">
                Register Now
              </div>
              <div className="animation-bg"></div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default WhatImpact;
