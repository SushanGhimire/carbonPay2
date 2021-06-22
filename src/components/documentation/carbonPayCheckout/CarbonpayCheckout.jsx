import React from "react";

function CarbonpayCheckout() {
  return (
    <div className="flex flex-col pt-10  px-7 md:px-16 ">
      <div className="flex flex-col  max-w-2xl pb-10">
        {/*  About CarbonPay Checkout  */}
        <div className="flex flex-col pb-2">
          <div className="text-xl md:text-2xl font-semibold  text-primary">
            About CarbonPay Checkout
          </div>
          <div className="flex text-sm md:text-base mt-2 border-b border-gray-300 pb-5">
            No passwords. No long forms. No hassle. With one click, CarbonPay
            lets customers securely log in, check out, and perform safe
            transactions.
          </div>
          <div className="h-64 bg-gray-800 flex justify-center items-center">
            {/* <img src="" alt="" /> */}
            <div className="text-white">CarbonPay Checkout Gif here</div>
          </div>
        </div>
        {/*  Fast  */}
        <div className="flex flex-col mt-20">
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
        <div className="flex flex-col">
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

export default CarbonpayCheckout;
