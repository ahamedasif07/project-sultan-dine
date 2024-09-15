import { useEffect } from "react";
import AOS from "aos";
import uniteDesign from "../../assets/images/sultan-dine-about/Untitled-design-1.png.webp";
import uniteDesign2 from "../../assets/images/sultan-dine-about/Untitled-design-2.png.webp";
import uniteDesign3 from "../../assets/images/sultan-dine-about/Untitled-design-4.png";

const OurStrength = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  return (
    <div className="md:max-w-screen-2xl px-4 mx-auto py-5 overflow-hidden">
      <h2 className="md:text-5xl text-3xl font-bold text-center py-6">
        Our Strength
      </h2>
      <div className=" md:flex md:justify-around justify-center  mx-auto ">
        <img
          data-aos="fade-up"
          className="md:w-[300px] w-[200px] mx-auto "
          src={uniteDesign}
          alt=""
        />
        <img
          data-aos="fade-down"
          className="md:w-[300px] w-[200px] mx-auto"
          src={uniteDesign2}
          alt=""
        />
        <img
          data-aos="fade-up"
          className="md:w-[300px]  w-[200px] mx-auto"
          src={uniteDesign3}
          alt=""
        />
      </div>
    </div>
  );
};

export default OurStrength;
