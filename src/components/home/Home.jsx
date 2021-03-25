import React from "react";
import Footer from "../static/Footer";
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
      <Footer />
    </div>
  );
}

export default Home;
