import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import menuOne from "../../assets/images/sultan-dine-home/Menu-108X95-1.png.webp";
import menuTwo from "../../assets/images/sultan-dine-home/Menu-108X95-2.png.webp";
import menuTheree from "../../assets/images/sultan-dine-home/Menu-108X95-3.png.webp";
import menuFour from "../../assets/images/sultan-dine-home/Menu-108X95-4.png.webp";
import menuFive from "../../assets/images/sultan-dine-home/Menu-108X95-5.png.webp";
import menuFouSix from "../../assets/images/sultan-dine-home/Menu-108X95-6.png.webp";

const MenuItems = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <div className="md:container  mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-6">
        {/* Menu Item 1 */}
        {/* <div
          className="relative group rounded-full transition-all duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div className="relative rounded-full">
            <img
              className="relative z-10 rounded-full max-w-full h-auto py-2 transition-all duration-300 ease-in-out"
              src={menuTwo}
              alt="Beef Rezala"
            />
          </div>
          <h2 className="text-center font-bold text-[12px] group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            Beef Rezala
          </h2>
        </div> */}
        <div
          className="relative group rounded-full transition-all duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div className="relative rounded-full">
            <img
              className="relative z-10 rounded-full max-w-full h-auto py-2 transition-all duration-300 ease-in-out"
              src={menuTwo}
              alt="Kacchi"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px] group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            Beef Rezala
          </h2>
        </div>

        {/* Menu Item 2 */}
        <div
          className="relative group rounded-full transition-all duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div className="relative rounded-full">
            <img
              className="relative z-10 rounded-full max-w-full h-auto py-2 transition-all duration-300 ease-in-out"
              src={menuTheree}
              alt="Kacchi"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px] group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            Kacchi
          </h2>
        </div>

        {/* Menu Item 3 */}
        <div
          className="relative group rounded-full transition-all duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div className="relative rounded-full">
            <img
              className="relative z-10 rounded-full max-w-full h-auto py-2 transition-all duration-300 ease-in-out"
              src={menuFour}
              alt="Rost"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px] group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            Rost
          </h2>
        </div>

        {/* Menu Item 4 */}

        <div
          className="relative group rounded-full transition-all duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div className="relative rounded-full">
            <img
              className="relative z-10 rounded-full max-w-full h-auto py-2 transition-all duration-300 ease-in-out"
              src={menuFive}
              alt="Borhani"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px] group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            Polao
          </h2>
        </div>

        {/* Menu Item 5 */}
        <div
          className="relative group rounded-full transition-all duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div className="relative rounded-full">
            <img
              className="relative z-10 rounded-full max-w-full h-auto py-2 transition-all duration-300 ease-in-out"
              src={menuOne}
              alt="Borhani"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px] group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            Borhani
          </h2>
        </div>

        {/* Menu Item 6 */}
        <div
          className="relative group rounded-full transition-all duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div className="relative rounded-full">
            <img
              className="relative z-10 rounded-full max-w-full h-auto py-2 transition-all duration-300 ease-in-out"
              src={menuFouSix}
              alt="Add On"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px] group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            Add On
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
