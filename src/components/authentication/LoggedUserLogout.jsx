import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../authentication/authorization";
import { useParams } from "react-router-dom";
export default function LoggedUserLogout() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  let { uId } = useParams();
  const token = localStorage.getItem("access");
  const [Password, setPassword] = useState({
    old_password: "",
    password: "",
    password2: "",
    error: {
      old_password: "",
      password: "",
      password2: "",
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { old_password, password, password2, error } = Password;
    if (old_password === "") {
      error.old_password = "Must enter old password";
    } else if (password === "") {
      error.password = "please enter new password";
    } else if (password2 === "") {
      error.password2 = "please re-enter new password";
    } else {
      const formData = new FormData();
      formData.append("old_password", old_password);
      formData.append("password", password);
      formData.append("password2", password2);
      setLoading(true);
      axios
        .patch(`${baseUrl}/user/change-password/${uId}/`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": `application/json`,
          },
        })
        .then(() => {
          setLoading(false);
          setModal(true);
          setTimeout(() => {
            handleLogout();
          }, 2000);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response.data.old_password.old_password);
          if (
            err.response.data.old_password.old_password ===
            "Old password is not correct"
          ) {
            error.old_password = "wrong password";
          }
        });
    }
  };
  const handleFormChange = ({ target: { value } }, property) => {
    handleErrors(property, value);
    setPassword({ ...Password, [property]: value });
  };
  const handleErrors = (property, value) => {
    const { error } = Password;

    if (value.trim() === "") {
      error[property] = `cannot be left empty`;
    } else {
      // validation
      if (property === "old_password") {
        if (value.length < 8) {
          error.old_password = "invalid password length";
        } else {
          error.old_password = "";
        }
      } else if (property === "password") {
        if (value.length < 8) {
          error.password = "password must me 8 character long";
        } else {
          error.password = "";
        }
      } else if (property === "password2") {
        if (value !== Password.password) {
          error.password2 = "password do not match";
        } else {
          error.password2 = "";
        }
      }
    }
    setPassword({ ...Password, error });
  };
  const handleLogout = () => {
    const refresh = JSON.stringify({
      refresh: localStorage.getItem("refresh"),
    });
    axios
      .post(`${baseUrl}/user/logout/`, refresh, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `application/json`,
        },
      })
      .then(() => {
        localStorage.clear();
        window.location = "/";
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
  };
  const { old_password, password, password2, error } = Password;
  return (
    <div>
      <div className=" w-full h-full flex justify-center items-center py-16 font-rubik relative">
        {modal && (
          <div className="w-full absolute top-0 py-2 bg-primary text-white text-center">
            Password changed sucessfully
          </div>
        )}
        <form
          className="bg-white border border-gray-300 px-10 py-8 mx-5 max-w-sm w-full authentication-form"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col pb-2 space-y-2">
            <div className="text-xl font-semibold text-center">
              Password Reset
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email" className="text-gray-500">
                Old Password
              </label>
              <input
                type="password"
                id="old_password"
                value={old_password}
                onChange={(e) => handleFormChange(e, "old_password")}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              />
            </div>
            {error.old_password && (
              <div className="error text-red-600">{error.old_password}</div>
            )}
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email" className="text-gray-500">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => handleFormChange(e, "password")}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              />
            </div>
            {error.password && (
              <div className="error text-red-600">{error.password}</div>
            )}
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email" className="text-gray-500">
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                value={password2}
                onChange={(e) => handleFormChange(e, "password2")}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              />
            </div>
            {error.password2 && (
              <div className="error text-red-600">{error.password2}</div>
            )}
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
    </div>
  );
}
