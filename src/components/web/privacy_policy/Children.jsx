import React from "react";
import CommonCard from "./CommonCard";

function Children() {
  const cards = [
    {
      header: "Children’s Privacy",
      infos: [
        {
          info: "Only persons age 18 or older have permission to access the Website or utilize the Software. In particular, neither the Website nor the Software is intended for children under 13 years of age. We do not knowingly collect Personal Information from children under 13. If you are under 13 years of age, do not provide any information on the Website or via the Software or otherwise provide any information about yourself to us, including your name, address, telephone number or email address. If we learn that we have collected or received Personal Information from a child under age 13 without verification of parental consent, we will take steps to delete that information. ",
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

export default Children;
