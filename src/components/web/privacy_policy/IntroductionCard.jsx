import React from "react";
import CommonCard from "./CommonCard";

function IntroductionCard() {
  const cards = [
    {
      header: "Introduction",
      infos: [
        {
          info: "CarbonPay, Inc. (“CarbonPay” or “we”) operates the joincarbonpay.com website (the “Website”). In addition, we also operate the CarbonPay application program interface (the “Software”) which you may encounter on the websites of our business-to-business customers (our “B2B Customers”). This Privacy Policy describes the types of information we may collect about you or that you or our B2B Customers may provide to us when you visit the Website or use the Software. It also describes our practices for collecting, using, protecting and disclosing that information.",
        },
        {
          info: "This Privacy Policy applies to information we collect on the Website or through the Software, including information about you that is provided to us by our B2B Customers when you use the Software on such customers’ websites. It does not apply to information collected by us offline or through any other means, including information collected on any other website operated by CarbonPay, its affiliates or any third party. It also does not apply to any other information collected by a third party (including our affiliates) through any means, including information collected through any application or content (other than the Software) that may link to or be accessible from or on the Website.",
        },
        {
          info: "Please read this Privacy Policy carefully to understand our policies and practices regarding your information and how we will treat it. By accessing or using the Website or the Software, you agree to our collection, use, protection and disclosure of your information in accordance with this Privacy Policy. If you do not agree with our policies and practices, do not use the Website or the Software. This Privacy Policy may change from time to time, and your continued use of the Website or the Software after we make changes to this Privacy Policy is deemed to be an acceptance of those changes. Please check this Privacy Policy periodically for updates.",
        },
      ],
    },
  ];
  return (
    <div>
      <CommonCard cards={cards} />
    </div>
  );
}

export default IntroductionCard;
