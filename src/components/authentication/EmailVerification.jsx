import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../authentication/authorization";
import process from "../../assets/images/loading/progress.svg";
function EmailVerification() {
  const [Email, setEmail] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Email.email === "") {
      setError("empty field cannot be submitted");
    } else if (!Email.email.match(/^\w+@\w+\.\w+(\.\w+)?$/gi)) {
      setError("invalid Email address");
    } else {
      setLoading(true);
      setError("");
      axios
        .post(`${baseUrl}/user/password-reset/`, Email)
        .then(() => {
          setConfirmationEmail("confirmation link has been sent to your email");
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="  w-full h-full grid place-items-center py-16 font-rubik">
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
                Email
              </label>
              <input
                type="text"
                id="email"
                value={Email.email}
                onChange={(e) => setEmail({ ...Email, email: e.target.value })}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
              />
            </div>
            {error && <div className="error text-red-600">{error}</div>}
            {confirmationEmail && (
              <div className="text-green-600 text-sm">{confirmationEmail}</div>
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

export default EmailVerification;
