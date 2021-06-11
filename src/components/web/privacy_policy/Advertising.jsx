import React from "react";
import CommonCard from "./CommonCard";

function Advertising() {
  const cards = [
    {
      header: "Behavioral Advertising",
      infos: [
        {
          info: "As stated above, we may also use third-party remarketing services to advertise CarbonPay’s services to you on third-party websites after you have visited the Website. We and our third-party vendors may use cookies or other tracking technologies to optimize and serve advertisements to you on third-party websites based on your past visits to the Website. The third-party vendors which we may use include Google Inc. and Facebook Inc. For more information on the privacy practices of Google and Facebook (including how to opt out from tracking technology and interest-based advertising), please visit the Google and Facebook data or privacy webpages. ",
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

export default Advertising;
