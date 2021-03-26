import React from "react";
import Cmerchant from "../../assets/images/homepage/Cmerchant.jpg";
import Cconsumer from "../../assets/images/homepage/Cconsumer.jpg";

function MerchantConsumer() {
  const carbons = [
    {
      name: "What is the CarbonPay for Merchants?",
      title:
        "It’s a payment infrastructure app for internet business that run in Shopify, BigCommerce WooCommerce and Magento. It’s an easy to implement native apps that enables giving back to climate and capturing carbon few clicks away. Create CarbonPay account select your % contribution in each transaction. Now, in every e-commerce transaction your customer get a confirmation email with the impact of their purchase towards the climate.",
      img: Cmerchant,
    },
    {
      name: "What is the CarbonPay for Consumers?",
      title:
        "CarbonPay Lets consumer know about merchants commitment with a new badge updated automatically on CarbonPay checkout, receipts, and invoices. Our website lts consumers track summary of their Carbon Capture efforts and how much impact it was able to create. It helps create better habits that helps the planet.",
      img: Cconsumer,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto bg-white mb-10 p-5 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {carbons.map((carbon, index) => {
          return (
            <div className="col-span-1 sm:flex space-x-4">
              {/* image  */}
              <div className="flex sm:w-1/3 lg:w-2/5">
                <img
                  src={carbon.img}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              {/* info  */}
              <div className="flex-1 flex flex-col py-4">
                {/* header  */}
                <div className="font-header text-2xl font-semibold">
                  {carbon.name}
                </div>
                {/* discription  */}
                <div className="line-clamp-3 text-gray-700 mt-2">
                  {carbon.title}
                </div>
                {/* read more  */}
                <div className="flex items-center text-primary mt-2 cursor-pointer">
                  <span>Read More</span>
                  <span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // <div className="flex w-full flex-col">
    //   {/* first card */}
    //   <div className="md:flex">
    //     {/* img */}
    //     <div className="w-full md:w-1/2 h-96">
    //       <img
    //         src={Cmerchant}
    //         className="w-full h-full object-center object-cover"
    //         alt=""
    //       />
    //     </div>
    //     <div className="flex-1 flex flex-col justify-center items-center px-5 text-center">
    //       <div className="px-5 mt-5 text-2xl lg:text-3xl lg:w-2/3 mx-auto font-bold text-center font-header">
    //         What is the CarbonPay for Merchants?
    //       </div>
    //       <div className="z-50 mt-3">
    //         <div className="h-1 w-20 md:w-32 bg-primary mx-auto "></div>
    //       </div>
    //       <div className="p-5 text-sm lg:text-base">
    //         It’s a payment infrastructure app for internet business that run in
    //         Shopify, BigCommerce WooCommerce and Magento. It’s an easy to
    //         implement native apps that enables giving back to climate and
    //         capturing carbon few clicks away. Create CarbonPay account select
    //         your % contribution in each transaction. Now, in every e-commerce
    //         transaction your customer get a confirmation email with the impact
    //         of their purchase towards the climate.
    //       </div>
    //     </div>
    //   </div>
    //   {/* second card */}
    //   <div className=" md:flex">
    //     <div className="w-full md:w-1/2 h-96 block md:hidden">
    //       <img
    //         src={Cconsumer}
    //         className="w-full h-full object-center object-cover"
    //         alt=""
    //       />
    //     </div>
    //     <div className="flex-1 flex flex-col justify-center items-center px-5 text-center">
    //       <div className="px-5 mt-5 text-2xl lg:text-3xl lg:w-2/3 mx-auto font-bold text-center font-header">
    //         What is the CarbonPay for Consumer?
    //       </div>
    //       <div className="z-50 mt-3">
    //         <div className="h-1 w-20 md:w-32 bg-primary mx-auto "></div>
    //       </div>
    //       <div className="p-5 text-sm lg:text-base">
    //         It’s a payment infrastructure app for internet business that run in
    //         Shopify, BigCommerce WooCommerce and Magento. It’s an easy to
    //         implement native apps that enables giving back to climate and
    //         capturing carbon few clicks away. Create CarbonPay account select
    //         your % contribution in each transaction. Now, in every e-commerce
    //         transaction your customer get a confirmation email with the impact
    //         of their purchase towards the climate.
    //       </div>
    //     </div>
    //     {/* img */}
    //     <div className="w-full md:w-1/2 h-96 hidden md:block">
    //       <img
    //         src={Cconsumer}
    //         className="w-full h-full object-center object-cover"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default MerchantConsumer;
