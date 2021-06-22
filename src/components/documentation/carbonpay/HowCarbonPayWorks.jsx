import React from "react";

function HowCarbonPayWorks() {
  return (
    <div className="flex flex-col pt-10  px-7 md:px-16 ">
      {/*  How CarbonPay Login Works
       */}
      <div className="flex flex-col  max-w-2xl ">
        <div className="flex flex-col border-b border-gray-300 pb-2 space-y-2">
          <div className="text-xl md:text-2xl font-semibold mt-5 text-primary ">
            How CarbonPay Login Works
          </div>
          <div className="flex  text-sm md:text-base">
            CarbonPay makes it quick and painless for new and existing customers
            to log into your site. If someone visiting your site already has a
            CarbonPay account, log them into your site with just one click. If
            they don’t, we create a new CarbonPay account with their email,
            username and password and authenticate them with that new account.
            Once authenticated, you can choose to create an account on your site
            for them, if one doesn’t exist already. ‍‍
          </div>
          <div className="h-96 bg-gray-800 flex justify-center items-center mt-10">
            {/* <img src="" alt="" /> */}
            <div className="text-white">CarbonPay flow diagram here </div>
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
        <div className="flex flex-col mb-10">
          <div className="text-xl md:text-2xl font-semibold  text-primary">
            Secure
          </div>
          <div className="flex  mt-2 pb-5 text-sm md:text-base">
            CarbonPay checkout is highly secure. We use security and encryption
            technology to fight fraud and protect data, and we’ll never sell
            your information to anyone.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowCarbonPayWorks;
