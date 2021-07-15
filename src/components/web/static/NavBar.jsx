import { React, useState, useEffect, useRef } from "react";
// import logo from "../../assets/images/homepage/carbonPayLogo2.png";
import { Link } from "react-router-dom";
import leaf from "../../../assets/images/dashboard/leaf.png";
function NavBar({ loggedIn }) {
  const [width, setWidth] = useState(window.innerWidth);
  let nav = window.location.pathname.split("/")[1];
  const [navListName, setNavListName] = useState(`/${nav}`);
  const climateNav = `/${nav}`;
  const [isShown, setIsShown] = useState(false);
  const mobileSidebar = useRef();
  const coverAll = useRef();
  // const [position, setPosition] = useState(0);
  const navlist = [
    // {
    //   name: "Climate Change",
    //   to: "/climatechange",
    // },
    {
      name: "For Merchants",
      to: "/formerchants",
    },
    {
      name: "For Consumers",
      to: "/forconsumers",
    },
    // {
    //   name: "Products",
    //   to: "/products",
    // },
    // {
    //   name: "Carbon Neutral",
    //   to: "/carbonneutral",
    // },
    {
      name: "Docs",
      to: "/docs/aboutcarbonpay",
    },
  ];
  const mobNavlist = [
    {
      name: "Climate Change",
      to: "/climatechange",
    },
    {
      name: "For Merchants",
      to: "/formerchants",
    },
    {
      name: "For Consumers",
      to: "/forconsumers",
    },
    {
      name: "Carbon Neutral",
      to: "/carbonneutral",
    },
    // {
    //   name: "Products",
    //   to: "/products",
    // },
    {
      name: "Docs",
      to: "/docs/aboutcarbonpay",
    },
  ];
  const changeNavListName = () => {
    if (navListName) {
      setNavListName("");
    } else {
      setNavListName(`/${nav}`);
    }
  };
  // toggle in mobile
  const toggleMobileSidebar = () => {
    const sidebar = mobileSidebar.current;
    const coverall = coverAll.current;
    if (sidebar.clientWidth > 0) {
      sidebar.style.width = "0";
      coverall.style.display = "none";
    } else {
      sidebar.style.width = "288px";
      coverall.style.display = "block";
    }
  };

  // if user is using screen width of laptop and changes to lower than 1023px width, call the function
  // if user is using screen width of ipad or mobile and changes to higher than 1024px width, call the function
  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 1023 && width < 1024) {
      setWidth(innerWidth);
    } else if (innerWidth < 1024 && width > 1023) {
      setWidth(innerWidth);
    }
  };
  const scrollToTop = () => window.scrollTo(0, 0);
  const handleShown = () => {
    if (isShown) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  };
  useEffect(() => {
    // handleScroll();
    window.addEventListener("resize", handleWidth);
    // window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleWidth);
      // window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`sticky top-0 z-50 bg-white w-full font-header transition-all duration-300 ease-in-out text-lg shadow-md py-6 lg:py-0 `}
    >
      <div className="w-full flex justify-between px-10 items-center">
        <Link
          to="/"
          className="cursor-pointer flex space-x-2  items-center"
          onClick={scrollToTop}
        >
          <div>
            <img src={leaf} alt="" className="w-8" />
          </div>
          {/* carbonpay  */}
          <div className="text-lg font-semibold">CarbonPay</div>
        </Link>
        {width > 1023 && (
          <>
            <div
              className="flex space-x-4 items-center"
              onMouseEnter={changeNavListName}
              onMouseLeave={changeNavListName}
            >
              <div
                className={`cursor-pointer  tracking-wider text-lg py-6   border-b-4 border-white relative   `}
              >
                <span
                  className={` transition-all duration-300 ease-linear hover:text-primary ${
                    climateNav === "/climatechange" ||
                    climateNav === "/carbonneutral"
                      ? " text-primary font-semibold"
                      : ""
                  } `}
                  onMouseEnter={handleShown}
                >
                  Climate
                </span>
                {isShown && (
                  <>
                    <div className="absolute bg-white w-4 h-4 transform rotate-45 -bottom-4 border left-0"></div>
                    <div
                      className="absolute bg-white w-44 -bottom-24 rounded shadow-md -right-10 flex flex-col py-1"
                      onMouseEnter={() => {
                        setIsShown(true);
                      }}
                      onMouseLeave={() => setIsShown(false)}
                    >
                      <Link
                        to="/climatechange"
                        className={`px-5 py-2 border-l-2 border-transparent hover:border-primary transition-all duration-300 ease-linear text-base hover:text-
                    ${
                      climateNav === "/climatechange"
                        ? "border-primary  border-l-2 text-primary font-semibold"
                        : ""
                    }
                    `}
                      >
                        Climate Change
                      </Link>
                      <Link
                        to="/carbonneutral"
                        className={`px-5 py-2 border-l-2 border-transparent hover:border-primary transition-all duration-300 ease-linear text-base hover:text-
                    ${
                      climateNav === "/carbonneutral"
                        ? "border-primary  border-l-2 text-primary font-semibold"
                        : ""
                    }
                    `}
                      >
                        Carbon Neutral{" "}
                      </Link>
                    </div>
                  </>
                )}
              </div>
              {navlist.map((list, index) => {
                const { name, to } = list;
                return (
                  <Link
                    className={`cursor-pointer hover:text-primary tracking-wider text-lg py-6   border-b-4 border-white hover:border-primary transition-all duration-300 ease-linear  ${
                      to === navListName
                        ? "border-primary border-b-4 text-primary font-semibold"
                        : ""
                    }`}
                    key={index}
                    to={to}
                    onClick={scrollToTop}
                    onMouseEnter={() => {
                      setIsShown(false);
                    }}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>

            <Link
              to={loggedIn ? "/dashboard/transaction" : "/login"}
              className="button-animation"
            >
              <div className="animation-text px-6 rounded-full py-2">
                {loggedIn ? "Dashboard" : "Login Here"}
              </div>
              <div className="animation-bg"></div>
            </Link>
          </>
        )}

        {width < 1024 && (
          <div>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleMobileSidebar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        )}
      </div>
      {/* for ipads and mobiles */}
      {width < 1024 && (
        <>
          <div
            className="h-screen w-screen fixed left-0 top-0 bg-black bg-opacity-50 hidden"
            ref={coverAll}
            onClick={toggleMobileSidebar}
          ></div>
          <div
            className="fixed top-0 left-0 h-screen w-0 z-20 bg-white text-black transition-all duration-300 overflow-hidden"
            ref={mobileSidebar}
          >
            <div className="w-72 flex flex-col px-8 ">
              <Link
                to="/"
                onClick={() => {
                  toggleMobileSidebar();
                  scrollToTop();
                }}
                className="text-3xl md:text-4xl font-header font-bold py-5 text-center text-primary"
              >
                Carbon Pay
              </Link>

              <div className="flex flex-col space-y-2 items-center">
                {mobNavlist.map((list, index) => {
                  const { name, to } = list;
                  return (
                    <Link
                      className="cursor-pointer hover:text-primary tracking-wider text-lg"
                      key={index}
                      to={to}
                      onClick={() => {
                        toggleMobileSidebar();
                        scrollToTop();
                      }}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>

              <Link
                to={loggedIn ? "/dashboard/stripeform" : "/login"}
                className="button-animation text-center mt-2"
              >
                <div className="animation-text px-6 rounded-full py-2">
                  {loggedIn ? "Connect with stripe" : "Login Here"}
                </div>
                <div className="animation-bg"></div>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
