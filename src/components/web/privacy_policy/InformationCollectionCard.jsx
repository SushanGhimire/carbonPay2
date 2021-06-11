import React from "react";
import CommonCard from "./CommonCard";

function InformationCollectionCard() {
  const cards = [
    {
      header: "Information Collection – Information Collected Automatically",
      infos: [
        {
          info: " As you navigate through and interact with the Website, we may use automatic data collection technologies to collect certain information about your equipment and browsing actions and patterns. This may include information that your browser sends whenever you visit the Website (“Log Data”), such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, location data, the pages of the Website that you visit, the time and date of your visit, the time spent on those pages and other usage statistics.",
        },
        {
          info: "The technology we use for this automatic data collection on the Website may include cookies. Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and placed on the hard drive of your computer. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. The help feature on most browsers provides information on how to accept cookies, how to disable cookies or how to receive notifications when receiving a new cookie. Please note, however, that if you do not accept cookies, you may not be able to use some features of the Website.",
        },
        {
          info: "We may also use automatic data collection technology to collect information about your online activities over time and across third-party websites or other online services (also known as behavioral tracking). Currently, the automatic data collection technology used on the Website does not respond to “Do Not Track” settings and similar mechanisms.",
        },
        {
          info: "In addition, we may use third-party services, such as Google Analytics, that collect, monitor and analyze usage data on the Website. We may also use remarketing services (or behavioral advertising services) to advertise CarbonPay’s services to you on third-party websites after you have visited the Website. As discussed further below, these third-party service providers have their own privacy policies addressing how they use such information.",
        },
        {
          info: "When your customer selects to donate to carbon offset projects through CarbonPay within your store, we may send them an email  to provide information on the project they donated to. This is only for the sake of transparency. We will NEVER distribute or sell customer email addresses to third parties.",
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

export default InformationCollectionCard;
