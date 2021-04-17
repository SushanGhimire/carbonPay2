import { React } from "react";
import Faq from "./Faq";
import FrontPage from "./FrontPage";
import FundClimate from "./FundClimate";
import MerchantConsumer from "./MerchantConsumer";
import StakeHolders from "./StakeHolders";
import WhatImpact from "./WhatImpact";
import WhyPayment from "./WhyPayment";
import image from "../../../assets/images/homepage/forest.svg";
function Home() {
  let Faqs = [
    {
      qst: "What on Earth is a carbon offset?",
      ans:
        "Carbon offsets are a practical and effective way to reduce the effects of climate change by funding renewable energy, forestry, or clean water projects. These projects reduce emissions of carbon dioxide or other greenhouse gases in order to compensate for emissions made elsewhere, like the emissions created from ordering something online. EcoCart calculates the emissions created from your online orders and donates the exact dollar amount required to reduce those emissions directly to these projects on your behalf.",
      isTrue: false,
      id: "1",
    },
    {
      qst: "How much does EcoCart cost?",
      ans:
        "A $0.15 transaction fee is included in the Eco Shipping Cost. There is no cost to you, the business owner – the app is free, and we do not charge for Eco Shipping calculations. If you choose to pay for offsets on behalf of your customers, you’ll be making a bigger impact and we’ll offer a reduced fee of $0.03 per transaction.",
      isTrue: false,
      id: "2",
    },
    {
      qst: "Will EcoCart interfere with my current checkout process?",
      ans:
        "No, in fact EcoCart works to improve conversion. EcoCart exists within the cart and not the checkout process. Your customers will see that they have the option to make their order carbon neutral while browsing their cart, improving the likelihood that they will continue to checkout and complete their order when they see your brand’s values are aligned with their own.",
      isTrue: false,
      id: "3",
    },
    {
      qst: "Can I customize how EcoCart looks in my shop?",
      ans:
        "Of course! EcoCart is fully customizable, putting in control of the look and feel of the experience so you can properly reflect your brand’s values. Or you can simply select our default view that tells the story of your brand’s contribution to the planet in an easily digestible format.",
      isTrue: false,
      id: "4",
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
      <WhyPayment />
      <StakeHolders />
      <MerchantConsumer />
      <WhatImpact />
      <Faq Faq={Faqs} />
    </div>
  );
}

export default Home;
