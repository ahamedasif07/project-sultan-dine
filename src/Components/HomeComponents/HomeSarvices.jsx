import React, { useEffect } from "react";
import delebaryPng from "../../assets/images/sultan-dine-home/delebary.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const HomeSarvices = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 100,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  return (
    <div className="md:container   mx-auto">
      <div className="grid overflow-hidden md:grid-cols-3 justify-center gap-6 grid-cols-1 py-4">
        <div
          data-aos="fade-right"
          className="md:flex text-center  flex rounded-md flex-col items-center   gap-2 border-dashed border-2 hover:border-red-800 transition-all duration-500 ease-in-out"
        >
          <img className="w-[80px]" src={delebaryPng} alt="" />
          <div className="">
            <h2 className="text-xl font-bold text-red-800">Home Delivery</h2>
            <p className="text-[13px] text-gray-600 pt-1">
              Order online to get your food at doorstep.
            </p>
          </div>
        </div>
        <div
          data-aos="flip-up"
          className="md:flex  text-center flex flex-col rounded-md items-center   gap-2 border-dashed border-2 hover:border-red-800 transition-all duration-500 ease-in-out"
        >
          <img className="w-[80px]" src={delebaryPng} alt="" />
          <div className="">
            <h2 className="text-xl font-bold text-red-800">Dine-in</h2>
            <p className="text-[13px] text-gray-600 pt-1">
              Order online to get your food at doorstep.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="md:flex  text-center flex flex-col rounded-md items-center   gap-2 border-dashed border-2 hover:border-red-800 transition-all duration-500 ease-in-out"
        >
          <img className="w-[80px]" src={delebaryPng} alt="" />
          <div className="">
            <h2 className="text-xl font-bold text-red-800">Take Away</h2>
            <p className="text-[13px] text-gray-600 pt-1">
              Order online to get your food at doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
