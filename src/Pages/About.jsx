import React from "react";

import ShairdHeader from "../Components/ShairdHeader";
import BrandStory from "../Components/AboutComponents/BrandStory";

const About = () => {
  return (
    <div className="bg-[#F7F2E2]">
      <ShairdHeader about="About Us" path="about"></ShairdHeader>
      <BrandStory></BrandStory>
    </div>
  );
};

export default About;
