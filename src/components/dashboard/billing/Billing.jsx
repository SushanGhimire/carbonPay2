import React, { useState } from "react";

function Billing() {
  const [cardInfo, setCardInfo] = useState({
    card_number: "",
    card_name: "",
    exp_month: "",
    exp_year: "",
    cvccvv: "",
  });
  const handleCardInfo = (e) => {
    e.preventDefault();
  };
  const handleChange = ({ target: { value } }, property) => {
    // handleError(property, value);
    setCardInfo({ ...cardInfo, [property]: value });
  };
  const { card_name, card_number, exp_month, exp_year, cvccvv } = cardInfo;
  return (
    <div className="flex p-5 md:p-10 flex-col">
      {/* top header  */}
      <div className="w-full flex flex-col justify-between  space-y-1 p-5 lg:px-0">
        <div className="text-3xl font-semibold">Billing</div>
        <div className="text-lg font-semibold text-gray-700">
          View and update your credit card information
        </div>
      </div>
      {/* card form  */}
      <form
        action=""
        className="w-full space-y-3 max-w-2xl bg-gray-100 rounded-md border border-gray-300 flex flex-col px-5 py-7 font-rubik"
        onClick={handleCardInfo}
      >
        {/* card number  */}
        <div className="flex flex-col  space-y-2">
          <label htmlFor="">Card Number</label>
          <div>
            <input
              type="text"
              name="card_number"
              value={card_number}
              className="border border-gray-300 px-6 py-2 rounded-md w-full"
              onChange={(e) => handleChange(e, "card_number")}
            />
          </div>
        </div>
        {/* card name and expiry date  */}
        <div className="md:flex w-full md:space-x-6 space-y-2 md:space-y-0">
          {/* card name  */}
          <div className="flex flex-1 flex-col font-rubik space-y-2">
            <label htmlFor="">Name on Number</label>
            <div>
              <input
                type="text"
                className="border border-gray-300 px-6 py-2 rounded-md w-full"
                name="card_name"
                value={card_name}
                onChange={(e) => handleChange(e, "card_name")}
              />
            </div>
          </div>
          {/* Expiration */}
          <div className="flex flex-col font-rubik space-y-2">
            <label htmlFor="">Expiration Date</label>
            <div className="flex space-x-2">
              <input
                type="text"
                className="border border-gray-300 px-6 py-2 rounded-md w-28 placeholder-gray-600"
                placeholder="MM"
                name="exp_month"
                value={exp_month}
                onChange={(e) => handleChange(e, "exp_month")}
              />
              <input
                type="text"
                className="border border-gray-300 px-6 py-2 rounded-md w-28 placeholder-gray-600"
                placeholder="YY"
                name="exp_year"
                value={exp_year}
                onChange={(e) => handleChange(e, "exp_year")}
              />
            </div>
          </div>
        </div>
        {/* CVC/CVV  */}
        <div className="flex flex-col font-rubik space-y-2">
          <label htmlFor="">CVC/CVV</label>
          <div>
            <input
              type="text"
              className="border border-gray-300 px-6 py-2 rounded-md w-28 placeholder-gray-700"
              placeholder="XXX"
              name="cvccvv"
              value={cvccvv}
              onChange={(e) => handleChange(e, "cvccvv")}
            />
          </div>
        </div>
        <div className="flex mx-auto">
          <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-full ">
            Add Your Card
          </button>
        </div>
      </form>
      {/* add stripe account  */}
      <div className="flex  mt-10">
        <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-full flex space-x-2 items-center group">
          <span>Add Stripe Account</span>
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Billing;
