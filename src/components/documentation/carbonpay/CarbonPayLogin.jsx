import React from "react";
import login from "../../../assets/images/documentation/login.png";

function CarbonPayLogin() {
  return (
    <div className="flex flex-col pt-10  px-7 md:px-16 ">
      {/*  Login with account  */}
      <div className="flex flex-col  max-w-2xl ">
        <div className="flex flex-col border-b border-gray-300 pb-2">
          <div className="text-xl md:text-2xl font-semibold mt-5 text-primary ">
            CarbonPay Login
          </div>
          <div className="flex mt-2 text-sm md:text-base ">
            After clicking the email verification link, your email will be
            verified and it will redirect you to the login page and fill the
            form with your credentials.
          </div>
          <div>
            <img src={login} alt="" />
          </div>
        </div>
        {/*  Fast  */}
        <div className="flex flex-col mt-10">
          <div className="text-xl md:text-2xl font-semibold  text-primary">
            Fast
          </div>
          <div className="flex  mt-2 pb-5 text-sm md:text-base">
            With the CarbonPay Checkout button, customers check out and pay in
            one easy step. It’s quick and safe.
          </div>
        </div>
        {/*  Simple  */}
        <div className="flex flex-col">
          <div className="text-xl md:text-2xl font-semibold  text-primary">
            Simple
          </div>
          <div className="flex  mt-2 pb-5 text-sm md:text-base">
            CarbonPay Checkout is easy to integrate for ecommerce platforms. We
            handle all the complexity of logins, checkout, and payments, so you
            can focus on user acquisition and sales.
          </div>
        </div>
        {/*  Secure  */}
        <div className="flex flex-col mb-20">
          <div className="text-xl md:text-2xl font-semibold  text-primary">
            Secure
          </div>
          <div className="flex  mt-2 pb-5 text-sm md:text-base">
            CarbonPay Checkout ishighly secure. We use security and encryption
            technology to fight fraud and protect data, and we’ll never sell
            your information to anyone.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbonPayLogin;
