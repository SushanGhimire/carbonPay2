import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../authentication/authorization";
import axios from "axios";
import StripeRegForm2 from "../StripeRegForm/StripeRegForm2";
function Profile() {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSecret, setIsSecret] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const handleEdit = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const handleSecret = () => {
    isSecret ? setIsSecret(false) : setIsSecret(true);
  };
  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();
  // };
  const token = localStorage.getItem("access");
  const submitMerchatForm = (formData) => {
    setLoading(true);
    axios
      .put(`${baseUrl}/user/profile/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `application/json`,
        },
      })
      .then(() => {
        setLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.data.code === "token_not_valid") {
          localStorage.clear();
          window.location = "/";
        } else {
          alert("Internal Server Error");
        }
      });
  };
  const handleSecretKey = () => {
    axios
      .get(`${baseUrl}/user/profile/new-key/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        // setUserInfo(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(`${baseUrl}/user/profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  // console.log(userInfo);
  return (
    <>
      <div className="flex p-5 md:p-10 flex-col">
        {/* top header  */}
        <div className="w-full flex justify-between items-center  p-5 lg:px-0 border-b">
          <div className="text-3xl font-semibold">Profile</div>
          <div className="flex space-x-4">
            {!edit && (
              <button
                className=" flex items-center space-x-2 shadow-md p-2 font-rubik bg-gray-100 transition-all duration-200 ease-linear hover:bg-indigo-600 hover:text-white border rounded-md"
                onClick={handleEdit}
              >
                <span>Edit</span>
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
              </button>
            )}
            {edit && (
              <>
                <button
                  className=" flex items-center space-x-2 shadow-md p-2 font-rubi transition-all duration-200 ease-linear border border-gray-200 rounded-md"
                  onClick={handleEdit}
                >
                  <span>Cancle</span>
                </button>
                {/* <button
                className={`flex items-center space-x-2 shadow-md p-2 font-rubi transition-all duration-200 ease-linear hover:bg-indigo-700 bg-indigo-600 text-white border rounded-md  ${
                  Disable ? "opacity-60" : ""
                }`}
                onClick={() => {
                  alert("i am disabled");
                }}
                disabled={Disable}
              >
                <span>Save</span>
              </button> */}
              </>
            )}
          </div>
        </div>
        {/* user info  */}
        <div className="flex flex-col space-y-6 py-5 border-b">
          {/* user image  */}
          <div className="w-72 flex flex-col">
            <img
              src={`${baseUrl}${userInfo.image}`}
              alt=""
              className="h-40 w-40 object-cover object-center rounded-full mx-auto border-4 p-0.5 border-primary"
            />
            <div className=" flex mt-2">
              <div className="mx-auto text-lg font-semibold">
                {userInfo.f_name} {userInfo.l_name}
              </div>
            </div>
          </div>
          {/* email  */}
          {!edit && (
            <div className="flex space-x-4 items-center">
              <label
                htmlFor=""
                className="w-36 font-rubik font-semibold text-gray-800"
              >
                Email
              </label>
              <div
                className={`text-gray-700 font-medium w-auto rounded-md  px-6 py-1`}
              >
                {userInfo.email}
              </div>
            </div>
          )}
          {/* password */}
          {edit && (
            <div className="flex md:space-x-4 items-center">
              <label
                htmlFor=""
                className="w-36 font-rubik font-semibold text-gray-800"
              >
                Password
              </label>
              <Link
                to="/confirmemail"
                className="border text-gray-700 px-3 py-1 text-sm rounded-md shadow-md font-semibold"
              >
                Change Password..
              </Link>
            </div>
          )}
          {/* address  */}
          {!edit && (
            <div className="flex space-x-4 items-center">
              <label
                htmlFor=""
                className="w-36 font-rubik font-semibold text-gray-800"
              >
                Address
              </label>
              <div
                className={`text-gray-700 font-medium w-auto rounded-md  px-6 py-1`}
              >
                {userInfo.address}
              </div>
            </div>
          )}
          {/* contact  */}
          {!edit && (
            <div className="flex space-x-4 items-center">
              <label
                htmlFor=""
                className="w-36 font-rubik font-semibold text-gray-800"
              >
                Contact
              </label>

              <div
                className={`text-gray-700 font-medium w-auto rounded-md  px-6 py-1`}
              >
                {userInfo.contact}
              </div>
            </div>
          )}
          {/* acc type  */}
          {!edit && (
            <div className="flex space-x-4 items-center">
              <label
                htmlFor=""
                className="w-36 font-rubik font-semibold text-gray-800"
              >
                Account Type
              </label>
              <div
                className={`text-gray-700 font-medium w-auto rounded-md  px-6 py-1`}
              >
                {userInfo.acc_type === "IND" ? "Individual" : "Business"}
              </div>
            </div>
          )}
          {/* Carbon Donation %  */}
          {!edit && (
            <div className="flex space-x-4 items-center">
              <label
                htmlFor=""
                className="w-36 font-rubik font-semibold text-gray-800"
              >
                Carbon Donation %
              </label>
              <div
                className={`text-gray-700 font-medium w-auto rounded-md  px-6 py-1`}
              >
                {userInfo.carbon_percentage}
              </div>
            </div>
          )}
          {/* Shop Address %  */}
          {!edit && (
            <div className="flex space-x-4 items-center">
              <label
                htmlFor=""
                className="w-36 font-rubik font-semibold text-gray-800"
              >
                Shop Address
              </label>
              <div
                className={`text-gray-700 font-medium w-auto rounded-md  px-6 py-1`}
              >
                {userInfo.shop_addr}
              </div>
            </div>
          )}
          {/* Secret Key */}
          <div className="flex space-x-4 items-center ">
            <label
              htmlFor=""
              className="w-36 font-rubik font-semibold text-gray-800"
            >
              Secret Key
            </label>
            {isSecret && (
              <div
                className={`text-gray-700  font-medium px-6 py-1 rounded-md focus:outline-none  ${
                  isSecret ? "filter blur " : ""
                }`}
              >
                sjdbfkjsbd-sdfsdf-sdf-sd-f-sd-fs-dfsdfsd-f
              </div>
            )}
            {!isSecret && (
              <div
                className={`text-gray-700 text-sm font-medium  px-2 py-1 rounded-md focus:outline-none  wrap`}
              >
                {userInfo.secrect_key}
              </div>
            )}
            <div className="hidden md:flex">
              <button
                className="border text-gray-700 px-3 py-1 text-sm rounded-md shadow-md transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-gray-100 font-semibold"
                onClick={handleSecret}
              >
                {isSecret ? "view key" : "hide key"}
              </button>

              {edit && (
                <button
                  className="border text-gray-700 px-3 py-1 text-sm rounded-md shadow-md transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-gray-100 font-semibold ml-4"
                  onClick={handleSecretKey}
                >
                  Update Key
                </button>
              )}
            </div>
          </div>
          <div className="flex md:hidden mx-auto">
            <button
              className="border text-gray-700 px-3 py-1 text-sm rounded-md shadow-md transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-gray-100 font-semibold"
              onClick={handleSecret}
            >
              {isSecret ? "view key" : "hide key"}
            </button>

            {edit && (
              <button className="border text-gray-700 px-3 py-1 text-sm rounded-md shadow-md transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-gray-100 font-semibold ml-4">
                Update Key
              </button>
            )}
          </div>
        </div>
      </div>
      {edit && (
        <StripeRegForm2
          facc_type={userInfo.acc_type}
          ff_name={userInfo.f_name}
          fl_name={userInfo.l_name}
          fcarbon_percentage={userInfo.carbon_percentage}
          fcontact={userInfo.contact}
          fshop_addr={userInfo.shop_addr}
          faddress={userInfo.address}
          fimage={userInfo.image}
          submitMerchatForm={submitMerchatForm}
          loading={loading}
        />
      )}
    </>
  );
}

export default Profile;
