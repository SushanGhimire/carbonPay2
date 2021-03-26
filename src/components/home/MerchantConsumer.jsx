import React from "react";
import Cmerchant from "../../assets/images/homepage/Cmerchant.jpg";
import Cconsumer from "../../assets/images/homepage/Cconsumer.jpg";

function MerchantConsumer() {
  return (
    <div className="flex w-full flex-col">
      {/* first card */}
      <div className="md:flex">
        {/* img */}
        <div className="w-full md:w-1/2 h-96">
          <img
            src={Cmerchant}
            className="w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center px-5 text-center">
          <div className="px-5 mt-5 text-2xl lg:text-3xl lg:w-2/3 mx-auto font-bold text-center font-header">
            What is the CarbonPay for Merchants?
          </div>
          <div className="z-50 mt-3">
            <div className="h-1 w-20 md:w-32 bg-primary mx-auto "></div>
          </div>
          <div className="p-5 text-sm lg:text-base">
            It’s a payment infrastructure app for internet business that run in
            Shopify, BigCommerce WooCommerce and Magento. It’s an easy to
            implement native apps that enables giving back to climate and
            capturing carbon few clicks away. Create CarbonPay account select
            your % contribution in each transaction. Now, in every e-commerce
            transaction your customer get a confirmation email with the impact
            of their purchase towards the climate.
          </div>
        </div>
      </div>
      {/* second card */}
      <div className=" md:flex">
        <div className="w-full md:w-1/2 h-96 block md:hidden">
          <img
            src={Cconsumer}
            className="w-full h-full object-center object-cover"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center px-5 text-center">
          <div className="px-5 mt-5 text-2xl lg:text-3xl lg:w-2/3 mx-auto font-bold text-center font-header">
            What is the CarbonPay for Consumer?
          </div>
          <div className="z-50 mt-3">
            <div className="h-1 w-20 md:w-32 bg-primary mx-auto "></div>
          </div>
          <div className="p-5 text-sm lg:text-base">
            It’s a payment infrastructure app for internet business that run in
            Shopify, BigCommerce WooCommerce and Magento. It’s an easy to
            implement native apps that enables giving back to climate and
            capturing carbon few clicks away. Create CarbonPay account select
            your % contribution in each transaction. Now, in every e-commerce
            transaction your customer get a confirmation email with the impact
            of their purchase towards the climate.
          </div>
        </div>
        {/* img */}
        <div className="w-full md:w-1/2 h-96 hidden md:block">
          <img
            src={Cconsumer}
            className="w-full h-full object-center object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MerchantConsumer;
