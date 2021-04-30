import React from "react";
import FrontPage from "../home/FrontPage";
import image from "../../../assets/images/neutral/neutral.png";
import cardImage from "../../../assets/images/neutral/cardImage.png";
import purchase from "../../../assets/images/neutral/purchase.jpg";
import WhatImpact from "../../../common/WhatImpact";
import WhyPayment from "../../../common/WhyPayment";
import FlexCard from "../../../common/FlexCard";
function CarbonNeutral() {
  const Carbonclimate = [
    {
      blog:
        "CarbonPay dynamically creates a new Climate Conscious price for each selected item in a merchant’s inventory. ",
      aos: "fade-up",
      time: "1500",
    },
    {
      blog:
        "Consumers see the climate cost of purchasing an item and can pay a small additional amount to make a carbon neutral purchase. ",
      aos: "fade-up",
      time: "1700",
    },
    {
      blog:
        "The carbon is offsets through our network of Carbon Offset non-profits and consumers can learn more through a link in their email receipt.",
      aos: "fade-up",
      time: "1900",
    },
  ];
  return (
    <div>
      <FrontPage
        header="Why Carbon Neutral Purchase?"
        des="Enabling consumers to purchase items online and pay consciously with Carbon Neutral Price for any online transaction "
        img={image}
      />
      <WhatImpact
        title="Carbon Neutral Purchases"
        Carbonclimate={Carbonclimate}
        cardImage={cardImage}
      />
      <WhyPayment
        title="Enabling Carbon Neutral Purchases"
        des="For the first time both merchants and customers can make the choice to be carbon neutral."
      />
      <FlexCard
        title="How Carbon Neutral Purchase works?"
        des="It’s an easy to implement plugin that educates the consumer on the true cost of purchasing an item for the climate and how to pay a climate conscious price to offset the carbon. Merchants can Create CarbonPay account select their E-Commerce Inventory and CarbonPay will dynamically create a new Climate Conscious price for each item in the inventory. Now, in every e-commerce transaction a customer can select a Climate Conscious price and the CarbonPay helps offset the carbon with it’s network of Carbon Offset non-profits."
        img={purchase}
        direction=""
      />
    </div>
  );
}

export default CarbonNeutral;
