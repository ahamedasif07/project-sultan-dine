import React from "react";
import miniBaner from "../../assets/images/sultan-dine-home/Offer-1063X639-1.png.webp";
import fetureImage from "../../assets/images//sultan-dine-home/Feature-215X131-1-1.png.webp";
import kacchiBg from "../../assets/images/sultan-dine-home/h1_banner2-1.png.webp";

export const ExplorText = () => {
  return (
    <div className="md:flex justify-center gap-12">
      <div className="relative">
        {/* Image */}
        <img
          className="h-[300px] w-full object-cover"
          src={miniBaner}
          alt="img"
        />

        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>

        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center text-2xl font-bold">
          <h2 className="mb-2 text-3xl">Explore best taste</h2>
          <h2 className="text-xl">Where Flavors Speak the Story of a Nation</h2>
          <button className="mt-4 text-[14px] px-4 py-2 bg-red-800  hover:bg-yellow-600 transition-all duration-500 ease-in-out rounded-md">
            ORDER NOW
          </button>
        </div>
      </div>

      <div className="flex items-center  h-[300px] px-4 pt-4 md:pt-0">
        <div className="w-1/2 md:pl-9">
          <h2 className="text-2xl font-bold">
            Any <br />
            offers
          </h2>
          <h2 className="text-[12px] font-semibold text-gray-700 py-2">
            Best deal of <br /> Chunky meat
          </h2>
          <h2 className="text-3xl flex items-center font-bold text-red-800">
            BDT 399++
          </h2>
        </div>
        <div className="rounded-full w-1/2">
          <img
            className="
          hover:scale-110 transition-all duration-500 easy-in-out"
            src={fetureImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
