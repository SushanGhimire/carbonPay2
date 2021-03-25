import React from "react";
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
      <WhatImpact />
      <MerchantConsumer />
    </div>
  );
}

export default Home;
