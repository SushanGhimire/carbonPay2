import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Aside() {
  const [width, setWidth] = useState(window.innerWidth);
  let nav = window.location.pathname.split("/")[2];
  const [navListName, setNavListName] = useState(`/dashboard/${nav}`);

  const asideLists = [
    {
      name: "Home",
      logo:
        "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      path: "/dashboard/home",
    },
    {
      name: "Transactions",
      logo:
        "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      path: "/dashboard/transaction",
    },
    {
      name: "Billing",
      logo:
        "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
      path: "/dashboard/billing",
    },
    {
      name: "Integrations",
      logo:
        "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
      path: "/dashboard/integrations",
    },
    {
      name: "Settings",
      logo:
        "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
      path: "/dashboard/settings",
    },
    // {
    //   name: "Balances",
    //   logo:
    //     "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    //   path: "/dashboard/balances",
    // },
  ];
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
  useEffect(() => {
    setNavListName(`/dashboard/${nav}`);
  }, [nav]);
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });
  return (
    <>
      {/* for laptops */}
      {width > 1023 && (
        <div className="bg-gray-50 w-64 border overflow-auto">
          {/* header  */}
          <div className="flex space-x-2  items-center pl-8 pr-2 py-3.5 ">
            <div>
              <svg
                className="w-7 h-7 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            {/* carbonpay  */}
            <Link to="/" className="text-xl font-semibold">
              CarbonPay
            </Link>
          </div>
          {/* content part  */}
          <div className="flex flex-col px-4 mt-5">
            {asideLists.map((list, index) => {
              const { path, name, logo } = list;
              return (
                <Link to={path} key={index} className="flex ">
                  {path === navListName ? (
                    <div
                      className={`flex space-x-4 py-2  rounded-full w-full px-4 bg-primary text-white  transition-all duration-300 ease-in-out mt-0.5`}
                    >
                      <div>
                        <svg
                          className="w-5 h-5"
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
                  ) : (
                    <div
                      className={`flex space-x-4 py-2 rounded-full w-full px-4 hover:bg-primary hover:text-white text-gray-700 transition-all duration-300 ease-in-out mt-0.5`}
                    >
                      <div>
                        <svg
                          className="w-5 h-5"
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
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Aside;
