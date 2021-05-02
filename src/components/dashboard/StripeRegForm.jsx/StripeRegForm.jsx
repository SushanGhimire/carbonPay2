import React, { useState } from "react";
// import axios from "axios";
// import { baseUrl } from "../../authentication/authorization";
import process from "../../../assets/images/loading/progress.svg";
import info from "../../../assets/images/loading/info.svg";
import aspiration from "../../../assets/images/homepage/aspiration.svg";
function StripeRegForm({ submitMerchatForm, loading }) {
  const [istrue, setIstrue] = useState(false);

  // let result;
  const [Tooltips, setTooltips] = useState(false);
  const [merchant, setMerchant] = useState({
    business_type: "individual",
    first_name: "",
    last_name: "",
    business_name: "",
    dob_year: "",
    dob_month: "",
    dob_date: "",
    donation: "0",
    error: {
      first_name: "",
      last_name: "",
      dob_year: "",
      dob_month: "",
      dob_date: "",
    },
  });
  const handleTooltips = () => {
    Tooltips ? setTooltips(false) : setTooltips(true);
  };
  const handleCompany = (value) => {
    setMerchant({ ...merchant, business_type: value });
    if (value === "individual") {
      // setMerchant({ ...merchant, business_name: "" });
      setIstrue(false);
    } else {
      setIstrue(true);
    }
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const {
      error,
      business_type,
      business_name,
      first_name,
      last_name,
      dob_date,
      dob_month,
      dob_year,
      donation,
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

      const formData = new FormData();
      formData.append("business_type", business_type);
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("dob_year", dob_year);
      formData.append("dob_month", dob_month);
      formData.append("dob_date", dob_date);
      formData.append("donation", donation);
      if (business_type === "company") {
        formData.append("business_name", business_name);
      } else {
        formData.append("business_name", "");
      }

      console.log(merchant);
      submitMerchatForm(formData);
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
      // result = false;
    } else {
      // validation
      if (property === "first_name") {
        error.first_name = "";
        // // result = true;
      } else if (property === "last_name") {
        if (value === "") {
          error.last_name = "Enter last name";
          // result = false;
        } else {
          error.last_name = "";
          // result = true;
        }
      } else if (property === "dob_year") {
        if (value.length > 4 || value.length < 4) {
          error.dob_year = "Invalid birth year";
          // result = false;
        } else {
          error.dob_year = "";
          // result = true;
        }
      } else if (property === "dob_month") {
        if (value.length > 2) {
          error.dob_month = "Invalid birth month";
          // result = false;
        } else {
          error.dob_year = "";
          // result = true;
        }
      } else if (property === "dob_date") {
        if (value.length > 2) {
          error.dob_date = "Invalid birth date";
          // result = false;
        } else {
          error.dob_date = "";
          // result = true;
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
    donation,
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
    <div className=" w-full min-h-screen justify-center items-center  font-rubik overflow-auto py-10 absolute top-0">
      <form
        className="w-full md:max-w-xl mx-auto border p-10 border-gray-300 grid grid-cols-2 gap-6"
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
        {/* donation  */}
        <div className="space-y-1 flex flex-col col-span-1 relative">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              Donation in %
            </label>
            <select
              className="appearance-none bg-white border text-gray-700 w-full px-3 py-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-sm"
              id="donation"
              value={donation}
              onChange={(event) => handleChange(event, "donation")}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
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
          <div className="mx-auto col-span-2 font-semibold  text-xs text-gray-600 flex space-x-1 items-center">
            <div>Powered by</div>
            <a
              href="https://aspiration.com/"
              className="text-indigo-600 mt-1.5"
              target="new tab"
            >
              <img src={aspiration} alt="" className="w-16" />
            </a>
            <div className="cursor-pointer relative  ">
              <img
                src={info}
                alt=""
                className="h-3 w-3"
                onMouseEnter={handleTooltips}
                onMouseLeave={handleTooltips}
              />
              {Tooltips && (
                <div className="absolute  w-64 -top-16 -left-32 bg-gray-800 text-white p-3">
                  The amount you donate is going to tree planting campaign
                  powered by Aspiration
                </div>
              )}
              {Tooltips && (
                <div className=" w-4 h-4 bg-gray-800 absolute transform rotate-45 -top-5 -right-0.5"></div>
              )}
            </div>
          </div>
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
