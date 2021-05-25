import React from "react";

function TransactionDetail({
  showTransactionDetail,
  transactionDetailInformation,
}) {
  const {
    carbon_pay,
    customer_name,
    increased_price,
    initial_price,
    // paid,
    timestamp,
    total_price,
    cart_detail,
  } = transactionDetailInformation;
  return (
    <div className="w-full h-full absolute top-0 left-0 font-rubik overflow-auto">
      <div className="w-full h-full relative flex justify-center items-center ">
        <div
          className="w-full h-full absolute top-0 left-0 opacity-70 z-0"
          onClick={showTransactionDetail}
        ></div>
        <div className="w-full max-w-lg mx-auto bg-white z-20 font-semibold  flex flex-col rounded-md overflow-hidden shadow-md border border-gray-300">
          {/* header  */}
          <div className="bg-gray-200 py-3 flex justify-between px-7 items-center">
            <span className=" text-lg md:text-xl">Transaction Details</span>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded-md text-xs md:text-sm"
              onClick={showTransactionDetail}
            >
              close
            </button>
          </div>
          {/* customer and cart  */}
          <div className="grid grid-cols-1 md:grid-cols-3 px-7  mt-5">
            {/* customer details  */}
            <div className="flex col-span-1 md:col-span-2 flex-col ">
              {/* customer detail header  */}
              <div className="font-semibold text-lg mb-2 text-primary">
                Customer Detail
              </div>
              {/* Customer  */}
              <div className="flex  items-center">
                <div className="font-semibold text-sm w-40 ">Customer Name</div>
                <div className="  text-gray-600 text-sm ">{customer_name}</div>
              </div>
              {/* Date  */}
              <div className="flex  items-center">
                <div className="font-semibold text-sm w-40">
                  Transaction Date
                </div>
                <div className="   text-gray-600 text-sm">{timestamp}</div>
              </div>
              {/* Carbonpay  */}
              <div className="flex items-center">
                <div className="font-semibold text-sm w-40">Carbonpay </div>
                <div className="  text-gray-600 text-sm">
                  {" "}
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
            </div>
            {/* Amount details  */}
            <div className="flex col-span-1 flex-col ">
              {/* Amount detail header  */}
              <div className="font-semibold text-lg mb-2 text-primary">
                Amount Detail
              </div>
              {/* initial  */}
              <div className="flex  items-center">
                <div className="font-semibold text-sm w-28 ">Initial</div>
                <div className="  text-gray-600 text-sm ">${initial_price}</div>
              </div>
              {/* increased  */}
              <div className="flex  items-center">
                <div className="font-semibold text-sm w-28">Increased</div>
                <div className="   text-gray-600 text-sm">
                  ${increased_price}
                </div>
              </div>
              {/* total  */}
              <div className="flex  items-center">
                <div className="font-semibold text-sm w-28"> Total </div>
                <div className="   text-gray-600 text-sm">${total_price}</div>
              </div>
            </div>
          </div>
          {/* amount detail table */}
          <div className="flex mt-4 px-7 flex-col  mb-10">
            {/* cart detail header  */}
            <div className="font-semibold text-lg mb-2 text-primary">
              Cart Detail
            </div>
            <table className="table-auto w-full border">
              <thead className="bg-gray-200">
                <tr className="font-semibold text-gray-700 text-xs ">
                  <th className="text-left border-b py-2 pl-2">PRODUCT NAME</th>
                  <th className="text-left border-b py-2 pl-2">
                    PRODUCT QUANTITY
                  </th>
                  <th className="text-left border-b py-2 pl-2">
                    PRODUCT PRICE
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(cart_detail) &&
                  cart_detail.map((cart, index) => {
                    const { product_name, product_quantity, product_price } =
                      cart;
                    return (
                      <tr
                        className="cursor-pointer hover:bg-gray-100 text-xs lg:text-sm text-gray-600  border-b transition-all duration-300"
                        key={index}
                      >
                        <td className="py-2 text-center">{product_name}</td>
                        <td className="py-2 text-center">
                          ${product_quantity}
                        </td>
                        <td className=" flex space-x-4 py-2 items-center pl-2">
                          <span className="font-semibold text-gray-800">
                            ${product_price}
                          </span>
                          {/* {paid && (
                      <span className="bg-green-300 rounded px-2 lg:py-0.5 text-xs">
                        Paid
                      </span>
                    )}
                    {!paid && (
                      <span className="bg-red-400 rounded px-2 lg:py-0.5 text-xs">
                        Unpaid
                      </span>
                    )} */}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetail;
