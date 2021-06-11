import React from "react";
import CommonCard from "./CommonCard";

function ThirdParties() {
  const cards = [
    {
      header: "Third Parties",
      infos: [
        {
          info: "Some applications or tracking technology on the Website are served by third parties, which may use cookies or other tracking technologies to collect information about you when you use the Website. The information they collect may be associated with your Personal Information or they may collect information, including Personal Information, about your online activities over time and across different websites and other online services. They may use this information to provide you with interest-based, or behavioral, advertising or other targeted content. We do not control these third parties’ tracking technologies or how they may be used.",
        },
        {
          info: "This Privacy Policy addresses only our collection, use, protection and disclosure of information collected by us on or through the Website or the Software and that you or our B2B Customers provide to us on or through the Website or the Software. It does not apply to the practices of third parties that we do not own, control, employ or manage, including any third-party websites, applications, services or businesses (including the practices of our B2B Customers). If you disclose your information to others, different rules may apply to their use or disclosure of the information you disclose to them. For example, the Website may contain links to other sites that are not operated by us, and if you click on such third-party links, you will be directed to that third party’s site.",
        },
        {
          info: "You acknowledge that if you provide information to third parties, that information will be subject to the privacy policies of those third parties, which may differ from this Privacy Policy. We have no control over and are not responsible for the content, privacy policies, or practices of third parties, and we encourage you to ask questions before disclosing your information to others. We strongly advise you to review the privacy policy of every site you visit.",
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

export default ThirdParties;
