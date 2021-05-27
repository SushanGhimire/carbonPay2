import React from "react";
import { Link } from "react-router-dom";
import wpLogin from "../../../assets/images/documentation/wpLogin.png";
import wp from "../../../assets/images/documentation/wp.png";
import carbonpay from "../../../assets/images/documentation/carbonpay.png";
import activate from "../../../assets/images/documentation/activate.png";
function WooCommerce() {
  return (
    <div className="flex flex-col pt-10 px-7 md:px-16">
      {/* top header  */}
      <div className="text-2xl md:text-3xl font-semibold  text-primary pb-8">
        CarbonPay for WooCommerce Installation Guide
      </div>
      {/*  Become a Merchant  */}
      <div className="flex flex-col ">
        {/*   Become a Merchant  */}
        <div className="flex flex-col  max-w-2xl space-y-2">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Become a Merchant
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            The first step to integrating CarbonPay with your WooCommerce store
            is to become a merchant with carbonpay. If you already have a
            merchant account, please move to the Install WordPress Plugin
            section.
          </div>
          <Link
            to="/docs/merchantsignup"
            className="text-primary font-semibold flex space-x-2 items-center transform transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            <span> Go to merchant signup documentation</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
        <div className="text-2xl md:text-3xl font-semibold pb-2 text-primary  mt-5">
          Install WordPress Plugin
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Login to your WordPress admin dashboard
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            Login to the admin side of your WordPress site. The url for this is
            usually
          </div>
          <div>
            <span className="inline-block border text-red-600 border-gray-300 ml-2 bg-gray-50">
              https://yourwebsite.com/wp-admin
            </span>
          </div>
          <div className="">
            <img src={wpLogin} alt="" className="mt-3" />
          </div>
          <div className="italic">
            Tip: You must have WordPress admin access in order to install and
            remove plugins.
          </div>
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2 mt-10">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Navigate to Plugins, Add New
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            In the left hand sidebar of your WordPress admin dashboard, hover
            over Plugins, then click "Add New".
          </div>
          <div className="">
            <img src={wp} alt="" className="mt-3" />
          </div>
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2 mt-10">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Search & install CarbonPay for WooCommerce
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            Search the plugin directory for "CarbonPay" for WooCommerce." We're
            really new, so you may need to scroll down a little bit to find us.
          </div>
          <div className="h-32 bg-gray-700 text-white flex justify-center items-center">
            carbonpay plugin search result here
            {/* <img src={wp} alt="" className="mt-3" /> */}
          </div>
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2 mt-10">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Activate plugin
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            Once you finished installing plugin, you can navigate to installed
            plugin pages from the left hand sidebar of your WordPress admin
            dashboard, hover over Plugins, then click "Installed Plugins" and
            click the "Activate" button right below the installed plugin "Carbon
            Pay".
          </div>
          <div className="">
            <img src={activate} alt="" className="mt-3" />
          </div>
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2 mt-10">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Configure CarbonPay plugin settings
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            Login to the admin side of your WordPress site. The url for this is
            usually
          </div>
          <div className="flex items-center">
            <span> url to your plugin settings</span>
            <span className="inline-block border text-red-600 border-gray-300 ml-2 bg-gray-50">
              https://yourwebsite.com/wp-admin/admin.php?page=carbonpay
            </span>
          </div>
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2 mt-5 mb-20">
          <div className="text-lg md:text-xl font-semibold text-primary ">
            Add your merchant secret key
          </div>
          <div className="flex  text-sm md:text-base">
            copy your secrect key from carbonpay merchant setting dashboard and
            paste in "Enter Merchant ID" field and you are done
          </div>
          <div className="">
            <img src={carbonpay} alt="" className="mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WooCommerce;
