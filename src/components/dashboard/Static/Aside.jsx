import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Aside() {
  const [width, setWidth] = useState(window.innerWidth);
  const asideLists = [
    {
      name: "Home",
      logo:
        "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      path: "/dashboard",
    },
    {
      name: "Payments",
      logo:
        "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      path: "/dashboard/payments",
      sublists: [
        { name: "Reviwes", path: "/reviews" },
        { name: "Payouts", path: "/payouts" },
        { name: "All Transations", path: "/allTransactions" },
      ],
    },
    {
      name: "Balances",
      logo:
        "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      path: "/dashboard/balances",
    },
    {
      name: "Customers",
      logo:
        "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      path: "/dashboard/customers",
      sublists: [
        { name: "Subscriptions", path: "/subscriptions" },
        { name: "Invoices", path: "/invoices" },
      ],
    },
    {
      name: "Products",
      logo: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
      path: "/dashboard/products",
      sublists: [
        { name: "Coupons", path: "/coupons" },
        { name: "Shipping rates", path: "/shippingrates" },
        { name: "Tax rates", path: "/taxrates" },
      ],
    },
    {
      name: "Developers",
      logo:
        "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      path: "/dashboard/developers",
      sublists: [
        { name: "API Keys", path: "/APIKeys" },
        { name: "Webhooks", path: "/Webhooks" },
        { name: "Events", path: "/Events" },
        { name: "Logs", path: "/logs" },
      ],
    },
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
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });
  return (
    <>
      {/* for laptops */}
      {width > 1023 && (
        <div className="bg-gray-50 w-68 border overflow-auto">
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
            <div className="text-xl font-semibold">CarbonPay</div>
          </div>
          {/* content part  */}
          <div className="flex flex-col  mt-5">
            {asideLists.map((list, index) => {
              return (
                <Link
                  to={list.path}
                  key={index}
                  className="text-gray-600 flex pl-8 pr-2 space-x-4 py-2"
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
      )}
    </>
  );
}

export default Aside;
