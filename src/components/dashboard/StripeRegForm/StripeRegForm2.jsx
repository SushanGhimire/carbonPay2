import React, { useState, useRef } from "react";
// import axios from "axios";
// import { baseUrl } from "../../authentication/authorization";
// import process from "../../../assets/images/loading/progress.svg";
import info from "../../../assets/images/loading/info.svg";
import aspiration from "../../../assets/images/homepage/aspiration.svg";
function StripeRegForm2({
  submitMerchatForm,
  loading,
  facc_type,
  ff_name,
  fl_name,
  fcontact,
  fcarbon_percentage,
  fshop_addr,
  faddress,
}) {
  const [userimage, setuserImage] = useState("");
  const [imageError, setImageError] = useState("");
  const [Tooltips, setTooltips] = useState(false);
  const selectedImageName = useRef();
  const [merchant, setMerchant] = useState({
    acc_type: facc_type,
    f_name: ff_name,
    l_name: fl_name,
    carbon_percentage: fcarbon_percentage,
    contact: fcontact,
    shop_addr: fshop_addr ? fshop_addr : "",
    address: faddress,
    error: {
      f_name: "",
      l_name: "",
      business_name: "",
      contact: "",
      shop_addr: "",
      image: "",
      address: "",
    },
  });
  const handleTooltips = () => {
    Tooltips ? setTooltips(false) : setTooltips(true);
  };
  const handleCompany = (value) => {
    setMerchant({ ...merchant, acc_type: value });
    // if (value === "IND") {
    //   setMerchant({ ...merchant, business_name: "" });
    //   setIstrue(false);
    // } else {
    //   setIstrue(true);
    // }
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { error, f_name, l_name, carbon_percentage, contact, address } =
      merchant;
    // validation
    if (f_name === "") {
      error.f_name = "Enter first name";
    } else if (l_name === "") {
      error.l_name = "Enter last name";
    } else if (address === "") {
      error.address = "Enter address";
    } else if (contact === "" || isNaN(contact)) {
      error.contact = "invalid contact";
    } else if (shop_addr === "") {
      error.shop_addr = "Enter shop address";
    } else if (imageError === "Invalid file") {
      setImageError("Invalid image file");
    } else {
      setImageError("");
      const formData = new FormData();
      formData.append("acc_type", acc_type);
      formData.append("f_name", f_name);
      formData.append("l_name", l_name);

      formData.append("contact", contact);
      formData.append("address", address);
      formData.append("shop_addr", shop_addr);
      formData.append("carbon_percentage", carbon_percentage);
      if (userimage !== "") {
        formData.append("image", userimage);
      }
      submitMerchatForm(formData);
    }
    setMerchant({ ...merchant, error });
  };
  const handleErrors = (property, value) => {
    const { error } = merchant;

    if (value.trim() === "") {
      error[property] = `cannot be left empty`;
    } else {
      // validation
      if (property === "f_name") {
        error.f_name = "";
      } else if (property === "l_name") {
        if (value === "") {
          error.l_name = "Enter last name";
        } else {
          error.l_name = "";
        }
      } else if (property === "address") {
        if (value === "") {
          error.address = "Address cannot be empty";
        } else {
          error.address = "";
        }
      } else if (property === "shop_addr") {
        if (value === "") {
          error.shop_addr = "enter the shop address";
        } else {
          error.shop_addr = "";
        }
      } else if (property === "contact") {
        if (value === "" || isNaN(value)) {
          error.contact = " contact must be a number";
        } else {
          error.contact = "";
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
    f_name,
    l_name,
    acc_type,
    carbon_percentage,
    contact,
    shop_addr,
    address,
    error,
  } = merchant;
  const {
    f_name: ef_name,
    l_name: el_name,
    address: e_address,
    contact: e_contact,
    shop_addr: eshop_addr,
  } = error;
  return (
    <div
      className={` w-full min-h-screen justify-center items-center  font-rubik  top-0`}
    >
      <form
        className={`w-full  md:max-w-2xl p-10  grid grid-cols-2 gap-6`}
        onSubmit={handleLoginSubmit}
      >
        {/* header  */}
        <div className="text-2xl font-semibold mx-auto col-span-2">
          Update your profile information
        </div>
        {/* business type  */}
        <div className="space-y-1 flex flex-col relative col-span-2">
          <label htmlFor="text" className="text-sm text-gray-500">
            Business Type
          </label>
          <select
            className="appearance-none bg-white border text-gray-700 w-full px-3 py-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-sm"
            value={acc_type}
            onChange={(e) => {
              handleCompany(e.target.value);
            }}
          >
            <option value="IND">Individual</option>
            <option value="BUS">Company</option>
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
              value={f_name}
              id="f_name"
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "f_name")}
            />
          </div>
          {ef_name && <div className="error text-red-600">{ef_name}</div>}
        </div>
        {/* last name  */}
        <div className="space-y-1 flex flex-col col-span-1">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              Last Name
            </label>
            <input
              type="text"
              value={l_name}
              id="l_name"
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "l_name")}
            />
          </div>
          {el_name && <div className="error text-red-600">{el_name}</div>}
        </div>
        {/* address name  */}
        <div className=" flex flex-col col-span-1">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              Address
            </label>
            <input
              type="text"
              value={address}
              id="address"
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "address")}
            />
          </div>
          {e_address && <div className="error text-red-600">{e_address}</div>}
        </div>
        {/* Contact */}
        <div className=" flex flex-col col-span-1">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              Contact
            </label>
            <input
              type="text"
              value={contact}
              id="contact"
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "contact")}
            />
          </div>
          {e_contact && <div className="error text-red-600">{e_contact}</div>}
        </div>
        {/* Stripe Id */}
        <div className=" flex flex-col col-span-1">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              Shop Address
            </label>
            <input
              type="url"
              value={shop_addr}
              id="shop_addr"
              placeholder="https://"
              className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              onChange={(event) => handleChange(event, "shop_addr")}
            />
          </div>
          {eshop_addr && <div className="error text-red-600">{eshop_addr}</div>}
        </div>
        {/* image  */}
        <div className="flex flex-col space-y-2 relative ">
          <label className="text-sm font-medium text-gray-700">
            Select Image <span>(optional)</span>
          </label>

          <label
            htmlFor="input-file"
            className="bg-gray-50 p-2.5 w-full text-gray-500 text-sm overflow-hidden"
            ref={selectedImageName}
          >
            Select Image
          </label>
          <input
            type="file"
            id="input-file"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files[0];
              const fileName = file.name;
              const image = new Image();
              image.src = URL.createObjectURL(file);
              image.onload = function () {
                let arr = fileName.split(".");
                let extension = arr[arr.length - 1];
                const extensions = ["png", "jpg", "jpeg", "webp"];
                let bool = false;
                for (let i = 0; i < extensions.length; i++) {
                  if (extensions[i] === extension) {
                    bool = true;
                    i = extensions.length;
                  }
                }
                if (bool) {
                  setuserImage(file);
                  setImageError("");
                } else {
                  setuserImage("");
                  setImageError("Invalid file");
                }
              };

              image.onerror = function () {
                setuserImage("");
                setImageError("Invalid file");
              };
              selectedImageName.current.innerHTML = fileName;
            }}
          />
          <label
            htmlFor="input-file"
            className="bg-gray-200 text-gray-600 py-2 px-4 absolute top-5 right-0 cursor-pointer"
          >
            Browse...
          </label>
          {imageError && (
            <div className="text-red-500 text-sm">{imageError}</div>
          )}
        </div>

        {/* carbon_percentage  */}
        <div className="space-y-1 flex flex-col col-span-1 relative">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="text" className="text-sm text-gray-500">
              Donation % to Carbonpay
            </label>
            <select
              className="appearance-none bg-white border text-gray-700 w-full px-3 py-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-sm"
              id="carbon_percentage"
              value={carbon_percentage}
              onChange={(event) => handleChange(event, "carbon_percentage")}
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
              className="animation-text text-center px-5 py-3 w-full flex items-center space-x-4"
            >
              <span>{loading ? "Submiting" : "Submit"}</span>
              {loading && (
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </button>
            <div className="animation-bg"></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StripeRegForm2;
