import { useEffect } from "react";
import AOS from "aos";
import baner1 from "../../assets/images/sultan-dine-about/Banner-478X377-1.jpg.webp";
import baner2 from "../../assets/images/sultan-dine-about/Banner-629X424.jpg.webp";
import topRecipe from "../../assets/images/sultan-dine-about/Top-Recipes-401X552.png.webp";

const BrandStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  return (
    <div className="md:max-w-screen-xl mx-auto md:py-16 py-10">
      <div className="md:flex   items-center md:gap-10 ">
        <div data-aos="fade-up" className="md:w-1/2 px-4">
          <h2 className="font-bold text-5xl">Brand Story</h2>
          <p className="text-[13px] text-gray-500 py-5">
            Sultan’s Dine serves as an oasis of culinary history in the bustling
            heart of Dhaka, famed for offering the authentic and halal flavors
            of Kacchi to every Table.
          </p>
          <p className="text-[13px] text-gray-500 py-3">
            Every dish is a testament to our commitment to authentic recipes and
            the Principles of halal cuisine. Our restaurant has earned its
            reputation for serving the ‘best Kacchi in town,’ seamlessly
            blending the royal culinary tradition with the vibrant tapestry of
            local food culture. Our Sultani Mutton Tehari, among other dishes,
            is more than just a meal; it’s a narrative spoken through the
            language of distinctive, halal & top-notch ingredients. At Sultan’s
            Dine, we present a dining experience that transcends the plate,
            taking guests on a journey through time with every bite.
          </p>
          <p className="text-[13px] text-gray-500 py-3">
            Coupled with our warm hospitality and adaptable dining options, we
            address the modern demands of living while staying true to age-old
            traditions. Join us at Sultan’s Dine, where we honor and celebrate
            our country’s rich culinary heritage, one authentic and halal plate
            of Kacchi at a time.
          </p>
          <button className="py-3 px-4 bg-yellow-500 text-[14px] font-semibold rounded-md hover:text-white transition-all duration-300 ease-in-out">
            Contact now
          </button>
        </div>
        <div className="md:w-1/2 md:flex gap-3 px-4">
          <div data-aos="fade-up" className="md:w-1/2 w-full  relative">
            <img
              className="mt-2 w-full rounded-md md:absolute top-0 transition-all duration-500 ease-in-out hover:-top-2"
              src={topRecipe}
              alt=""
            />
          </div>

          <div data-aos="fade-up" className="md:w-1/2 relative">
            <img
              className="mt-2 w-full rounded-md relative transition-all duration-500 ease-in-out hover:-translate-y-2"
              src={baner1}
              alt=""
            />
            <img
              className="mt-4 w-full rounded-md relative transition-all duration-500 ease-in-out hover:-translate-y-2"
              src={baner2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
