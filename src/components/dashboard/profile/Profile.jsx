import React, { useState } from "react";
import { Link } from "react-router-dom";
function Profile() {
  const [edit, setEdit] = useState(false);
  const [Disable, setDisable] = useState(true);
  const verified = true;
  const [UserDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const userInfo = {
    username: "Sushan Ghimire",
    email: "sushangmi55@gmail.com",
    password: "11111111",
  };
  const handleEdit = () => {
    // edit ? setEdit(false) : setEdit(true);
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
      setUserDetails(userInfo);
    }
  };
  const handleChange = ({ target: { value } }, property) => {
    setDisable(false);
    setUserDetails({
      ...UserDetails,
      [property]: value,
    });
  };
  console.log(UserDetails);
  const { username, email, password } = UserDetails;
  return (
    <div className="flex md:p-10 flex-col">
      {/* top header  */}
      <div className="w-full md:flex justify-between items-center space-y-3 md:space-y-0 p-5 lg:px-0 border-b">
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
              <button
                className={`flex items-center space-x-2 shadow-md p-2 font-rubi transition-all duration-200 ease-linear hover:bg-indigo-700 bg-indigo-600 text-white border rounded-md  ${
                  Disable ? "opacity-60" : ""
                }`}
                onClick={() => {
                  alert("i am disabled");
                }}
                disabled={Disable}
              >
                <span>Save</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* user info  */}
      <div className="flex flex-col space-y-6 py-5 border-b">
        {/* email  */}
        <div className="flex space-x-4 items-center">
          <label
            htmlFor=""
            className="w-32 font-rubik font-semibold text-gray-800"
          >
            Email
          </label>
          {!edit && (
            <input
              type="text"
              id="email"
              value={userInfo.email}
              className={`text-gray-700 font-medium w-auto rounded-md  px-6 py-1`}
              readOnly={edit ? false : true}
            />
          )}
          {edit && (
            <input
              type="text"
              id="email"
              value={email}
              className={`text-gray-700 font-medium w-auto rounded-md ${
                edit ? "border" : ""
              } px-6 py-1`}
              onChange={(event) => handleChange(event, "email")}
            />
          )}
        </div>
        {/* name  */}
        <div className="flex space-x-4 items-center">
          <label
            htmlFor=""
            className="w-32 font-rubik font-semibold text-gray-800"
          >
            Name
          </label>
          {!edit && (
            <input
              type="text"
              id="username"
              value={userInfo.username}
              className={`text-gray-700 font-medium w-auto rounded-md  px-6 py-1`}
              readOnly={edit ? false : true}
            />
          )}
          {edit && (
            <input
              type="text"
              id="username"
              value={username}
              className={`text-gray-700 font-medium rounded-md ${
                edit ? "border" : ""
              } px-6 py-1`}
              onChange={(event) => handleChange(event, "username")}
            />
          )}
        </div>
        {/* password */}
        <div className="flex space-x-4 items-center">
          <label
            htmlFor=""
            className="w-32 font-rubik font-semibold text-gray-800"
          >
            Password
          </label>
          {!edit && (
            <input
              id="password"
              value={userInfo.password}
              type="password"
              className="text-gray-700 font-medium  px-6 py-1 rounded-md"
              onChange={(event) => handleChange(event, "password")}
              readOnly={edit ? false : true}
            />
          )}
          {edit && (
            <Link
              to="/dashboard/confirmemail"
              className="border text-gray-700 px-3 py-1 text-sm rounded-md shadow-md"
            >
              Change Password..
            </Link>
          )}
        </div>
        {/* verified  */}
        {!edit && (
          <div className="flex space-x-4 items-center">
            <label
              htmlFor=""
              className="w-32 font-rubik font-semibold text-gray-800"
            >
              Verified
            </label>
            <div
              className={`px-6 py-2  ${
                verified ? "text-primary" : "text-red-600"
              }`}
            >
              {!verified && (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {verified && (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
