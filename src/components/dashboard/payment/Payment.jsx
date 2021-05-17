import { React, useState, useEffect } from "react";
import TransactionDetail from "./TransactionDetail";
import { baseUrl } from "../../authentication/authorization";
import axios from "axios";
function Payment() {
  const [paymentSubLists, setPaymentSubLists] = useState([
    { isTrue: true, name: "All" },
    { isTrue: false, name: "Paid" },
    { isTrue: false, name: "Unpaid" },
    // { isTrue: false, name: "Date" },
  ]);
  const subTitle = [
    { isTrue: false, name: "All" },
    { isTrue: false, name: "Paid" },
    { isTrue: false, name: "Unpaid" },
    // { isTrue: false, name: "Date" },
  ];

  const [width, setWidth] = useState(window.innerWidth);
  const [transactionDetail, setTransactionDetail] = useState(false);
  const [Transactions, setTransactions] = useState([]);
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
  useEffect(() => {
    handleTransactionData("All", 0);
    // eslint-disable-next-line
  }, []);
  const showTransactionDetail = (id) => {
    setTransactionDetail(!transactionDetail);
  };
  const token = localStorage.getItem("access");
  const handleTransactionData = (name, index) => {
    if (name === "All") {
      subTitle[index].isTrue = true;
      setPaymentSubLists(subTitle);
      axios
        .get(`${baseUrl}/transactions/get-user-all-transactions/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setTransactions(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (name === "Paid") {
      subTitle[index].isTrue = true;
      setPaymentSubLists(subTitle);
      axios
        .get(`${baseUrl}/transactions/get-user-paid-transactions/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setTransactions(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (name === "Unpaid") {
      subTitle[index].isTrue = true;
      setPaymentSubLists(subTitle);
      axios
        .get(`${baseUrl}/transactions/get-user-unpaid-transactions/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setTransactions(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // else if (name === "Date") {
    //   subTitle[index].isTrue = true;
    //   setPaymentSubLists(subTitle);
    // }
  };
  return (
    <div className="flex md:p-10 flex-col relative h-full">
      {transactionDetail && (
        <TransactionDetail showTransactionDetail={showTransactionDetail} />
      )}
      {/* top header  */}
      <div className="w-full md:flex justify-between items-center space-y-3 md:space-y-0 p-5 lg:px-0">
        <div className="text-3xl font-semibold">Transactions</div>
        <div className="">
          <button className="button-style">
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
            <span>Carbon Donation</span>
          </button>
        </div>
      </div>
      {/* sub header  */}
      <div className="flex text-gray-500  font-medium text-sm border-b px-5 lg:px-0">
        {paymentSubLists.map((list, index) => {
          const { name, isTrue } = list;
          return (
            <div
              key={index}
              className={`transition-all duration-300 ease-in-out cursor-pointer border-b border-white py-2 px-3 hover:bg-indigo-500 hover:text-white font-semibold 
              ${isTrue ? "bg-indigo-500 text-white" : ""}`}
              onClick={() => handleTransactionData(name, index)}
            >
              {name}
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
                <th className="text-left border-b py-2">CUSTOMER</th>
                <th className="text-left border-b py-2 pl-2">INITIAL AMOUNT</th>
                <th className="text-left border-b py-2 pl-2">
                  INCREASED AMOUNT
                </th>
                <th className="text-left border-b py-2 pl-2">TOTAL AMOUNT</th>
                <th className="text-left border-b py-2">DATE</th>
                <th className="text-left border-b py-2">CARBONPAY</th>
              </tr>
            </thead>
            <tbody>
              {Transactions.map((pay, index) => {
                const {
                  carbon_pay,
                  customer_name,
                  increased_price,
                  initial_price,
                  paid,
                  timestamp,
                  total_price,
                } = pay;
                return (
                  <tr
                    className="cursor-pointer hover:bg-gray-100 text-xs lg:text-sm text-gray-600  border-b transition-all duration-300"
                    key={index}
                    onClick={() => showTransactionDetail(pay.id)}
                  >
                    <td className="py-2">{customer_name}</td>
                    <td className="py-2">${initial_price}</td>
                    <td className="py-2">${increased_price}</td>
                    <td className=" flex space-x-4 py-2 items-center pl-2">
                      <span className="font-semibold text-gray-800">
                        ${total_price}
                      </span>
                      {paid && (
                        <span className="bg-green-300 rounded px-2 lg:py-0.5 text-xs">
                          Paid
                        </span>
                      )}
                      {!paid && (
                        <span className="bg-red-400 rounded px-2 lg:py-0.5 text-xs">
                          Unpaid
                        </span>
                      )}
                    </td>
                    <td className="py-2">{timestamp}</td>
                    <td className="py-2">
                      <svg
                        className={`w-6 h-6 ${
                          carbon_pay ? " text-green-500" : " text-red-600"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    {/* <td className="py-2 flex space-x-2 items-center">
                      
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
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {width < 768 && (
        <div className="w-full flex flex-col ">
          {Transactions.map((pay, index) => {
            const {
              carbon_pay,
              customer_name,
              increased_price,
              initial_price,
              paid,
              timestamp,
              total_price,
            } = pay;
            return (
              <div
                className="flex flex-col bg-gray-50 shadow mt-2 py-2 rounded px-5 text-sm space-y-1"
                key={index}
              >
                {/* Customer  */}
                <div className="flex space-x-4 items-center">
                  <div className="w-24 text-xs font-semibold">CUSTOMER</div>
                  <div className=" flex space-x-4 items-center text-gray-600">
                    {customer_name}
                  </div>
                </div>
                {/* initial amount  */}
                <div className="flex space-x-4 items-center">
                  <div className="w-24 text-xs font-semibold">
                    INITIAL AMOUNT
                  </div>
                  <div className=" flex space-x-4 items-center text-gray-600">
                    ${initial_price}
                  </div>
                </div>
                {/* increased amount  */}
                <div className="flex space-x-4 items-center">
                  <div className="w-24 text-xs font-semibold">
                    INCREASED AMOUNT
                  </div>
                  <div className=" flex space-x-4 items-center text-gray-600">
                    ${increased_price}
                  </div>
                </div>
                {/*totlal amount  */}
                <div className="flex space-x-4 items-center">
                  <div className="w-24 text-xs font-semibold">TOTAL AMOUNT</div>
                  <div className=" flex space-x-4 items-center">
                    <span className="font-semibold text-gray-800">
                      ${total_price}
                    </span>
                    {paid && (
                      <span className="bg-green-300 rounded px-2 lg:py-0.5 text-xs">
                        Paid
                      </span>
                    )}
                    {!paid && (
                      <span className="bg-red-400 rounded px-2 lg:py-0.5 text-xs">
                        Unpaid
                      </span>
                    )}
                  </div>
                </div>
                {/* DATE  */}
                <div className="flex space-x-4 items-center">
                  <div className="w-24 text-xs font-semibold">DATE</div>
                  <div className=" flex space-x-4 items-center text-gray-600">
                    {timestamp}
                  </div>
                </div>
                {/* Carbonpay  */}
                <div className="flex space-x-4 items-center">
                  <div className="w-24 text-xs font-semibold">CARBONPAY</div>
                  <div className=" flex space-x-4 items-center text-gray-600">
                    <svg
                      className={`w-6 h-6 ${
                        carbon_pay ? " text-green-500" : " text-red-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Action  */}
                {/* <div className="flex space-x-4 items-center">
                  <div className="w-24 text-xs font-semibold">Action</div>
                  <div className=" flex space-x-4 items-center  text-gray-600">
                    return 
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
                    message 
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
                </div> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Payment;
