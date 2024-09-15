import { useEffect } from "react";
import weadingMenu from "../../assets/images/sultan-dine-about/Wedding-Bonanza.png.webp";
import AOS from "aos";
export const Weading = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  return (
    <div className="md:max-w-screen-xl mx-auto py-5 px-4 overflow-hidden">
      <div className="md:flex justify-around md:gap-10 items-center">
        <div data-aos="fade-right" className="md:w-1/2 w-full md:pl-8 ">
          <h2 className="italicTtyle pb-5 text-2xl font-semibold text-yellow-500">
            Our Quality
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold text-red-900 py-4">
            Wedding Bonanza
          </h2>
          <p className="text-gray-600  text-[14px]">
            “Sultan’s Dine” – The best Kacchi in Dhaka, is serving Kacchi/Plain
            Polao with Chicken Roast, Beef Rezala, Jali Kabab, Firni/Jarda,
            Borhani & Salad.
          </p>
          <button
            className="bg-yellow-500 hover:text-white py-3 mt-6 transition-all duration-500 ease-in-out
       px-4  rounded-md font-bold"
          >
            ORDER NOW
          </button>
        </div>
        <div data-aos="fade-left" className="md:w-1/2 w-full">
          <img className="pl-3 md:pl-0" src={weadingMenu} alt="" />
        </div>
      </div>
    </div>
  );
};
