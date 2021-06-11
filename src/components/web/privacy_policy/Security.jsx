import React from "react";
import CommonCard from "./CommonCard";

function Security() {
  const cards = [
    {
      header: "Security",
      infos: [
        {
          info: " The security of your Personal Information is important to us, and we strive to implement and maintain reasonable, commercially acceptable security procedures and practices appropriate to the nature of the information we store in order to protect it from unauthorized access, destruction, use, modification or disclosure.",
        },
        {
          info: "However, please be aware that no method of transmission over the internet, or method of electronic storage, is 100% secure, and third parties may unlawfully intercept or access transmissions or private communications. We are unable to guarantee the absolute security of your information or that your information or private communications will always remain private. Unauthorized entry or use, hardware or software failure, and other factors may compromise the security of information at any time. Any transmission of information is at your own risk, and we are not responsible for the circumvention of any security measures implemented on the Website or within the Software.",
        },
        {
          info: "The safety and security of your information also depends on you. Information provided through your creation and use of an account (if any) is protected by a password for your privacy and security, and you are responsible for keeping this password confidential. It is important that you prevent unauthorized access to your account and information by using a unique, secure and protected password and limiting access to your password.",
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

export default Security;
