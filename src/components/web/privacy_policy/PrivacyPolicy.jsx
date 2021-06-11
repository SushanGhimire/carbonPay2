import React from "react";
import Advertising from "./Advertising";
import Changes from "./Changes";
import Children from "./Children";
import Disclosure from "./Disclosure";
import InformationCollectionCard from "./InformationCollectionCard";
import IntroductionCard from "./IntroductionCard";
import Security from "./Security";
import ThirdParties from "./ThirdParties";
import UseOfInformation from "./UseOfInformation";

function PrivacyPolicy() {
  return (
    <div className="py-10 px-20">
      <div className="flex justify-center items-center">
        <div className="flex-1 bg-primary h-0.5 riunded-full"></div>
        <div className="px-5 text-3xl font-semibold text-primary">
          Privacy Policy
        </div>
        <div className="flex-1 bg-primary h-0.5 riunded-full"></div>
      </div>
      <div className="flex flex-col bg-white rounded-3xl shadow-2xl py-10 px-20 space-y-14">
        <IntroductionCard />
        <InformationCollectionCard />
        <UseOfInformation />
        <Disclosure />
        <Security />
        <ThirdParties />
        <Advertising />
        <Children />
        <Changes />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
