import { React } from "react";
import Faq from "./Faq";
import FrontPage from "./FrontPage";
import FundClimate from "./FundClimate";
// import MerchantConsumer from "./MerchantConsumer";
import StakeHolders from "../../../common/StakeHolders";
import WhatImpact from "../../../common/WhatImpact";
import WhyPayment from "../../../common/WhyPayment";
import image from "../../../assets/images/homepage/forest.svg";
import merchant from "../../../assets/images/homepage/merchant.svg";
import consumer from "../../../assets/images/homepage/consumer.svg";
import nature from "../../../assets/images/homepage/nature.svg";
import cardImage from "../../../assets/images/homepage/impact.jpg";
function Home() {
  // let Faqs = [
  //   {
  //     qst: "What on Earth is a carbon offset?",
  //     ans:
  //       "Carbon offsets are a practical and effective way to reduce the effects of climate change by funding renewable energy, forestry, or clean water projects. These projects reduce emissions of carbon dioxide or other greenhouse gases in order to compensate for emissions made elsewhere, like the emissions created from ordering something online. EcoCart calculates the emissions created from your online orders and donates the exact dollar amount required to reduce those emissions directly to these projects on your behalf.",
  //     isTrue: false,
  //     id: "1",
  //   },
  //   {
  //     qst: "How much does EcoCart cost?",
  //     ans:
  //       "A $0.15 transaction fee is included in the Eco Shipping Cost. There is no cost to you, the business owner – the app is free, and we do not charge for Eco Shipping calculations. If you choose to pay for offsets on behalf of your customers, you’ll be making a bigger impact and we’ll offer a reduced fee of $0.03 per transaction.",
  //     isTrue: false,
  //     id: "2",
  //   },
  //   {
  //     qst: "Will EcoCart interfere with my current checkout process?",
  //     ans:
  //       "No, in fact EcoCart works to improve conversion. EcoCart exists within the cart and not the checkout process. Your customers will see that they have the option to make their order carbon neutral while browsing their cart, improving the likelihood that they will continue to checkout and complete their order when they see your brand’s values are aligned with their own.",
  //     isTrue: false,
  //     id: "3",
  //   },
  //   {
  //     qst: "Can I customize how EcoCart looks in my shop?",
  //     ans:
  //       "Of course! EcoCart is fully customizable, putting in control of the look and feel of the experience so you can properly reflect your brand’s values. Or you can simply select our default view that tells the story of your brand’s contribution to the planet in an easily digestible format.",
  //     isTrue: false,
  //     id: "4",
  //   },
  // ];
  const cards = [
    {
      logo: merchant,
      name: "merchant",
      title: "Climate Impact Payment to increase transaction",
      bg: "bg-seconday",
      aos: "fade-down",
    },
    {
      logo: consumer,
      name: "Consumers",
      title: "Make Climate Conscious purchase with impact tracking page",
      aos: "fade-up",
    },
    {
      logo: nature,
      name: "Climate Impact Non-Profit",
      title:
        "Accountability and Incentives for highest net carbon capture efforts",
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
      blog:
        "CarbonPay dynamically selects Non-profit with highest net carbon capture effort",
      aos: "fade-up",
      time: "1700",
    },
    {
      blog: "This creates environment of accountability and innovation",
      aos: "fade-up",
      time: "1900",
    },
    {
      blog:
        "Our software help maximize the long-term impact. CarbonPay buys carbon removal from the exact same Nonprofits.",
      aos: "fade-up",
      time: "2100",
    },
  ];
  return (
    <div>
      <FrontPage
        header="CarbonPay"
        des="Removing Carbon with Every Online Purchase"
        img={image}
      />
      <FundClimate />
      <WhyPayment
        title="Why Payment?"
        des=" Taking 1% of every internet transaction to fund Climate Change effort
          has fastest impact"
      />
      <StakeHolders cards={cards} title="Stakeholders" grid="grid-cols-3" />
      {/* <MerchantConsumer /> */}
      <WhatImpact
        title="What is CarbonPay for Climate Impact and Our planet?"
        Carbonclimate={Carbonclimate}
        cardImage={cardImage}
      />
      {/* <Faq Faq={Faqs} /> */}
    </div>
  );
}

export default Home;
