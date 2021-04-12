import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "./authorization";
// import backgroundImage from "../../assets/images/authentication/login-background.jpg";
// import logo from "../../assets/images/dashboard/logo.jpeg";
import axios from "axios";

export default function Login() {
  const [login, setLogin] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("into login");
    axios
      .post(`${baseUrl}/user/login/`, login)
      .then((res) => {
        console.log(res.data);
        console.log("loddedIn");
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(localStorage.getItem("access"));
  return (
    <div>
      <div className="  w-full h-full grid place-items-center py-16">
        <form
          className="bg-white border border-gray-300 px-10 py-8 mx-5 max-w-sm w-full authentication-form"
          // autoComplete="off"
          onSubmit={handleLoginSubmit}
        >
          <div className="flex flex-col pb-2 space-y-2">
            {/* resturant logo  */}
            {/* <Link to="/" className="w-20 h-20 mx-auto">
              <img
                src={logo}
                alt=""
                className="w-full h-full rounded-full object-center object-cover"
              />
            </Link> */}
            {/* momo world  */}
            <div className="text-xl font-semibold text-center">Login Form</div>
          </div>
          <div className="space-y-5">
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email" className="text-gray-500">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
                value={login.email || ""}
                onChange={(e) => {
                  setLogin({ ...login, email: e.target.value });
                }}
              />
              {/* {emailError && <div className="error">{emailError}</div>} */}
            </div>
            <div className="space-y-1 flex flex-col">
              <label htmlFor="password" className="text-gray-500">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
                value={login.password || ""}
                onChange={(e) => {
                  setLogin({ ...login, password: e.target.value });
                }}
              />
              {/* {passwordError && <div className="error">{passwordError}</div>}
              {loginError && <div className="error">{loginError}</div>} */}
            </div>

            <div className="button-animation" style={{ display: "block" }}>
              <button className="animation-text text-center px-5 py-3 w-full">
                Login
              </button>
              <div className="animation-bg"></div>
            </div>
          </div>
          <div className="text-xs mt-2 text-center">
            Dont have an account ?{" "}
            <Link to="/register" className="underline text-primary">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
