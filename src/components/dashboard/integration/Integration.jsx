import React from "react";
import shopify from "../../../assets/images/dashboard/shopify.svg";
import bigcommerce from "../../../assets/images/dashboard/bigcommerce.svg";
import woocommerce from "../../../assets/images/dashboard/woocommerce.svg";
import magento from "../../../assets/images/dashboard/magento.svg";
function Integration() {
  const integrations = [
    {
      name: "Shopify",
      desc:
        "Carbon neutral order for your shopify customers at no cost to you.",
      isInstalled: true,
      logo: shopify,
    },
    {
      name: "Bigcommerce",
      desc:
        "Carbon neutral order for your shopify customers at no cost to you.",
      isInstalled: false,
      logo: bigcommerce,
    },
    {
      name: "Woocommerce",
      desc:
        "Carbon neutral order for your shopify customers at no cost to you.",
      isInstalled: false,
      logo: woocommerce,
    },
    {
      name: "Magento",
      desc:
        "Carbon neutral order for your shopify customers at no cost to you.",
      isInstalled: true,
      logo: magento,
    },
  ];
  return (
    <div className="flex p-5 md:p-10 flex-col">
      {/* top header  */}
      <div className="w-full flex flex-col justify-between  space-y-1 p-5 lg:px-0">
        <div className="text-3xl font-semibold">CarbonPay Integrations</div>
        <div className="md:text-lg font-semibold text-gray-700">
          One-click integrations with other e-commerce tools you love.
        </div>
      </div>
      {/* ecommerce  */}
      <div className="text-primary font-semibold my-5">E-commerce</div>
      <div className="w-full max-w-4xl grid   md:grid-cols-2 gap-6">
        {/* card  */}
        {integrations.map((item, index) => {
          const { name, desc, isInstalled, logo } = item;
          return (
            <div
              className="flex flex-col space-y-3 col-span-1 bg-gray-100 p-5"
              key={index}
            >
              {/* logo and brand name  */}
              <div className="flex items-center space-x-4">
                <div>
                  <img src={logo} alt="" />
                </div>
                <div className="text-xl font-semibold">{name}</div>
              </div>
              {/* description  */}
              <div className="text-gray-700">{desc}</div>
              {isInstalled ? (
                <div className="text-lg font-semibold text-primary">
                  Installed
                </div>
              ) : (
                <div>
                  <button className="bg-primary text-white px-3 py-2 rounded-md">
                    Add App
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Integration;
