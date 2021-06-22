import React from "react";
import register from "../../../assets/images/documentation/register.png";
import verify from "../../../assets/images/documentation/emailverify.png";
import link from "../../../assets/images/documentation/link.png";
import login from "../../../assets/images/documentation/login.png";
import { Link } from "react-router-dom";
function MerchantSignup() {
  return (
    <div className="flex flex-col pt-10  px-7 md:px-16 ">
      <div className="flex flex-col space-y-5">
        {/* Become a merchant  */}
        <div className="flex flex-col  max-w-2xl space-y-2">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Become a merchant
          </div>
          {/* what is carbonpay  */}
          <div className="flex  ">
            The first step in integrating CarbonPay with your store is to become
            a merchant with CarbonPay. Here are the steps to get started with
            us.
          </div>
        </div>
        {/*Merchant Signup */}
        <div className="flex flex-col  max-w-2xl space-y-2 pb-10">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Merchant Signup
          </div>
          {/* create acction  */}
          <div className="flex flex-col border-b border-gray-300 pb-2">
            <div className="text-lg md:text-xl font-semibold  text-primary">
              Create an account
            </div>
            <div className="flex text-sm md:text-base">
              Start by completing the account form with your username, email,
              and password. This will establish your authentication with
              CarbonPay. Make sure you enter your email correctly for account
              verification.
            </div>
            <div>
              <img src={register} alt="" className="" />
            </div>
          </div>
          {/*  Email Verification  */}
          <div className="flex flex-col border-b border-gray-300 pb-2">
            <div className="text-lg md:text-xl font-semibold mt-5 text-primary">
              Email Verification
            </div>
            <div className="flex  mb-2">
              After completing the account form an email verification link is
              sent to your email.
            </div>
            <div>
              <img src={verify} alt="" />
            </div>
            <div>
              <img src={link} alt="" />
            </div>
          </div>
          {/*  Login with account  */}
          <div className="flex flex-col border-b border-gray-300 pb-2">
            <div className="text-lg md:text-xl font-semibold mt-5 text-primary ">
              Login with account
            </div>
            <div className="flex  ">
              After clicking the email verification link, your email will be
              verified, and it will redirect you to the login page. Fill the
              form with your credentials.
            </div>
            <div>
              <img src={login} alt="" />
            </div>
            <div className="flex space-x-3 items-center pb-5">
              <span>Try it!</span>
              <div>
                <Link
                  to="/register"
                  className="bg-primary text-white px-6 py-2 rounded-lg"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantSignup;
