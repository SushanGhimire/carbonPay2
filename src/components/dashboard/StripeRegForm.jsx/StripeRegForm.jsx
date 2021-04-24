import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../authentication/authorization";
import process from "../../../assets/images/loading/progress.svg";
function StripeRegForm() {
  const token = localStorage.getItem("access");
  const [istrue, setIstrue] = useState(false);
  const [loading, setLoading] = useState(false);
  let result;
  const [merchant, setMerchant] = useState({
    business_type: "individual",
    first_name: "",
    last_name: "",
    business_name: "",
    dob_year: "",
    dob_month: "",
    dob_date: "",
    error: {
      first_name: "",
      last_name: "",
      dob_year: "",
      dob_month: "",
      dob_date: "",
    },
  });
  const handleCompany = (value) => {
    setMerchant({ ...merchant, business_type: value });
    if (value === "individual") {
      setIstrue(false);
    } else {
      setIstrue(true);
    }
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const {
      error,
      first_name,
      last_name,
      dob_date,
      dob_month,
      dob_year,
    } = merchant;
    // validation
    if (first_name === "") {
      error.first_name = "Enter first name";
    } else if (last_name === "") {
      error.last_name = "Enter last name";
    } else if (dob_year === "" || dob_year.length > 5) {
      error.dob_year = "Invalid birth year";
    } else if (dob_month === "" || dob_month.length > 2) {
      error.dob_month = "Invalid birth month";
    } else if (dob_date === "" || dob_date.length > 3) {
      error.dob_date = "Invalid birth date";
    } else {
      error.dob_date = "";
      setLoading(true);
      axios
        .post(`${baseUrl}/merchants/create-stripe-account/`, merchant, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          alert("Internal Server Error");
        });
    }
    setMerchant({ ...merchant, error });
  };
  const handleErrors = (property, value) => {
    const { error } = merchant;

    if (value.trim() === "") {
      error[property] = `${property[0].toUpperCase()}${property.slice(
        1,
        property.length
      )} cannot be left empty`;
      result = false;
    } else {
      // validation
      if (property === "first_name") {
        error.first_name = "";
        result = true;
      } else if (property === "last_name") {
        if (value === "") {
          error.last_name = "Enter last name";
          result = false;
        } else {
          error.last_name = "";
          result = true;
        }
      } else if (property === "dob_year") {
        if (value.length > 4 || value.length < 4) {
          error.dob_year = "Invalid birth year";
          result = false;
        } else {
          error.dob_year = "";
          result = true;
        }
      } else if (property === "dob_month") {
        if (value.length > 2) {
          error.dob_month = "Invalid birth month";
          result = false;
        } else {
          error.dob_year = "";
          result = true;
        }
      } else if (property === "dob_date") {
        if (value.length > 2) {
          error.dob_date = "Invalid birth date";
          result = false;
        } else {
          error.dob_date = "";
          result = true;
        }
      }
    }
    setMerchant({ ...merchant, error });
  };
  const handleChange = ({ target: { value } }, property) => {
    handleErrors(property, value);
    setMerchant({ ...merchant, [property]: value });
  };
  const {
    first_name,
    last_name,
    business_name,
    dob_date,
    dob_month,
    dob_year,
    business_type,
    error,
  } = merchant;

  const {
    first_name: efirst_name,
    last_name: elast_name,
    dob_date: edob_date,
    dob_month: edob_month,
    dob_year: edob_year,
  } = error;
  return (
    <div className=" w-full min-h-screen justify-center items-center bg-gray-100 font-rubik overflow-auto py-10 absolute top-0">
      <form
        className="w-full md:max-w-xl mx-auto bg-white p-10 shadow-md grid grid-cols-2 gap-6"
        onSubmit={handleLoginSubmit}
      >
        {/* header  */}
        <div className="text-2xl font-semibold mx-auto col-span-2">
          Merchant Form
        </div>
        {/* business type  */}
        <div className="space-y-1 flex flex-col relative col-span-2">
          <label htmlFor="text" className="text-sm text-gray-500">
            Business Type
          </label>
          <select
            className="appearance-none bg-white border text-gray-700 w-full px-3 py-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-sm"
            value={business_type}
            onChange={(e) => {
              handleCompany(e.target.value);
            }}
          >
            <option value="individual">Individual</option>
            <option value="company">Company</option>
          </select>
          <svg
            className="w-4 h-4  top-8 right-2 absolute text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {/* first name and last name  */}

        {/* first name  */}
        <div className=" flex flex-col col-span-1">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              First Name
            </label>
            <input
              type="text"
              value={first_name}
              id="first_name"
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "first_name")}
            />
          </div>
          {efirst_name && (
            <div className="error text-red-600">{efirst_name}</div>
          )}
        </div>
        {/* last name  */}
        <div className="space-y-1 flex flex-col col-span-1">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              Last Name
            </label>
            <input
              type="text"
              value={last_name}
              id="last_name"
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "last_name")}
            />
          </div>
          {elast_name && <div className="error text-red-600">{elast_name}</div>}
        </div>

        {/* business name and donation percentage  */}

        {/* business name  */}
        {istrue && (
          <div className="space-y-1 flex flex-col col-span-1">
            <label htmlFor="text" className="text-sm text-gray-500">
              Business Name
            </label>
            <input
              type="text"
              id="business_name"
              value={business_name}
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "business_name")}
            />
          </div>
        )}

        {/* date month year  */}
        {/* year  */}
        <div className="space-y-1 flex flex-col col-span-1">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              Birth Year
            </label>
            <input
              type="number"
              value={dob_year}
              id="dob_year"
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "dob_year")}
            />
          </div>
          {edob_year && <div className="error text-red-600">{edob_year}</div>}
        </div>
        {/* month  */}
        <div className="space-y-1 flex flex-col col-span-1">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              Birth Month
            </label>
            <input
              type="number"
              id="dob_month"
              value={dob_month}
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "dob_month")}
            />
          </div>
          {edob_month && <div className="error text-red-600">{edob_month}</div>}
        </div>
        {/* date  */}
        <div className="space-y-1 flex flex-col col-span-1">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              Birth Date
            </label>
            <input
              type="number"
              id="dob_date"
              value={dob_date}
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "dob_date")}
            />
          </div>
          {edob_date && <div className="error text-red-600">{edob_date}</div>}
        </div>
        <div className="col-span-2">
          <div className="button-animation" style={{ display: "block" }}>
            <button
              type="submit"
              className="animation-text text-center px-5 py-3 w-full"
            >
              {!loading ? (
                <span>Submit</span>
              ) : (
                <span>
                  <img
                    src={process}
                    className="animate-spin h-5 w-5 mx-auto"
                    alt=""
                  />
                </span>
              )}
            </button>
            <div className="animation-bg"></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StripeRegForm;
