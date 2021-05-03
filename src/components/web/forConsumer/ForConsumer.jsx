import React from "react";
import image from "../../../assets/images/homepage/forest.svg";
import buy from "../../../assets/images/consumer/buy.svg";
import choose from "../../../assets/images/consumer/choose.svg";
import tracking from "../../../assets/images/consumer/tracking.svg";
import capture from "../../../assets/images/consumer/capture.svg";
import consumer from "../../../assets/images/consumer/consumer.jpg";
import FrontPage from "../home/FrontPage";
import FlexCard from "../../../common/FlexCard";
import StakeHolders from "../../../common/StakeHolders";
function ForConsumer() {
  const cards = [
    {
      logo: buy,
      title:
        "Buy from merchants committed to fighting climate change through our trusted badge.",
      aos: "fade-down",
    },
    {
      logo: choose,
      title:
        "Consumers can choose to make the purchase climate neutral or even  contribute extra.",
      aos: "fade-up",
    },
    {
      logo: tracking,
      title:
        "Track their Carbon Capture efforts and the positive impact of their purchases.",
      aos: "fade-down",
    },
    {
      logo: capture,
      title: "Creates buying habits and awareness that helps the planet.",
      aos: "fade-up",
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
        title="What is CarbonPay for consumers?"
        des="CarbonPay Lets consumer know about merchants commitment with a new badge updated automatically on CarbonPay checkout, receipts, and invoices. In our website consumers track summary of their Carbon Capture efforts and how much impact it was able to create. It helps create better habits that helps the planet."
        img={consumer}
        direction=""
      />
      <StakeHolders
        cards={cards}
        title="CarbonPay for Consumers"
        grid="grid-cols-4"
      />
    </div>
  );
}

export default ForConsumer;
