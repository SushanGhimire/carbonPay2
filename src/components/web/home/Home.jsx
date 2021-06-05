import { React } from "react";
import FundClimate from "./FundClimate";
import StakeHolders from "../../../common/StakeHolders";
import WhatImpact from "../../../common/WhatImpact";
import WhyPayment from "../../../common/WhyPayment";

import merchant from "../../../assets/images/homepage/merchant.svg";
import consumer from "../../../assets/images/homepage/consumer.svg";
import nature from "../../../assets/images/homepage/nature.svg";
import cardImage from "../../../assets/images/homepage/impact.jpg";
import VideoFrontPage from "./VideoFrontPage";
function Home() {
  const cards = [
    {
      logo: merchant,
      name: "Merchant",
      title: "Climate Impact Payment to increase transaction.",
      bg: "bg-seconday",
      aos: "fade-down",
    },
    {
      logo: consumer,
      name: "Consumers",
      title: "Make Climate Conscious purchase with impact tracking page.",
      aos: "fade-up",
    },
    {
      logo: nature,
      name: "Climate impact non-Profit",
      title:
        "Accountability and Incentives for highest net carbon capture efforts.",
      aos: "fade-down",
    },
  ];
  const Carbonclimate = [
    {
      blog: "We direct 100% of merchant contribution to carbon removal.",
      aos: "fade-up",
      time: "1500",
    },
    {
      blog: "CarbonPay dynamically selects Non-profit with highest net carbon capture effort.",
      aos: "fade-up",
      time: "1700",
    },
    {
      blog: "This creates environment of accountability and innovation.",
      aos: "fade-up",
      time: "1900",
    },
    {
      blog: "Our software help maximize the long-term impact. CarbonPay buys carbon removal from the exact same Nonprofits.",
      aos: "fade-up",
      time: "2100",
    },
  ];
  return (
    <div>
      <VideoFrontPage />
      <FundClimate />
      <WhyPayment
        title="Why payment?"
        des=" Taking 1% of every internet transaction to fund Climate Change effort
          has fastest impact."
      />
      <StakeHolders cards={cards} title="Stakeholders" grid="grid-cols-3" />
      {/* <MerchantConsumer /> */}
      <WhatImpact
        title="What is CarbonPay for climate impact and our planet?"
        Carbonclimate={Carbonclimate}
        cardImage={cardImage}
      />
    </div>
  );
}

export default Home;
