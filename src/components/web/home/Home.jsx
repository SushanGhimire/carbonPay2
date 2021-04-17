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
      <Faq />
    </div>
  );
}

export default Home;
