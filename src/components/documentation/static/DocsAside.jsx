import { React, useState } from "react";
import { Link } from "react-router-dom";

function DocsAside() {
  const [State, setState] = useState(true);
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
          name: "Merchant select",
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
  ];
  return (
    <div className="bg-gray-50 w-64 border overflow-auto min-h-screen font-rubik pt-4">
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
                    onClick={() => setState(!State)}
                  >
                    <div
                      className={`flex  space-x-4 hover:bg-primary hover:text-white py-1 pl-3 rounded-full transition-all duration-300 ease-in-out `}
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
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DocsAside;
