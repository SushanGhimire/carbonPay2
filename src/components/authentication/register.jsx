import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../authentication/authorization";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    confirmationEmail: "",
  });

  const handleErrors = (property, value) => {
    const { errors } = data;
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
      } else if (property === "username") {
        errors.username = "";
        result = true;
      } else if (property === "password") {
        if (value.length < 8) {
          errors.password = "Password must be atleast 8 characters long";
          result = false;
        } else {
          errors.password = "";
          result = true;
        }
      } else if (property === "confirmPassword") {
        if (value !== data.password) {
          errors.confirmPassword = "Passwords do not match";
          result = false;
        } else {
          errors.confirmPassword = "";
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

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const url = `${baseUrl}/user/register/`;

    const { username, email, password, errors } = data;
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((dta) => {
        const { email, username } = dta;

        if (Array.isArray(email) || Array.isArray(username)) {
          if (Array.isArray(email)) {
            errors.email = "Email already exists";
          }
          if (Array.isArray(username)) {
            errors.username = "Username already exists";
          }
          setData({
            ...data,
            errors,
          });
        } else {
          setData({
            ...data,
            confirmationEmail: "Confirmation link has been sent to your email",
          });
        }
      });
  };

  const {
    username,
    email,
    password,
    confirmPassword,
    errors,
    confirmationEmail,
  } = data;
  const {
    username: usernameErr,
    email: emailErr,
    password: passwordErr,
    confirmPassword: confirmPasswordErr,
  } = errors;

  return (
    <div>
      <div className="  w-full h-full grid place-items-center py-16 font-rubik">
        <form
          className="bg-white border border-gray-300 px-10 py-8 mx-5 max-w-sm w-full authentication-form"
          autoComplete="off"
          onSubmit={handleRegisterSubmit}
        >
          <div className="flex flex-col pb-2 space-y-2">
            <div className="text-xl font-semibold text-center">
              Registration Form
            </div>
          </div>
          <div className="space-y-2">
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email" className="text-gray-500">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
                onChange={(event) => handleChange(event, "username")}
              />
              {usernameErr && (
                <div className="error text-red-600">{usernameErr}</div>
              )}
            </div>
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email" className="text-gray-500">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
                onChange={(event) => handleChange(event, "email")}
              />
              {emailErr && <div className="error text-red-600">{emailErr}</div>}
            </div>
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email" className="text-gray-500">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
                onChange={(event) => handleChange(event, "password")}
              />
              {passwordErr && (
                <div className="error text-red-600">{passwordErr}</div>
              )}
            </div>
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email" className="text-gray-500">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
                onChange={(event) => handleChange(event, "confirmPassword")}
              />
              {confirmPasswordErr && (
                <div className="error text-sm text-red-600">
                  {confirmPasswordErr}
                </div>
              )}
            </div>

            {confirmationEmail && (
              <div className="text-green-600 text-sm">{confirmationEmail}</div>
            )}
            <div className="button-animation" style={{ display: "block" }}>
              <button className="animation-text text-center px-5 py-3 w-full">
                Register
              </button>
              <div className="animation-bg"></div>
            </div>
          </div>
          <div className="text-xs mt-2 text-center">
            Already have an account ?{" "}
            <Link
              to="/login"
              className="underline"
              onClick={() => window.scrollTo(0, 0)}
            >
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
