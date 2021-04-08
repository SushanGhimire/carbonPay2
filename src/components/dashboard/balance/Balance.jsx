import React from "react";

function Balance() {
  return (
    <div className="w-full flex flex-col px-5 pt-5 pb-20">
      {/* add bank account  */}
      <div className="lg:flex space-y-3 lg:space-y-0 justify-between border border-gray-300 px-5 py-2 items-center rounded-md">
        {/* please add  */}
        <div className="flex space-x-2 items-center">
          {/* logo  */}
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
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className=" text-xs md:text-sm text-gray-600 mt-0.5 tracking-wide">
            Please add a USD denominated bank account to pay out your USD
            balance.
          </span>
        </div>
        {/* add bank acc  */}
        <div className="button-style text-sm w-56">
          {/* plus logo  */}
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <span>Add bank account</span>
        </div>
      </div>
      {/* balance  */}
      <div className="font-semibold text-3xl text-gray-900 px-5 mt-10 tracking-wide">
        Balances
      </div>
      {/* balance end  */}
      {/* balance  */}
      <div className="xl:flex w-full xl:space-x-10 px-5 ">
        {/* right side  */}
        <div className=" flex flex-1 flex-col">
          {/* usd balance div  */}
          <div>
            {/* usd and add balance  */}
            <div className="flex justify-between items border-b border-gray-300 mt-5 pb-2">
              <span className="text-lg text-gray-900 font-semibold">
                USD Balance
              </span>
              <div className="text-white bg-indigo-500 px-4 py-1 text-sm rounded shadow cursor-pointer">
                Add to balance
              </div>
            </div>
            {/* usd and add balance end */}
            {/* way and fund */}
            <div className="flex flex-col py-4 space-y-3 border-b border-gray-300 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>On the way to your bank</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Funds on hold</span>
                <span>$4567876.00</span>
              </div>
            </div>
            {/* way and fund end*/}
            {/* total amount  */}
            <div className="flex justify-between py-3 text-gray-800 text-sm font-semibold">
              <span>Total</span>
              <span>$4567876.00</span>
            </div>
            {/* total amount end  */}
          </div>
          {/* usd balance div end */}

          {/* On the way to your bank div */}
          <div>
            {/* usd and add balance  */}
            <div className="md:flex space-y-3 md:space-y-0 justify-between items-center border-b border-gray-300 mt-5 pb-2">
              <div className="flex flex-col">
                <span className="text-lg text-gray-900 font-semibold">
                  On the way to your bank
                </span>
                <span className="text-sm text-gray-600">
                  These funds should arrive in your bank account soon.
                </span>
              </div>
              <div className="text-white bg-indigo-500 px-4 py-1 text-sm rounded shadow w-36 cursor-pointer">
                Payout settings
              </div>
            </div>
            {/* total amount  */}
            <div className="flex justify-between py-3 text-gray-800 text-sm font-semibold">
              <span>Total</span>
              <span>$0.00</span>
            </div>
            {/* total amount end  */}

            {/* usd and add balance end */}
          </div>
          {/* On the way to your bank div end  */}
          {/* Funds on hold */}
          <div>
            <div className="md:flex space-y-3 md:space-y-0 justify-between items-center border-b border-gray-300 mt-5 pb-2">
              <div className="flex flex-col">
                <span className="text-lg text-gray-900 font-semibold">
                  Funds on hold
                </span>
                <span className="text-sm text-gray-600">
                  These funds will start being paid out again once you have
                  resolved the issue with your bank account above.
                </span>
              </div>
            </div>
            {/* Payments and refund */}
            <div className="flex flex-col py-4 space-y-3 border-b border-gray-300 text-sm text-gray-600">
              <span className="text-indigo-600 font-semibold">
                Accumulated funds on hold
              </span>
              <div className="flex justify-between">
                <span>350 payments</span>
                <span>$3457.00</span>
              </div>
              <div className="flex justify-between">
                <span>21 refunds</span>
                <span>-$456.00</span>
              </div>
              <div className="flex justify-between text-gray-700 text-sm font-semibold">
                <span>Total transation</span>
                <span>$87656.00</span>
              </div>
            </div>
            {/* Payments and refund end*/}
            {/* total amount */}
            <div className="flex py-3 justify-between text-gray-700 text-sm font-semibold">
              <span>Total</span>
              <span>$87656.00</span>
            </div>
            {/* total amount end  */}
          </div>
          {/* Funds on hold end */}
        </div>
        {/* right end  */}
        {/* left side  */}
        <div className="flex xl:w-96 flex-col">
          <div className="mt-3 text-sm tracking-wide font-semibold border-b border-gray-300 py-3">
            HELPFUL REPORTS
          </div>
          {/* balance  */}
          <div className="flex flex-col space-y-1 border-b border-gray-300 py-4 text-sm text-gray-600">
            <span className="text-indigo-500 font-semibold tracking-wide">
              Balance
            </span>
            <span>
              Reconcile your Stripe balance and download your categorized
              transaction history.
            </span>
          </div>
          {/* balance end */}
          {/* Payout reconciliation  */}
          <div className="flex flex-col space-y-1 border-b border-gray-300 py-4 text-sm text-gray-600">
            <span className="text-indigo-500 font-semibold tracking-wide">
              Payout reconciliation
            </span>
            <span>
              Transactions that have settled to your bank account including a
              categorized breakdown for each payout.
            </span>
          </div>
          {/* Payout reconciliation end */}
        </div>
        {/* left end */}
      </div>
    </div>
  );
}

export default Balance;
