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
    <div className="md:flex p-5 md:px-10 md:py-20 text-center relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-20">
        {carbons.map((carbon) => {
          return (
            <div
              key={carbon.name}
              className="col-span-1 flex flex-col overflow-hidden transition-all transform duration-300 hover:-translate-y-1 hover:border-green-primary bg-center bg-cover bg-no-repeat shadow-md bg-gray-200 "
              // style={{
              //   backgroundImage: `url(${carbon.img})`,
              // }}
            >
              {/* <div className="w-full h-full absolute bg-black opacity-70 top-0"></div> */}
              <div className="h-64 w-full ">
                <img
                  src={carbon.img}
                  className="h-full w-full object-center object-cover"
                  alt=""
                />
              </div>
              <div className="px-5 mt-5 text-2xl lg:text-3xl lg:w-2/3 mx-auto font-bold  z-50">
                {carbon.name}
              </div>
              <div className="z-50 mt-3">
                <div className="h-1 w-20 md:w-32 bg-primary mx-auto "></div>
              </div>
              <div className="p-5 z-50">{carbon.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MerchantConsumer;
