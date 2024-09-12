import React from "react";
import ShairdHeader from "../Components/ShairdHeader";
import TermsAndConditions from "../Components/Catering-components/TermsAndConditions";
import Dishes from "../Components/Catering-components/Dishes";
import HomeSarvices from "../Components/HomeComponents/HomeSarvices";

const Catering = () => {
  return (
    <div>
      <ShairdHeader about="Catering" path="catering"></ShairdHeader>
      <TermsAndConditions></TermsAndConditions>
      <Dishes></Dishes>
      <div className="py-10">
        <HomeSarvices></HomeSarvices>
      </div>
    </div>
  );
};

export default Catering;
