import kacchiImg from "../../assets/images/sultan-dine-about/Feature-148X138.png.webp";
import aboutImg from "../../assets/images/sultan-dine-about/about-imager-4.png.webp";

const KacchiBasmoti = () => {
  return (
    <div className="md:container mx-auto overflow-hidden px-4 py-5">
      <div className="md:flex  justify-around md:gap-10 items-center">
        <div
          data-aos="fade-right"
          className="md:w-1/2 w-full md:h-[550px] flex justify-center items-center"
          style={{
            backgroundImage: `url(${aboutImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            className="md:pt-[150px] md:pl-[150px] hover:transition-all hover:scale-105 ease-in-out md:block mx-auto"
            src={kacchiImg}
            alt=""
          />
        </div>

        <div data-aos="fade-left" className="md:w-1/2 w-full md:pl-8  ">
          <h2 className="italicTtyle pb-5 text-2xl font-semibold text-yellow-500">
            Our Quality
          </h2>
          <h2 className="md:text-5xl text-3xl font-bold text-red-900 py-4">
            Kacchi Bashmati
          </h2>
          <p className="text-gray-600  text-[14px]">
            Kacchi made with Basmati Rice, Mutton or Chicken Roast and exciting
            add-ons such as Jali Kabab, Borhani etc. is sufficient combo for
            your squad.
          </p>
          <button
            className="bg-yellow-500 hover:text-white py-3 mt-6 transition-all duration-500 ease-in-out
       px-4  rounded-md font-bold"
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default KacchiBasmoti;
