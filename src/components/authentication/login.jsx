import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../authentication/authorization";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
      login: "",
    },
  });

  const handleErrors = (property, value) => {
    const { errors } = data;
    value = value === undefined ? data[property] : value;
    errors.login = errors.login && "";
    let result;
    if (value.trim() === "") {
      errors[property] = `${property[0].toUpperCase()}${property.slice(
        1,
        property.length
      )} cannot be left empty`;
      result = false;
    } else {
      if (property === "email") {
        if (!value.match(/^\w+@\w+\.\w+(\.\w+)?$/gi)) {
          errors.email = "Invalid email";
          result = false;
        } else {
          errors.email = "";
          result = true;
        }
      } else {
        if (value.length < 8) {
          errors.password = "Password must be atleast 8 characters long";
          result = false;
        } else {
          errors.password = "";
          result = true;
        }
      }
    }

    setData({
      ...data,
      errors,
    });
    return result;
  };

  const handleChange = ({ target: { value } }, property) => {
    handleErrors(property, value);
    setData({
      ...data,
      [property]: value,
    });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const url = `${baseUrl}/user/login/`;

    const { email, password, errors } = data;
    const credentials = ["email", "password"];
    let goAhead;
    for (let i = 0; i < credentials.length; i++) {
      const result = handleErrors(credentials[i]);
      if (goAhead !== false) {
        goAhead = result;
      }
    }

    if (goAhead) {
      // submitting the form if all input fields are validated
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      setLoading(true);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((dta) => {
          const { detail, access, refresh } = dta;
          if (detail === "Invalid Crendential, Try again") {
            errors.login = "Email or password is incorrect";
            setLoading(false);
            setData({
              ...data,
              errors,
            });
          } else {
            localStorage.setItem("access", access);
            localStorage.setItem("refresh", refresh);
            window.location = "/";
          }
        });
    }
  };

  const {
    email,
    password,
    errors: { email: emailError, password: passwordError, login: loginError },
  } = data;

  return (
    <div>
      <div className="  w-full h-full grid place-items-center py-16">
        <form
          className="bg-white border border-gray-300 px-10 py-8 mx-5 max-w-sm w-full authentication-form"
          // autoComplete="off"
          onSubmit={handleLoginSubmit}
        >
          <div className="flex flex-col pb-2 space-y-2">
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
                value={email}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
                onChange={(event) => handleChange(event, "email")}
                autoComplete="off"
              />
              {emailError && (
                <div className="error text-red-600">{emailError}</div>
              )}
            </div>
            <div className="space-y-1 flex flex-col">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-gray-500">
                  Password
                </label>
                <Link
                  to="/confirmemail"
                  htmlFor="password"
                  className="text-gray-500 cursor-pointer hover:text-primary"
                >
                  Forget Password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
                onChange={(event) => handleChange(event, "password")}
                autoComplete="off"
              />
              {passwordError && (
                <div className="error text-red-600">{passwordError}</div>
              )}
              {loginError && (
                <div className="error text-red-600">{loginError}</div>
              )}
            </div>

            <div className="button-animation" style={{ display: "block" }}>
              <button className="animation-text text-center px-5 py-3 w-full flex items-center space-x-4">
                <span>Sign In</span>
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
          <div className="text-xs mt-2 text-center">
            Dont have an account ?{" "}
            <Link
              to="/register"
              className="underline"
              onClick={() => window.scrollTo(0, 0)}
            >
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
