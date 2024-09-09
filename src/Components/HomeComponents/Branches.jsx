import { CiLocationOn } from "react-icons/ci";
import mapImg from "../../assets/images/sultan-dine-home/map.jpg";

const Branches = () => {
  const locations = [
    {
      location: "Dhanmondi",
      mapUrl: "https://www.google.com/maps?q=Dhanmondi",
    },
    {
      location: "Gulshan 2",
      mapUrl: "https://www.google.com/maps?q=Gulshan+2",
    },
    {
      location: "Bailyroad",
      mapUrl: "https://www.google.com/maps?q=Bailyroad",
    },
    { location: "Mirpur", mapUrl: "https://www.google.com/maps?q=Mirpur" },
    {
      location: "Puran Dhaka",
      mapUrl: "https://www.google.com/maps?q=Puran+Dhaka",
    },
    {
      location: "Bashundhara R/A",
      mapUrl: "https://www.google.com/maps?q=Bashundhara+R/A",
    },
    { location: "Uttara", mapUrl: "https://www.google.com/maps?q=Uttara" },
    {
      location: "Narayanganj",
      mapUrl: "https://www.google.com/maps?q=Narayanganj",
    },
    { location: "Savar", mapUrl: "https://www.google.com/maps?q=Savar" },
    {
      location: "Chittagong",
      mapUrl: "https://www.google.com/maps?q=Chittagong",
    },
    { location: "Agrabad", mapUrl: "https://www.google.com/maps?q=Agrabad" },
    {
      location: "Johnson Road",
      mapUrl: "https://www.google.com/maps?q=Johnson+Road",
    },
    {
      location: "Mirpur 12",
      mapUrl: "https://www.google.com/maps?q=Mirpur+12",
    },
    {
      location: "Rajshahi",
      mapUrl: "https://www.google.com/maps?q=Rajshahi",
    },
    { location: "Khulna", mapUrl: "https://www.google.com/maps?q=Khulna" },
    { location: "Sylhet", mapUrl: "https://www.google.com/maps?q=Sylhet" },
  ];
  return (
    <div className="md:container mx-auto">
      <div className="flex justify-center py-2">
        <button className="px-6 py-3 bg-red-800 rounded-md uppercase  text-gray-100 text-[14px] font-bold">
          {" "}
          Branches
        </button>
      </div>
      {/* ______btanch start_____ */}
      <div className="md:flex py-3">
        <div className="grid grid-cols-3 px-4 md:w-2/3">
          {locations.map((loc, idx) => (
            <a
              href={loc.mapUrl}
              target="_blank"
              className="group flex items-center gap-3"
              key={idx}
            >
              <p className="text-[16px] font-bold">
                <CiLocationOn />
              </p>
              <h2 className=" gap-2 group-hover:text-yellow-500 transition-all duration-300 py-2 ease-in-out group font-semibold items-center">
                {loc.location}
              </h2>
            </a>
          ))}
        </div>
        <div className="flex md:w-1/3 bg-[#FFFFFF] rounded-md px-4 justify-around items-center">
          <div className="">
            <h2 className="text-2xl font-bold">
              Find <br /> Sultan's Dine <br /> near you
            </h2>
            <p className="py-3 mt-2 uppercase text-red-800 font-semibold">
              Contact us
            </p>
          </div>
          <img src={mapImg} alt="" />
        </div>
      </div>
      {/* ______btanch  end_____ */}
    </div>
  );
};

export default Branches;
