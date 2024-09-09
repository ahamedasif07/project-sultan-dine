import menuOne from "../../assets/images/sultan-dine-home/Menu-108X95-1.png.webp";
import menuTwo from "../../assets/images/sultan-dine-home/Menu-108X95-2.png.webp";
import menuTheree from "../../assets/images/sultan-dine-home/Menu-108X95-3.png.webp";
import menuFour from "../../assets/images/sultan-dine-home/Menu-108X95-4.png.webp";
import menuFive from "../../assets/images/sultan-dine-home/Menu-108X95-5.png.webp";
import menuFouSix from "../../assets/images/sultan-dine-home/Menu-108X95-6.png.webp";

const MenuItems = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 py-[60px] gap-4 md:grid-cols-4  lg:grid-cols-6">
        <div className="relative group rounded-full transition-all duration-300 ease-in-out">
          <div className="relative overflow-hidden rounded-full">
            <img
              className="relative z-10 rounded-full py-4 transition-all duration-300 ease-in-out"
              src={menuTwo}
              alt="Beef Rezala"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px]  group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            Beef Rezala
          </h2>
        </div>

        <div className="relative group rounded-full transition-all duration-300 ease-in-out">
          <div className="relative overflow-hidden rounded-full">
            <img
              className="relative z-10 rounded-full py-4 transition-all duration-300 ease-in-out"
              src={menuTheree}
              alt="Beef Rezala"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px]  group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            kacchi
          </h2>
        </div>

        <div className="relative group rounded-full transition-all duration-300 ease-in-out">
          <div className="relative overflow-hidden rounded-full">
            <img
              className="relative z-10 rounded-full py-4 transition-all duration-300 ease-in-out"
              src={menuFour}
              alt="Beef Rezala"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px]  group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            rost
          </h2>
        </div>

        <div className="relative group rounded-full transition-all duration-300 ease-in-out">
          <div className="relative overflow-hidden rounded-full">
            <img
              className="relative z-10 rounded-full py-4 transition-all duration-300 ease-in-out"
              src={menuFive}
              alt="Beef Rezala"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px]  group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            Polao
          </h2>
        </div>

        <div className="relative group rounded-full transition-all duration-300 ease-in-out">
          <div className="relative overflow-hidden rounded-full">
            <img
              className="relative z-10 rounded-full py-4 transition-all duration-300 ease-in-out"
              src={menuOne}
              alt="Beef Rezala"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px]  group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            Borhani
          </h2>
        </div>
        <div className="relative group rounded-full transition-all duration-300 ease-in-out">
          <div className="relative overflow-hidden rounded-full">
            <img
              className="relative z-10 rounded-full py-4 transition-all duration-300 ease-in-out"
              src={menuFouSix}
              alt="Beef Rezala"
            />
            <div className="absolute inset-0 bg-yellow-400 z-0 transition-all duration-500 ease-in-out scale-0 group-hover:scale-125 rounded-full"></div>
          </div>
          <h2 className="text-center font-bold text-[12px]  group-hover:text-yellow-500 transition-all duration-300 ease-in-out scale-105 uppercase mt-2">
            add on
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
