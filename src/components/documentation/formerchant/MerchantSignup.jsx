import React from "react";
import register from "../../../assets/images/documentation/register.png";
import verify from "../../../assets/images/documentation/emailverify.png";
import link from "../../../assets/images/documentation/link.png";
import login from "../../../assets/images/documentation/login.png";

function MerchantSignup() {
  return (
    <div className="flex flex-col pt-10 px-16 ">
      <div className="flex flex-col space-y-5">
        {/* Become a merchant  */}
        <div className="flex flex-col  max-w-2xl space-y-2">
          <div className="text-2xl font-semibold text-primary">
            Become a merchant
          </div>
          {/* what is carbonpay  */}
          <div className="flex text-justify ">
            The first step to integrating CarbonPay with your store is to become
            a merchant with CarbonPay. here are the some steps to get started
            with CarbonPay.
          </div>
        </div>
        {/*Merchant Signup */}
        <div className="flex flex-col  max-w-2xl space-y-2 pb-10">
          <div className="text-2xl font-semibold text-primary">
            Merchant Signup
          </div>
          {/* create acction  */}
          <div className="flex flex-col border-b border-gray-300 pb-2">
            <div className="text-xl font-semibold  text-primary">
              Create an account
            </div>
            <div className="flex text-justify ">
              Start by completing the account form with your username, email and
              password. This will establish your authentication with your
              CarbonPay make sure you enter your email correctly for the account
              verification.
            </div>
            <div>
              <img src={register} alt="" />
            </div>
          </div>
          {/*  Email Verification  */}
          <div className="flex flex-col border-b border-gray-300 pb-2">
            <div className="text-xl font-semibold mt-5 text-primary">
              Email Verification
            </div>
            <div className="flex text-justify mb-2">
              After completing the account form with your username, email and
              password. Email verification link is sent to your email.
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
            <div className="text-xl font-semibold mt-5 text-primary ">
              Login with account
            </div>
            <div className="flex text-justify ">
              After clicking the email verification link, your email will be
              verified and it will redirect you to login page and fill the form
              with your credintials.
            </div>
            <div>
              <img src={login} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantSignup;
