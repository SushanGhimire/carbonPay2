import { React, useState, useEffect } from "react";

function NavBar() {
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    if (window.pageYOffset > 0 && position === 0) {
      setPosition(1);
    } else if (window.pageYOffset === 0 && position > 0) {
      setPosition(0);
    }
  };

  useEffect(() => {
    handleScroll();
    // window.addEventListener("resize", handleWidth);
    window.addEventListener("scroll", handleScroll);
    return () => {
      // window.removeEventListener("resize", handleWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`fixed z-10 w-full font-header  py-5 text-white opacity-90 transition-all duration-300 ease-in-out ${
        position && " bg-black"
      }`}
    >
      <div className="w-full flex justify-between px-10 items-center">
        <div className="cursor-pointer">Carbon Pay</div>
        <div className="flex space-x-4 items-center">
          <div className="cursor-pointer">Products</div>
          <div className="cursor-pointer">Use Cases</div>
          <div className="cursor-pointer">Developers</div>
          <div className="cursor-pointer">Company</div>
          <div className="cursor-pointer">Pricing</div>
        </div>
        <div className="button-animation">
          <div className="animation-text px-6 rounded-full py-2">Signin</div>
          <div className="animation-bg"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
