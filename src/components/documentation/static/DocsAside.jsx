import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DocsAside() {
  // const [State, setState] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [AsideWidth, setAsideWidth] = useState("w-0");
  const asideLists = [
    {
      title: "Getting Started",
      items: [
        {
          name: "About CarbonPay",
          logo:
            "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
          path: "/docs/aboutcarbonpay",
        },
      ],
    },
    {
      title: "For Merchant",
      items: [
        {
          name: "Merchant signup form",
          logo: "M12 6v6m0 0v6m0-6h6m-6 0H6",
          path: "/docs/merchantsignup",
        },
        {
          name: "Merchant select %",
          logo: "M8 9l4-4 4 4m0 6l-4 4-4-4",
          path: "/docs/merchantselect",
        },
      ],
    },
    {
      title: "Carbonpay products",
      items: [
        {
          name: "Carbonpay checkouts",
          logo:
            "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
          path: "/docs/charbonpaycheckout",
        },
        {
          name: "Carbon Neutral checkouts",
          logo:
            "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
          path: "/docs/charbonneutralcheckout",
        },
        {
          name: "How carbonpay works",
          logo:
            "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          path: "/docs/howcarbonpayworks",
        },
        {
          name: "CarbonPay Login",
          logo:
            "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1",
          path: "/docs/carbonpaylogin",
        },
      ],
    },
    {
      title: "Integrating with CarbonPay",
      items: [
        {
          name: "WooCommerce",
          logo:
            "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
          path: "/docs/woocommerce",
        },
        {
          name: "Shopify",
          logo:
            "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
          // path: "/docs/merchantselect",
        },
      ],
    },
  ];
  const setAsideWidthHanddler = () => {
    AsideWidth === "w-0" ? setAsideWidth("w-full") : setAsideWidth("w-0");
  };
  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 1023 && width < 1024) {
      setWidth(innerWidth);
      setAsideWidth("w-full");
    } else if (innerWidth < 1024 && width > 1023) {
      setWidth(innerWidth);
      setAsideWidth("w-0");
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
  console.log(width);
  console.log(window.innerWidth);
  return (
    <div className={` ${width < 1024 ? " fixed h-screen z-20" : "flex "}`}>
      <div
        className={`bg-gray-50 ${AsideWidth} ${
          width < 1024 ? "h-full" : ""
        }   lg:w-68 border overflow-auto font-rubik pt-4  lg:block relative transition-all duration-200 ease-in-out pb-20`}
      >
        {/* docs arrow  */}
        <div
          className="fixed bg-primary text-white  px-2 py-4 rounded-r-full flex space-x-2 items-center text-sm -left-6 lg:hidden"
          style={{
            top: "50%",
            transform: "translateX(50%)",
          }}
          onClick={setAsideWidthHanddler}
        >
          <svg
            className="w-4 h-4 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={`${
                AsideWidth === "w-0"
                  ? "M13 5l7 7-7 7M5 5l7 7-7 7"
                  : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }`}
            />
          </svg>
        </div>
        {asideLists.map((asidelist, index) => {
          const { title, items } = asidelist;
          return (
            <div key={index}>
              {/* for merhcant  */}
              <div className="font-semibold pl-8 pr-2 pt-3 pb-2 text-lg text-gray-900">
                {title}
              </div>
              {/* content part  */}
              <div className="flex flex-col ">
                {items.map((list, index) => {
                  const { logo, name, path } = list;
                  return (
                    <Link
                      to={path}
                      key={index}
                      className="text-gray-700 pl-5 pr-2 "
                      onClick={setAsideWidthHanddler}
                    >
                      <div
                        className={`flex items-center space-x-4 hover:bg-primary hover:text-white py-1 pl-3 rounded-full transition-all duration-300 ease-in-out `}
                      >
                        <div>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={logo}
                            />
                          </svg>
                        </div>
                        <span> {name}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DocsAside;
