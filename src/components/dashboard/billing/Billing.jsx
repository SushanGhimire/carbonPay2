import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { baseUrl } from "../../authentication/authorization";
import axios from "axios";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CardField = ({ onChange }) => (
  <div className="flex flex-col mt-3">
    <label className="caption text-gray-700 mb-2">Card detail</label>
    <CardElement
      className="rounded border flex-1 appearance-none  border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none  focus:border-primary focus:border-transparent"
      onChange={onChange}
    />
  </div>
);
const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="flex flex-col mt-3">
    <label htmlFor={id} className="caption text-gray-700 mb-2">
      {label}
    </label>
    <input
      className="input-style"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);
const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className="bg-primary text-white mt-5 px-4 py-2 rounded-lg"
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);
const ErrorMessage = ({ children }) => (
  <div className="text-red-600" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);
const CheckoutForm = ({ getCardInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });
  let stop = "stop";
  const [clientSecret, setClientSecret] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe
      .confirmCardSetup(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: billingDetails,
        },
      })
      .then((res) => {
        alert("Payment method sucessfully added");
        // window.location.reload();
        getPaymentIntent();
        if (res.error) {
          setError(payload.error);
        }
        window.location.reload();
      });
    setProcessing(false);

    if (error) {
      elements.getElement("card").focus();
      return;
    }
  };
  function getPaymentIntent() {
    fetch(`${baseUrl}/transactions/create-setup-intent/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.client_secret);
      })
      .catch((err) => {
        setProcessing(false);
      });
  }
  useEffect(() => {
    getPaymentIntent();
  }, [stop]);
  return (
    <form
      className="Form w-full space-y-3 max-w-md bg-white shadow-lg rounded-md border border-gray-300 flex flex-col p-7 font-rubik mt-5"
      onSubmit={handleSubmit}
    >
      <fieldset className="FormGroup">
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder="janedoe@gmail.com"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, email: e.target.value });
          }}
        />
        <Field
          label="Name"
          id="name"
          type="text"
          placeholder="Jane Doe"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, name: e.target.value });
          }}
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          placeholder="(941) 555-0123"
          required
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, phone: e.target.value });
          }}
        />
      </fieldset>
      <fieldset className="FormGroup">
        <CardField
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
      </fieldset>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        Add Card
      </SubmitButton>
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51IJjYBIAj3oA61dKazU5ltxC1HBATIQZUbSBjrMCu9EXMbAs1x3PTq0uhkoD8mG75A15eScNJxJdmRRLn5Hlr5Ow00FYTBme4K"
);
function Billing() {
  const [isPayment, setIspayment] = useState(false);
  const handlePaymentToggle = () => {
    setIspayment(!isPayment);
  };
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isPaymentInfo, setIsPaymentInfo] = useState();
  const token = localStorage.getItem("access");
  function getCardInfo() {
    setLoading(true);
    axios
      .get(`${baseUrl}/transactions/card-info/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.data === "no card info") {
          setIsPaymentInfo("");
          setLoading(false);
        } else {
          setIsPaymentInfo(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!err.response) {
          localStorage.clear();
          window.location = "/";
        } else if (err.response.data.code === "token_not_valid") {
          localStorage.clear();
          window.location = "/";
        }
      });
  }
  const handleModalTogle = () => {
    setModal(!modal);
  };
  const deletePayment = () => {
    axios
      .delete(`${baseUrl}/transactions/remove-card-info/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setModal(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useState(() => {
    getCardInfo();
  }, []);
  return (
    <div className="flex p-5 md:p-10 flex-col  h-full relative">
      {modal && (
        <>
          <div className="w-full h-full absolute top-0 right-0 bg-black opacity-30 flex justify-center items-center z-10"></div>
          <div className="w-full h-full absolute top-0 right-0 z-20 flex justify-center items-center">
            <div className="bg-white rounded p-5 w-64 flex flex-col">
              <span> Are you surely want to delete your card information?</span>
              <div className="flex space-x-1 mt-2 justify-center">
                <button
                  className="bg-indigo-600 text-white px-3 py-2 rounded focus:outline-none animation hover:bg-indigo-700"
                  onClick={handleModalTogle}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-2 rounded focus:outline-none animation hover:bg-red-700"
                  onClick={deletePayment}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* top header  */}
      <div className="w-full flex flex-col justify-between  space-y-1 p-5 lg:px-0">
        <div className="text-3xl font-semibold">Billing</div>
      </div>
      {/* info table  */}
      {isPaymentInfo && (
        <>
          <div className="w-full hidden md:flex">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-3">Brand</th>
                  <th className="py-3">Name</th>
                  <th className="py-3">Exp Month</th>
                  <th className="py-3">Exp Year</th>
                  <th className="py-3">Card No</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center py-3 border-b">
                    {isPaymentInfo.brand}
                  </td>
                  <td className="text-center py-3 border-b">
                    {isPaymentInfo.name}
                  </td>
                  <td className="text-center py-3 border-b">
                    {isPaymentInfo.exp_month}
                  </td>
                  <td className="text-center py-3 border-b">
                    {isPaymentInfo.exp_year}
                  </td>
                  <td className="text-center py-3 border-b">
                    ************{isPaymentInfo.last4}
                  </td>
                  <td className="text-center py-3 border-b">
                    <button
                      className="bg-red-600 text-white px-3 py-2 rounded focus:outline-none animation hover:bg-red-700"
                      onClick={handleModalTogle}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex md:hidden flex-col bg-gray-50 shadow mt-2 py-2 rounded px-5 text-sm space-y-1">
            {/* Brand  */}
            <div className="flex space-x-4 items-center">
              <div className="w-24 text-xs font-semibold">BRAND</div>
              <div className=" flex space-x-4 items-center text-gray-600">
                {isPaymentInfo.brand}
              </div>
            </div>
            {/* Brand  */}
            <div className="flex space-x-4 items-center">
              <div className="w-24 text-xs font-semibold">NAME</div>
              <div className=" flex space-x-4 items-center text-gray-600">
                {isPaymentInfo.name}
              </div>
            </div>
            {/* EXP MONTH  */}
            <div className="flex space-x-4 items-center">
              <div className="w-24 text-xs font-semibold">EXP MONTH</div>
              <div className=" flex space-x-4 items-center text-gray-600">
                {isPaymentInfo.exp_month}
              </div>
            </div>
            {/* EXP_YEAR  */}
            <div className="flex space-x-4 items-center">
              <div className="w-24 text-xs font-semibold">EXP_YEAR</div>
              <div className=" flex space-x-4 items-center text-gray-600">
                {isPaymentInfo.exp_year}
              </div>
            </div>
            {/* CARD NO  */}
            <div className="flex space-x-4 items-center">
              <div className="w-24 text-xs font-semibold">CARD NO</div>
              <div className=" flex space-x-4 items-center text-gray-600">
                ************{isPaymentInfo.last4}
              </div>
            </div>
            {/* ACTION  */}
            <div className="flex space-x-4 items-center">
              <div className="w-24 text-xs font-semibold">ACTION</div>
              <div className=" flex space-x-4 items-center text-gray-600">
                <button
                  className="bg-red-600 text-white px-3 py-2 rounded focus:outline-none animation hover:bg-red-700"
                  onClick={handleModalTogle}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {!isPaymentInfo && loading && (
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {!isPaymentInfo && !loading && (
        <div>
          {isPayment ? (
            <button className="button-style" onClick={handlePaymentToggle}>
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
              <span>Close Payment</span>
            </button>
          ) : (
            <button className="button-style" onClick={handlePaymentToggle}>
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
              <span>Add Payment</span>
            </button>
          )}
        </div>
      )}
      {isPayment && (
        <Elements stripe={stripePromise}>
          <CheckoutForm getCardInfo={getCardInfo} />
        </Elements>
      )}
      {/* card form  */}
    </div>
  );
}

export default Billing;
