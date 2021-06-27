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
        "Choose to make the purchase climate neutral or even contribute extra.",
      aos: "fade-up",
    },
    {
      logo: tracking,
      title:
        "Track your Carbon Capture efforts and the positive impact of your purchases.",
      aos: "fade-down",
    },
    {
      logo: capture,
      title:
        "Creates environmentally-friendly buying habits and spreads action against climate change.",
      aos: "fade-up",
    },
  ];
  return (
    <div>
      <FrontPage
        header="CarbonPay for Consumer"
        des="Saving the Earth while buying what you want"
        img={image}
      />
      <FlexCard
        title="What is CarbonPay for consumers?"
        des="CarbonPay lets consumers know about merchants' commitment with a new unique badge updated automatically on CarbonPay checkout, receipts, and invoices. In our website, consumers track the summary of their Carbon Capture efforts and how much impact they were able to create.  As a result, this helps create better habits which benefit our planet."
        img={consumer}
        direction=""
      />
      <StakeHolders
        cards={cards}
        title="CarbonPay for Consumers"
        grid={false}
      />
    </div>
  );
}

export default ForConsumer;
