import React, { useState, useEffect } from "react";
import { baseUrl } from "../../authentication/authorization";
import axios from "axios";
function Billing() {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
    error: {
      number: "",
      exp_month: "",
      exp_year: "",
      cvc: "",
    },
  });
  const [cardError, setCardError] = useState("");
  const [isPayment, setIsPayment] = useState(false);
  const token = localStorage.getItem("access");
  const handleCardInfo = (e) => {
    e.preventDefault();
    const { number, exp_month, exp_year, cvc, error } = cardInfo;
    // validation
    if (number === "") {
      error.number = "Number cannot be left empty.";
    } else if (exp_month === "") {
      error.exp_month = "Month cannot be left empty.";
    } else if (exp_year === "") {
      error.exp_year = "Year cannot be left empty.";
    } else if (cvc === "") {
      error.cvc = "CVC/CVV cannot be left empty.";
    } else {
      error.cvc = "";
      const formData = new FormData();
      formData.append("number", number);
      formData.append("exp_month", exp_month);
      formData.append("exp_year", exp_year);
      formData.append("cvc", cvc);
      axios
        .post(`${baseUrl}/transactions/save-cardinfo/`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": `application/json`,
          },
        })
        .then(() => {
          setCardInfo({
            number: "",
            exp_month: "",
            exp_year: "",
            cvc: "",
            error: {
              number: "",
              exp_month: "",
              exp_year: "",
              cvc: "",
            },
          });
          paymentCheck();
        })
        .catch((err) => {
          setCardError(err.response.data.error);
          if (!err.response) {
            localStorage.clear();
            window.location = "/";
          } else if (err.response.data.code === "token_not_valid") {
            localStorage.clear();
            window.location = "/";
          }
        });
    }
    setCardInfo({ ...cardInfo, error });
  };
  const handleChange = ({ target: { value } }, property) => {
    handleError(property, value);
    setCardInfo({ ...cardInfo, [property]: value });
  };
  const handleError = (property, value) => {
    const { error } = cardInfo;
    setCardError("");
    if (value.trim() === "") {
      // error[property] = `cannot be left empty`;
      return true;
    } else {
      // validation
      if (property === "number") {
        if (value === "") {
          error.number = "Number cannot be left empty.";
        } else {
          error.number = "";
        }
      } else if (property === "exp_month") {
        if (value.length < 2 || value.length > 2) {
          error.exp_month = "Invalid mongth length. Length must be 2";
        } else {
          error.exp_month = "";
        }
      } else if (property === "exp_year") {
        if (value.length < 4 || value.length > 4) {
          error.exp_year = "Invalid year length. Length must me 4";
        } else {
          error.exp_year = "";
        }
      } else if (property === "cvc") {
        if (value.length > 4) {
          error.cvc = "Invalid CVC/CVV length.";
        } else {
          error.cvc = "";
        }
      }
    }
    setCardInfo({ ...cardInfo, error });
  };
  function paymentCheck() {
    axios
      .get(`${baseUrl}/transactions/save-cardinfo/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        if (res.data.card_info_available === "true") {
          setIsPayment(true);
        } else {
          setIsPayment(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    paymentCheck();
    // eslint-disable-next-line
  }, []);
  const { number, exp_month, exp_year, cvc, error } = cardInfo;
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
      {!isPayment && (
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
                type="number"
                name="number"
                value={number}
                className="border border-gray-300 px-6 text-lg py-2 rounded-md w-full text-gray-600"
                onChange={(e) => handleChange(e, "number")}
              />
            </div>
            {error.number && (
              <div className="error text-red-600">{error.number}</div>
            )}
          </div>
          {/* card name and expiry date  */}
          <div className="md:flex w-full md:space-x-6 space-y-2 md:space-y-0">
            {/* Expiration */}
            <div className="flex-1 flex flex-col font-rubik space-y-2">
              <label htmlFor="">Expiration Date</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  className="border flex-1 text-gray-600 border-gray-300 px-6 py-2 rounded-md w-28 placeholder-gray-600"
                  placeholder="MM"
                  name="exp_month"
                  value={exp_month}
                  onChange={(e) => handleChange(e, "exp_month")}
                />
                <input
                  type="number"
                  className="border flex-1 text-gray-600 border-gray-300 px-6 py-2 rounded-md w-28 placeholder-gray-600"
                  placeholder="YY"
                  name="exp_year"
                  value={exp_year}
                  onChange={(e) => handleChange(e, "exp_year")}
                />
              </div>
              {error.exp_month && (
                <div className="error text-red-600">{error.exp_month}</div>
              )}
              {error.exp_year && (
                <div className="error text-red-600">{error.exp_year}</div>
              )}
            </div>
            {/* CVC/CVV  */}
            <div className="flex w-56 flex-col font-rubik space-y-2">
              <label htmlFor="">CVC/CVV</label>
              <div>
                <input
                  type="number"
                  className="border text-gray-600 border-gray-300 px-6 py-2 rounded-md w-28 placeholder-gray-700"
                  placeholder="XXX"
                  name="cvc"
                  value={cvc}
                  onChange={(e) => handleChange(e, "cvc")}
                />
              </div>
              {error.cvc && (
                <div className="error text-red-600">{error.cvc}</div>
              )}
            </div>
          </div>
          {cardError && <div className="error text-red-600">{cardError}</div>}
          <div className="flex mx-auto">
            <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-full ">
              Add Your Card
            </button>
          </div>
        </form>
      )}
      {isPayment && (
        <div>
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
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span>Remove Payment</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Billing;
