import React from "react";

import ShairdHeader from "../Components/ShairdHeader";
import BrandStory from "../Components/AboutComponents/BrandStory";
import OurStrength from "../Components/AboutComponents/OurStrength";

import NationStory from "../Components/AboutComponents/NationStory";

const About = () => {
  return (
    <div className="bg-[#F7F2E2]">
      <ShairdHeader about="About Us" path="about"></ShairdHeader>
      <BrandStory></BrandStory>
      <OurStrength></OurStrength>
      <NationStory></NationStory>
    </div>
  );
};

export default About;
