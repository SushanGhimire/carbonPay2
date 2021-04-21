import React from "react";
import FrontPage from "../home/FrontPage";
import image from "../../../assets/images/homepage/forest.svg";
import payment from "../../../assets/images/merchants/payment.svg";
import setup from "../../../assets/images/merchants/setup.svg";
import see from "../../../assets/images/merchants/see.svg";
import merchant from "../../../assets/images/merchants/merchant.jpg";

import FlexCard from "../../../common/FlexCard";
import StakeHolders from "../../../common/StakeHolders";
function forMerchant() {
  const cards = [
    {
      logo: payment,
      name: "Payments with Purpose",
      title:
        "Payment infrastructure app for internet business that lets businesses and customers give back to the planet.",
      aos: "fade-down",
    },
    {
      logo: setup,
      name: "Easy Set Up",
      title:
        "Native integrations for Shopify, BigCommerce WooCommerce and Magento. Easy Set up",
      aos: "fade-up",
    },
    {
      logo: see,
      name: "Customers See Their Impact",
      title:
        "Customers pick their % contribution and get a confirmation email showing their impact.",
      aos: "fade-down",
    },
  ];
  return (
    <div>
      <FrontPage
        header="CarbonPay"
        des="Removing Carbon with Every Online Purchase"
        img={image}
      />
      <FlexCard
        title="What is CarbonPay for Merchants?"
        des="A payment infrastructure app for internet business that runs in Shopify, BigCommerce WooCommerce and Magento. It’s an easy to implement native apps that lets you and your customers give back to the climate. CarbonPay lets you select your % contribution in each transaction. With every e-commerce transaction your customer get a confirmation email with the impact of their purchase towards the climate."
        img={merchant}
        direction="true"
      />
      <StakeHolders
        title="CarbonPay for Merchants"
        cards={cards}
        grid="grid-cols-3"
      />
    </div>
  );
}

export default forMerchant;
