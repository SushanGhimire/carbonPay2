import { React, useState, useEffect } from "react";
import NavBar from "../Static/NavBar";
import Aside from "../Static/Aside";

function Payment() {
  const paymentSubLists = ["Succeeded", "Refunded", "Uncaptured", "All"];
  const [width, setWidth] = useState(window.innerWidth);
  const Transations = [
    {
      amount: "$100.00",
      sucess: true,
      dis: "Subscription Updated",
      customer: "sushan@sushan.com",
      date: "10Aug 12:00 AM",
    },
    {
      amount: "$80.00",
      sucess: false,
      dis: "Subscription Updated",
      customer: "sushan@sushan.com",
      date: "11Sep 3:00 AM",
    },
  ];
  // if user is using screen width of laptop and changes to lower than 1023px width, call the function
  // if user is using screen width of ipad or mobile and changes to higher than 1024px width, call the function
  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 767 && width < 768) {
      setWidth(innerWidth);
    } else if (innerWidth < 768 && width > 767) {
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
    <div className="bg-white h-screen flex font-rubik">
      <Aside />
      <div className="flex-1 flex flex-col overflow-auto">
        <NavBar />
        <div className="flex md:p-10 flex-col">
          {/* top header  */}
          <div className="w-full md:flex justify-between items-center space-y-3 md:space-y-0 p-5 lg:px-0">
            <div className="text-3xl font-semibold">Payments</div>
            <div className="">
              <div className="button-style">
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
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span>Create Payment</span>
              </div>
            </div>
          </div>
          {/* sub header  */}
          <div className="flex space-x-4 text-gray-500  font-medium text-sm border-b px-5 lg:px-0">
            {paymentSubLists.map((list, index) => {
              return (
                <div
                  key={index}
                  className="hover:text-indigo-500 transition-all duration-300 ease-in-out cursor-pointer border-b border-white hover:border-indigo-400 py-2"
                >
                  {list}
                </div>
              );
            })}
          </div>
          {/* table  */}
          {/* for labtop  */}
          {width > 767 && (
            <div className="w-full flex mt-4">
              <table className="table-auto w-full">
                <thead className="">
                  <tr className="font-semibold text-gray-700 text-xs ">
                    <th className="text-left border-b py-2 pl-2">AMOUNT</th>
                    <th className="text-left border-b py-2">DESCRIPTION</th>
                    <th className="text-left border-b py-2">CUSTOMER</th>
                    <th className="text-left border-b py-2">DATE</th>
                    <th className="text-left border-b py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Transations.map((pay, index) => {
                    return (
                      <tr
                        className="cursor-pointer hover:bg-gray-100 text-xs lg:text-sm text-gray-600  border-b transition-all duration-300"
                        key={index}
                      >
                        <td className=" flex space-x-4 py-2 items-center pl-2">
                          <span className="font-semibold text-gray-800">
                            {pay.amount}
                          </span>

                          <span className="text-gray-500">USD</span>
                          {pay.sucess === true && (
                            <span className="bg-green-300 rounded px-2 lg:py-0.5 text-xs">
                              Succeeded
                            </span>
                          )}
                          {pay.sucess === false && (
                            <span className="bg-blue-300 rounded px-2 lg:py-0.5 text-xs">
                              Refunded
                            </span>
                          )}
                        </td>
                        <td className="py-2">Subscription Updated</td>
                        <td className="py-2">Carbonpay@carbonpay.com</td>
                        <td className="py-2">Jun 30, 3:21 PM</td>
                        <td className="py-2 flex space-x-2 items-center">
                          {/* return  */}
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
                                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                              />
                            </svg>
                          </div>
                          {/* message  */}
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
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {width < 768 && (
            <div className="w-full flex flex-col ">
              {Transations.map((pay, index) => {
                return (
                  <div
                    className="flex flex-col bg-gray-50 shadow mt-2 py-2 rounded px-5 text-sm space-y-1"
                    key={index}
                  >
                    {/* amount  */}
                    <div className="flex space-x-4 items-center">
                      <div className="w-24 text-xs font-semibold">AMOUNT</div>
                      <div className=" flex space-x-4 items-center">
                        <span className="font-semibold text-gray-800">
                          {pay.amount}
                        </span>
                        <span className="text-gray-500">USD</span>
                        {pay.sucess === true && (
                          <span className="bg-green-300 rounded px-2 lg:py-0.5 text-xs">
                            Succeeded
                          </span>
                        )}
                        {pay.sucess === false && (
                          <span className="bg-blue-300 rounded px-2 lg:py-0.5 text-xs">
                            Refunded
                          </span>
                        )}
                      </div>
                    </div>
                    {/* discription  */}
                    <div className="flex space-x-4 items-center">
                      <div className="w-24 text-xs font-semibold">
                        DISCRIPTION
                      </div>
                      <div className=" flex space-x-4 items-center text-gray-600">
                        {pay.dis}
                      </div>
                    </div>
                    {/* Customer  */}
                    <div className="flex space-x-4 items-center">
                      <div className="w-24 text-xs font-semibold">CUSTOMER</div>
                      <div className=" flex space-x-4 items-center text-gray-600">
                        {pay.customer}
                      </div>
                    </div>
                    {/* DATE  */}
                    <div className="flex space-x-4 items-center">
                      <div className="w-24 text-xs font-semibold">DATE</div>
                      <div className=" flex space-x-4 items-center text-gray-600">
                        {pay.date}
                      </div>
                    </div>
                    {/* Action  */}
                    <div className="flex space-x-4 items-center">
                      <div className="w-24 text-xs font-semibold">Action</div>
                      <div className=" flex space-x-4 items-center  text-gray-600">
                        {/* return  */}
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
                              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                            />
                          </svg>
                        </div>
                        {/* message  */}
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
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
