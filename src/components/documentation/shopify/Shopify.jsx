import React from "react";
import { Link } from "react-router-dom";
import shopifyLogin from "../../../assets/images/documentation/shopifyLogin.png";
import dashboard from "../../../assets/images/documentation/dashboard.png";
import carbonsetting from "../../../assets/images/documentation/carbonsetting.png";
import carbon from "../../../assets/images/documentation/carbon.png";
import addtocart from "../../../assets/images/documentation/addtocart.png";
import carbonneutral from "../../../assets/images/documentation/carbonneutral.png";
import thanku from "../../../assets/images/documentation/thanku.png";
import thanku2 from "../../../assets/images/documentation/thanku2.png";

function Shopify() {
  return (
    <div className="flex flex-col pt-10 px-7 md:px-16">
      {/* top header  */}
      <div className="text-2xl md:text-3xl font-semibold  text-primary pb-8">
        CarbonPay for Consumers Transaction Guide
      </div>
      {/*  Become a Merchant  */}
      <div className="flex flex-col mb-20 ">
        {/*   Become a Merchant  */}
        <div className="flex flex-col  max-w-2xl space-y-2">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Become a Merchant
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            The first step to integrating CarbonPay with your Shopify store is
            to become a merchant with carbonpay. If you already have a merchant
            account, please move to the Install WordPress Plugin section.
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
        <div className="text-2xl md:text-3xl font-semibold pb-2 text-primary mt-5">
          Install carbonPay for merchant
        </div>
        <div className="flex flex-col  max-w-2xl space-y-4 mt-5">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Login to your Shopify account
          </div>
          <div className="flex  text-sm md:text-base">
            Firstly, login to Shopify with your Shopify login credentials.
          </div>
          <div>
            <img src={shopifyLogin} alt="" />
          </div>
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2 mt-10">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Navigate to Apps
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            In the left hand sidebar of your Shopify admin dashboard, click on
            the Apps .
          </div>
          <div className="">
            <img
              src={dashboard}
              alt=""
              className="mt-3 border-2 border-primary"
            />
          </div>
          <div className="flex  text-sm md:text-base">
            Once clicking the "Apps", shop for the Carbon Neutral all and
            install it.
          </div>
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2 mt-10">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Configure the Carbon Neutral
          </div>
          <div className="flex  text-sm md:text-base">
            After installing the Carbon Neutral, click on the Carbon Neutral to
            configure your Carbon Neutral.
          </div>
          <div className="">
            <img src={carbon} alt="" className="mt-3 border-2 border-primary" />
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            Now, copy your secrect key from carbonpay merchant setting dashboard
            and paste in "Enter Merchant ID" field and you are done.
          </div>
          <div className="">
            <img
              src={carbonsetting}
              alt=""
              className="mt-3 border-2 border-primary"
            />
          </div>
        </div>
        <div className="text-2xl md:text-3xl font-semibold pb-2 text-primary mt-16">
          CarbonPay for Consumer transaction guid
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2 mt-10">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Add to cart
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            Select the your desired product from Shopify store click to "ADD TO
            CART" button for the checkout
          </div>
          <div className="">
            <img
              src={addtocart}
              alt=""
              className="mt-3 border-2 border-primary"
            />
          </div>
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2 mt-10">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Checkout
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            During the checkout process make sure to check the "Your Order Has
            been made Carbon Neutral" box and click on the "CHECK OUT" button
            for further process.
          </div>
          <div className="">
            <img
              src={carbonneutral}
              alt=""
              className="mt-3 border-2 border-primary"
            />
          </div>
          <div className="flex  text-sm md:text-base">
            After clicking the "CHECK OUT" button you are redirected to the
            payment details section. Fill the required payment section with your
            payment credentials and save it and you are done.
          </div>
          <div className="">
            <img src={thanku} alt="" className="mt-3 border-2 border-primary" />
          </div>
        </div>
        <div className="flex flex-col  max-w-2xl space-y-2 mt-10">
          <div className="text-xl md:text-2xl font-semibold text-primary">
            Thank you message
          </div>
          {/*   Become a Merchant  */}
          <div className="flex  text-sm md:text-base">
            After the sucessfull checkout, customer will get the email stating
            their contribution to reduce carbon emission.
          </div>
          <div className="">
            <img
              src={thanku2}
              alt=""
              className="mt-3 border-2 border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopify;
