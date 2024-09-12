import React, { useState, useEffect } from "react";
import rizalaImg from "../../assets/images/sultan-dine-about/Feature-215X131-1.png.webp";
import aboutImg from "../../assets/images/sultan-dine-about/about-imager-4.png.webp";

const Rezala = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="md:container mx-auto overflow-hidden px-4 py-5">
        <div className="flex flex-col-reverse md:flex-row justify-around md:gap-10 items-center">
          {/* Text container */}
          <div
            data-aos="fade-right"
            className="text-container md:w-1/2 w-full md:pl-8"
          >
            <h2 className="italicTtyle pb-5 text-2xl font-semibold text-yellow-500">
              Our Quality
            </h2>
            <h2 className="md:text-5xl text-3xl font-bold text-red-900 py-4">
              Rezala
            </h2>
            <p className="text-gray-600 text-[14px]">
              Rezala either Beef or Mutton is mouthful choices besides our
              regular Kacchi or Polao platter.
            </p>
            <button className="bg-yellow-500 hover:text-white py-3 mt-6 transition-all duration-500 ease-in-out px-4 rounded-md font-bold">
              ORDER NOW
            </button>
          </div>

          {/* Image container */}
          <div
            data-aos="fade-left"
            className="md:w-1/2 image-container w-full md:h-[550px] flex justify-center items-center"
            style={{
              backgroundImage: `url(${aboutImg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed", // Fixes background
            }}
          >
            <img
              className="md:pt-[70px] md:pr-[25px] pr-8 pt-2 hover:transition-all hover:scale-105 ease-in-out md:block mx-auto"
              src={rizalaImg}
              alt=""
              style={{
                transform: `translateY(${(scrollY % 100) - 40}px)`, // Moves image up/down by max 5px
                transition: "transform 0.1s ease-out", // Smooth transition
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rezala;
