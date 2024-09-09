import React from "react";
import banerImg from "../../assets/images/sultan-dine-home/Offer-1063X639-1.png.webp";

const Benar = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${banerImg})`, // Gradient overlay with background image
          backgroundSize: "cover", // Adjusts the size of the background image
          backgroundPosition: "center", // Centers the image
          height: "550px", // Set a height for the div
        }}
        className="w-full flex  flex-col items-center justify-center"
      >
        <h2 className="text-center flex items-center text-6xl  text-[#FFC222] font-extrabold">
          BEST KACCHI IN TOWN
        </h2>
        <button
          className="bg-white py-3 mt-6
       px-4  rounded-md font-bold"
        >
          ORDER NOW
        </button>
      </div>
      <div className="w-full   flex flex-col items-center absolute bottom-[-25px] ">
        <button
          className="bg-[#880000] text-white   py-3 
       px-4 uppercase rounded-md font-bold"
        >
          menus
        </button>
      </div>
    </div>
  );
};

export default Benar;
