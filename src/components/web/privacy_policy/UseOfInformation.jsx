import React from "react";
import BulletPointsCard from "./BulletPointsCard";

function UseOfInformation() {
  const header = "Use of Your Information";
  const subheader =
    "We use information that we collect about you or that you or your end customers, provide to us, including any Personal Information, for the following:";
  const points = [
    {
      point:
        "To provide, enhance, improve and develop the Website, the Software, future  products, and their respective content and services;",
    },
    {
      point:
        "To provide you with information or services that you request from us. For example, if you request additional information by providing your email address, we will use such email address to send the requested information;",
    },
    {
      point:
        "To provide our B2B Customers with information or services in connection with the Software. For example, if you use the Software on a B2B Customer’s website to apply renewable energy credits to such B2B Customer’s shipment of products to you, we will use your provided zip code to calculate the amount of renewable energy credits needed to cover such shipment;",
    },
    {
      point: "To provide you with notices about your account;",
    },
    {
      point:
        "To provide end customers with updates about their carbon offset donations;",
    },
    {
      point:
        "To fulfill any other purpose for which you provide such information;",
    },
    {
      point:
        "To carry out our obligations and enforce our rights arising from any agreements entered into between you and us, or between our B2B Customers and us, including this Privacy Policy and any applicable terms of use for the Website or the Software;",
    },
    {
      point:
        "To resolve disputes and troubleshoot problems, and to prevent potentially unsafe, prohibited or illegal activitie",
    },
    {
      point:
        "In any other way we may describe when you provide such information; and",
    },
    {
      point: "For any other purpose with your consent.",
    },
  ];
  return (
    <div>
      <BulletPointsCard header={header} subheader={subheader} points={points} />
    </div>
  );
}

export default UseOfInformation;
