import React from "react";
import BulletPointsCard from "./BulletPointsCard";

function Disclosure() {
  const header = "Disclosure of Your Information";
  const subheader =
    "We may disclose Personal Information that we collect or that you or our B2B Customers provide to us as follows:";
  const points = [
    {
      point: "To our affiliates;",
    },
    {
      point:
        "To contractors, service providers, consultants, agents and other third parties which we use to support our business, provide the Website, the Software and their respective content and services, or to assist us in analyzing how the Website or the Software is used. These third parties have access to your Personal Information only to perform tasks on our behalf and are obligated not to disclose or use your Personal Information for any other purpose;",
    },
    {
      point:
        "To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of CarbonPay’s assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceedings, in which Personal Information held by CarbonPay about the Website’s or Software’s users is among the assets transferred;",
    },
    {
      point: "For any purpose with your consent.",
    },
  ];
  const subheader2 =
    "Notwithstanding any other provisions of this Privacy Policy, we also reserve the right to access, preserve and disclose any information, including Personal Information, as we believe is necessary, in our sole and absolute discretion, for the following:";
  const points2 = [
    {
      point: "To our affiliates;",
    },
    {
      point:
        "To respond to legal requirements, including to comply with any court order, law or legal process and to respond to any government or regulatory request;",
    },
    {
      point:
        "To enforce or apply our policies and agreements, including any applicable terms of use and this Privacy Policy;",
    },
    {
      point:
        "To detect, prevent or otherwise address fraud, security, trust and safety or technical issues; or",
    },
    {
      point:
        "To protect the rights, property or safety of CarbonPay, the Website’s or the Software’s users, any third parties or the public in general.",
    },
  ];
  return (
    <div>
      <BulletPointsCard header={header} subheader={subheader} points={points} />
      <BulletPointsCard subheader={subheader2} points={points2} />
      <div className="flex flex-col space-y-3">
        <div>
          We may disclose aggregated information about our users, and
          information that does not identify any individual, without
          restriction.
        </div>
        <div className="text-primary text-2xl font-semibold">
          Accessing and Correcting Your Information
        </div>
        <div>
          If you have registered and created a user account on the Website, you
          can review and change your Personal Information by logging into your
          account.
        </div>
      </div>
    </div>
  );
}

export default Disclosure;
