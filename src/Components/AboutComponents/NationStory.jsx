import React from "react";
import nationIMg from "../../assets/images/sultan-dine-about/2_optimized.jpg.webp";

const NationStory = () => {
  return (
    <div>
      <div className="py-4">
        <div className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${nationIMg})`, // Gradient overlay with background image
              backgroundSize: "cover", // Adjusts the size of the background image
              backgroundPosition: "center", // Centers the image
              height: "550px", // Set a height for the div
            }}
            className="w-full flex  flex-col items-center justify-center"
          >
            <h2 className="text-center px-4 flex items-center text-4xl  text-gray-200 font-extrabold">
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=40&pause=1000&color=F4F7E9&width=550&height=100&lines=Where+Flavors+speaks;+the+Story+of+a+Nation"
                  alt="Typing SVG"
                />
              </a>
            </h2>
            <button
              className="bg-yellow-500 hover:text-white py-3 mt-6 transition-all duration-500 ease-in-out
       px-4  rounded-md font-bold"
            >
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationStory;
