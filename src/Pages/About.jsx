import React from "react";

import ShairdHeader from "../Components/ShairdHeader";
import BrandStory from "../Components/AboutComponents/BrandStory";
import OurStrength from "../Components/AboutComponents/OurStrength";

import NationStory from "../Components/AboutComponents/NationStory";
import { Weading } from "../Components/AboutComponents/Weading";
import KacchiBasmoti from "../Components/AboutComponents/KacchiBasmoti";
import Rezala from "../Components/AboutComponents/Rezala";

const About = () => {
  return (
    <div className="bg-[#F7F2E2]">
      <ShairdHeader about="About Us" path="about"></ShairdHeader>
      <BrandStory></BrandStory>
      <OurStrength></OurStrength>
      <NationStory></NationStory>
      <Weading></Weading>
      <KacchiBasmoti></KacchiBasmoti>
      <Rezala></Rezala>
    </div>
  );
};

export default About;
