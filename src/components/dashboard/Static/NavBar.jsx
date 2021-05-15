import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleLogout } from "../../authentication/authorization";
// import { baseUrl } from "../../authentication/authorization";
// import axios from "axios";
function NavBar({ handleVerify }) {
  const [width, setWidth] = useState(window.innerWidth);

  const [isShown, setIsShown] = useState(false);
  const mobIpadSidebar = useRef();
  const coverAll = useRef();
  const asideLists = [
    {
      name: "Home",
      logo: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      path: "/dashboard",
    },
    {
      name: "Transactions",
      logo: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      path: "/dashboard/transaction",
    },
    {
      name: "Billing",
      logo: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
      path: "/dashboard/billing",
    },
    {
      name: "Integrations",
      logo: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
      path: "/dashboard/integrations",
    },
    {
      name: "Settings",
      logo: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
      path: "/dashboard/settings",
    },
    // {
    //   name: "Balances",
    //   logo:
    //     "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    //   path: "/dashboard/balances",
    // },
  ];
  // let Refresh = localStorage.getItem("refresh");
  // let token = localStorage.getItem("access");
  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 1023 && width < 1024) {
      setWidth(innerWidth);
    } else if (innerWidth < 1024 && width > 1023) {
      setWidth(innerWidth);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });
  const toggleMobIpadSidebar = () => {
    setIsShown(false);
    const sidebar = mobIpadSidebar.current;
    const coverall = coverAll.current;
    if (sidebar.clientWidth > 0) {
      sidebar.style.width = "0";
      coverall.style.display = "none";
    } else {
      sidebar.style.width = "288px";
      coverall.style.display = "block";
    }
  };
  const handleShown = () => {
    if (isShown) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  };
  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location = "/login";
  // };

  return (
    <div
      className="bg-white z-10 w-full py-2  border-b transition-all duration-300 ease-in-out lg:px-10 sticky top-0"
      onMouseLeave={() => setIsShown(false)}
    >
      {/* nav bar  */}
      <div className="w-full flex justify-end space-x-4 px-5 py-2 items-center">
        <button
          className="bg-primary hover:bg-secondary transition-all duration-300 ease-in-out text-white px-5 py-2 rounded "
          onClick={handleVerify}
        >
          Verify Account
        </button>
        <div
          className=" cursor-pointer text-gray-600 flex lg:hidden "
          onClick={toggleMobIpadSidebar}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        {/* feedback sessions  */}
        <div className="lg:flex space-x-4 text-gray-600 items-center relative hidden ">
          {/* user  */}
          <div onClick={handleShown}>
            <svg
              className="w-5 h-5 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          {isShown && (
            <div
              className={`absolute solution-list top-10 -right-10 bg-gray-100 text-secondary   rounded-md shadow-md cursor-pointer p-3 `}
            >
              <Link
                to="/dashboard/userprofile"
                className=" px-3 hover:bg-secondary hover:text-white py-2 rounded-md transition-all duration-300 ease-in-out flex items-center space-x-2"
              >
                <div>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span>Profile</span>
              </Link>
              <div
                className=" px-3 hover:bg-secondary hover:text-white py-2 rounded-md transition-all duration-300 ease-in-out flex items-center space-x-2"
                onClick={handleLogout}
              >
                <div>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* aisde for mobile ipad  */}
      {width < 1024 && (
        <>
          <div
            className="h-screen w-screen fixed left-0 top-0  hidden overflow-x-hidden"
            ref={coverAll}
            onClick={toggleMobIpadSidebar}
          ></div>
          <div
            className="bg-gray-50 fixed top-0 left-0 h-screen w-0 z-20 border overflow-auto
            transition-all duration-300"
            ref={mobIpadSidebar}
          >
            {/* header  */}
            <div className="flex px-5 py-3.5 items-center space-x-2">
              <div className="flex space-x-2  items-center flex-1">
                <div>
                  <svg
                    className="w-6 h-6 text-gray-900"
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
                <Link to="/" className="text-lg font-semibold">
                  CarbonPay
                </Link>
              </div>
              <div className="flex space-x-2">
                {/* feed back  */}
                {/* <div className="">
                  <svg
                    className="w-5 h-5 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div> */}
                {/* notification icon  */}
                {/* <div>
                  <svg
                    className="w-5 h-5 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div> */}
                {/* question mark  */}
                {/* <div>
                  <svg
                    className="w-5 h-5 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div> */}
                {/* user  */}
                <div onClick={handleShown}>
                  <svg
                    className="w-5 h-5 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                {isShown && (
                  <div
                    className={`absolute solution-list top-12 right-2 bg-gray-100 text-secondary   rounded-md shadow-md cursor-pointer p-3 `}
                  >
                    <Link
                      to="/dashboard/userprofile"
                      className=" px-3 hover:bg-secondary hover:text-white py-2 rounded-md transition-all duration-300 ease-in-out flex items-center space-x-2"
                      onClick={toggleMobIpadSidebar}
                    >
                      <div>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span>Profile</span>
                    </Link>
                    <div
                      className=" px-3 hover:bg-secondary hover:text-white py-2 rounded-md transition-all duration-300 ease-in-out flex items-center space-x-2"
                      onClick={handleLogout}
                    >
                      <div>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </div>
                      <span>Logout</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* content part  */}
            <div className="flex flex-col  mt-5" onClick={toggleMobIpadSidebar}>
              {asideLists.map((list, index) => {
                return (
                  <Link
                    to={list.path}
                    key={index}
                    className="text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300  flex pl-8 pr-2 items-center space-x-4 py-2"
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
                          d={list.logo}
                        />
                      </svg>
                    </div>
                    <span> {list.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
