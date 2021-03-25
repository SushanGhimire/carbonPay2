import React from "react";

function FrontPage() {
  return (
    <div
      className="bg-fixed bg-no-repeat bg-center h-screen bg-cover font-text relative"
      id="homeBg"
    >
      <main className="bg-black bg-opacity-50 w-full h-full flex items-center absolute top-0  px-6 pt-10">
        <div className="space-y-5 md:w-1/2 flex flex-col  justify-center items-center">
          <div className="text-white font-rubik text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-center">
            Carbon Pay
          </div>
          <div className="text-white sm:text-xl lg:text-3xl text-center">
            Removing Carbon From Environment with Every Online Purchase
          </div>
          <div>
            <div className="button-animation">
              <div className="animation-text px-6 rounded-full py-2 text-lg lg:text-xl">
                Remove Now
              </div>
              <div className="animation-bg"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FrontPage;
