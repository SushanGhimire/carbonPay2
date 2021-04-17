import React from "react";
import FrontPage from "../home/FrontPage";
import front from "../../../assets/images/offset/offset1.png";
import carbonoffset from "../../../assets/images/offset/carbonOffset.jpeg";
import FlexCard from "../../../common/FlexCard";
import WhatOffset from "./WhatOffset";
function offset() {
  return (
    <div>
      <FrontPage
        header="Carbon Offsets "
        des="A cost-effective way to reduce emissions."
        img={front}
      />
      <FlexCard
        title="Carbon Offsets Explained"
        des="Carbon offsets let you help build projects in communities across the country that reduce greenhouse gas (GHG) emissions beyond what you can achieve through individual action. Carbon offsets are purchased to fund these projects and diminish the impact of your own GHG emissions, even though the projects are located elsewhere. Carbon Offsets make environmental and economic sense- for emissions that are impossible to reduce, you can use funds to help reduce emissions elsewhere."
        img={carbonoffset}
        direction=""
      />
      <WhatOffset />
    </div>
  );
}

export default offset;
