import React from "react";
import CommonCard from "./CommonCard";

function Changes() {
  const cards = [
    {
      header: "Changes to This Privacy Policy",
      infos: [
        {
          info: "The date this Privacy Policy was last revised is identified at the top of this page. We reserve the right to update or change our Privacy Policy at any time by posting the updated or new Privacy Policy on this page. If we make any material changes to this Privacy Policy, we will also notify you by email to the email address you have provided to us (if any) or by placing a prominent notice on the Website. All amended terms automatically take effect after they are initially posted on this page, unless a change in any applicable law requires immediate amendment.",
        },
        {
          info: "Use of information we collect or that you or our B2B Customers provide to us is subject to the Privacy Policy in effect at the time such information is collected or provided. You are responsible for ensuring that we have an up-to-date active and deliverable email address for you and for periodically visiting the Website and this Privacy Policy to check for any changes. Your continued use of the Website or the Software after we post any modifications to the Privacy Policy on this page will constitute your acknowledgement of the modifications and your consent to abide and be bound by the modified Privacy Policy.",
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

export default Changes;
