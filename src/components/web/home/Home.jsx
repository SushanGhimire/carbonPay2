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
      name: "Merchants: ???",
      title: "Climate Impact Payment to increase transaction.",
      bg: "bg-seconday",
      aos: "fade-down",
    },
    {
      logo: consumer,
      name: "Consumers: ???",
      title: "Make Climate Conscious purchase with impact tracking page.",
      aos: "fade-up",
    },
    {
      logo: nature,
      name: "Environmental Non-profits: ???",
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
      blog: "We dynamically select Non-profit with highest net carbon capture effort.",
      aos: "fade-up",
      time: "1700",
    },
    {
      blog: "We create an environment of accountability and innovation with our tracking systems.",
      aos: "fade-up",
      time: "1900",
    },
    {
      blog: "We help maximize the long-term impact of carbon-removal, purchased from the best non-profits ",
      aos: "fade-up",
      time: "2100",
    },
  ];
  return (
    <div>
      <VideoFrontPage />
      <FundClimate />
      <WhyPayment
        title="Why Pay?"
        des="Taking 1% of every  transaction to fund Carbon removal efforts has the fastest, easiest, and best impact."
      />
      <StakeHolders cards={cards} title="Stakeholders" grid="grid-cols-3" />
      {/* <MerchantConsumer /> */}
      <WhatImpact
        title="What does CarbonPay do for our climate and planet? "
        Carbonclimate={Carbonclimate}
        cardImage={cardImage}
      />
    </div>
  );
}

export default Home;
