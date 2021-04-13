import { React } from "react";
import Faq from "./Faq";
import FrontPage from "./FrontPage";
import FundClimate from "./FundClimate";
import MerchantConsumer from "./MerchantConsumer";
import StakeHolders from "./StakeHolders";
import WhatImpact from "./WhatImpact";
import WhyPayment from "./WhyPayment";

function Home() {
  return (
    <div>
      <FrontPage />
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
