import React from "react";
import FrontPage from "../home/FrontPage";
import climate from "../../../assets/images/climate_change/climateChange12.png";
import temprature from "../../../assets/images/climate_change/temperature.jpg";
// import contribute from "../../../assets/images/climate_change/contribute.jpg";
import save from "../../../assets/images/climate_change/save.jpg";

import FlexCard from "../../../common/FlexCard";
function ClimateChange() {
  return (
    <div>
      <FrontPage
        header="Climate Change Matters"
        des="Preserve our planet for generations to come."
        img={climate}
      />
      <FlexCard
        title="What is climate change?"
        des="According to the EPA, climate change refers to any significant change in the measures of climate lasting for an extended period of time. In other words, climate change includes major changes in temperature, precipitation, or wind patterns that occur over several decades or longer. An analogy we like is that climate change is like a baseball player on steroids. A baseball player will still hit home runs if not taking steroids, but as he takes steroids, the frequency and intensity of the home runs increase. Just like we will still have hurricanes, hot days, and other significant climate events without climate change, the frequency and intensity of these events increases with climate change."
        img={temprature}
        direction="true"
      />
      {/* <FlexCard
        title="How do I contribute to climate change?"
        des="In our everyday lives, we all create carbon emissions which make-up our carbon footprint. According to The Union of Concerned Scientists, the average carbon emissions per person in the United States is 17.62 mT per person or the equivalent of keeping 3.7 passenger cars on the road for a year."
        img={contribute}
        direction=""
      /> */}
      <FlexCard
        title="How can I reduce  carbon with Carbonpay?"
        des="The first step to reducing your carbon is knowing where carbon emissions are coming from. On every transaction you can donate the some percentage of your transaction amount for carbon removal. You can donate according to your wish to make the better environment and better earth."
        img={save}
        direction="true"
      />
    </div>
  );
}
// Both individuals and businesses can calculate their carbon footprints by using our Carbon Calculator. Once you have assessed where your carbon emissions are coming from, you can take action to reduce your footprint. Small changes can make a big difference. Below are a few ideas to help you get started.

export default ClimateChange;
