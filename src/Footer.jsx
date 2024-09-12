import foterImg from "./assets/images/sultan-dine-home/shape_dot.png.webp";
import sultanLogo from "./assets/images/sultan-dine-home/Sultans-Diner-main-logo.png.webp";
const Footer = () => {
  return (
    <div>
      <div
        className=" md:h-[550px]  pt-6 "
        style={{
          backgroundImage: `url(${foterImg})`, // Correct syntax for backgroundImage
          backgroundSize: "",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",

          width: "100%",
          backgroundColor: "#181818",
        }}
      >
        <div className="flex items-center justify-between group ">
          <p className="h-[2px] md:w-[100px] w-[40px] bg-slate-100 group-hover:w-full transition-all duration-300 ease-in-out "></p>
          <img className="w-[180px] " src={sultanLogo} alt="" />
          <p className="h-[2px] md:w-[100px] w-[40px] bg-slate-100 group-hover:w-full transition-all duration-300 ease-in-out "></p>
        </div>

        <div className="grid py-6  md:grid-cols-3 md:container mx-auto grid-cols-1">
          {/* footer infos */}
          <div>
            <h1 className="uppercase text-[18px] font-bold text-gray-200 text-center">
              Address
            </h1>
            <div className="text-center pt-4">
              <p className="text-[15px] text-gray-400">
                House- 146/G (Old), 59 (New)
              </p>
              <p className="text-[15px] py-1 text-gray-400">
                Green Akshay Plaza (1st Floor)
              </p>
              <p className="text-[15px] py-1 text-gray-400">
                Satmasjid Road, Dhanmondi
              </p>
              <p className="text-[15px] py-1 text-gray-400">
                Phone:{" "}
                <span className="text-yellow-500 font-semibold">
                  01775-003218
                </span>{" "}
              </p>

              {/* dowen part */}
              <p className="text-[15px] text-gray-400 font-bold pt-5">
                Corporate Branch
              </p>
              <p className="text-[15px] py-1 text-gray-400">
                House- 41 Road- 52
              </p>
              <p className="text-[15px] py-1 text-gray-400">
                Samsuddin Mansion (1st Floor)
              </p>
              <p className="text-[15px] py-1 text-gray-400">Gulshan 2 Circle</p>
              <p className="text-[15px] py-1 text-gray-400">
                Corporate Number :
                <span className="text-yellow-500 font-semibold">
                  01329-723479
                </span>
              </p>
            </div>
          </div>

          {/* part two */}
          <div>
            <h1 className="uppercase text-[18px] font-bold text-gray-200 text-center">
              Opening hours
            </h1>
            <div className="text-center pt-4">
              <p className="text-[15px] py-4 text-gray-400">
                Everyday: 12:00pm – 11:00pm
              </p>
              <p className="text-[25px] py-1 text-gray-200 uppercase font-bold">
                Book a table
              </p>
              <p className="text-[15px] py-1 text-gray-400">
                Best Kacchi in Town
              </p>
              <p className="text-[15px] py-1 text-gray-400">
                For any complaint or Assistance
              </p>
              <p className="text-[15px] py-1 text-yellow-500">
                info@sultansdinebd.com
              </p>

              {/* dowen part */}
              <p className="text-[15px] text-gray-400 font-bold pt-5">
                Corporate Branch
              </p>
              <p className="text-[15px] py-1 text-gray-400">
                House- 41 Road- 52
              </p>
              <p className="text-[15px] py-1 text-gray-400">
                Samsuddin Mansion (1st Floor)
              </p>
              <p className="text-[15px] py-1 text-gray-400">Gulshan 2 Circle</p>
              <p className="text-[15px] py-1 text-gray-400">
                Corporate Number :
                <span className="text-yellow-500 font-semibold">
                  01329-723479
                </span>
              </p>
            </div>
          </div>
          {/* part 3 */}
          <div className="">
            <h1 className="uppercase text-[18px] font-bold text-gray-200 text-center">
              newsletter
            </h1>
            <div className="text-center pt-4">
              <p className="text-[15px] py-4 text-gray-400">
                Subscribe to the newsletter for all the latest updates
              </p>
              <div className="relative">
                <input
                  className="py-2 max-w-[350px] px-4 bg-[#181818] border-2 border-gray-500"
                  type="email"
                  placeholder="Your Email..."
                />
                <button className="uppercase text-[14px] font-bold absolute md:right-10 top-[1px] py-3 pb-2 px-4 right-8 bg-yellow-500">
                  Subcribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-8 bg-[#1E1D23]">
        <div className="container mx-auto">
          <h2 className="text-gray-200 text-[14px]">
            Copyright © 2023. All Rights Reserved by
            <span className="text-yellow-500 pl-2">Sultan’s Dine</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
