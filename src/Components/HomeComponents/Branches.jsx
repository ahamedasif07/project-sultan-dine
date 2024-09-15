import { CiLocationOn } from "react-icons/ci";
import mapImg from "../../assets/images/sultan-dine-home/map.jpg";

const Branches = () => {
  const locations = [
    {
      location: "Dhanmondi",
      mapUrl: "https://www.google.com/maps?q=Dhanmondi",
      rating: 4.7,
      reviews: 4500,
    },
    {
      location: "Gulshan 2",
      mapUrl: "https://www.google.com/maps?q=Gulshan+2",
      rating: 4.8,
      reviews: 5300,
    },
    {
      location: "Bailyroad",
      mapUrl: "https://www.google.com/maps?q=Bailyroad",
      rating: 4.5,
      reviews: 3200,
    },
    {
      location: "Mirpur",
      mapUrl: "https://www.google.com/maps?q=Mirpur",
      rating: 4.3,
      reviews: 4100,
    },
    {
      location: "Puran Dhaka",
      mapUrl: "https://www.google.com/maps?q=Puran+Dhaka",
      rating: 4.6,
      reviews: 3800,
    },
    {
      location: "Bashundhara R/A",
      mapUrl: "https://www.google.com/maps?q=Bashundhara+R/A",
      rating: 4.9,
      reviews: 2900,
    },
    {
      location: "Uttara",
      mapUrl: "https://www.google.com/maps?q=Uttara",
      rating: 4.4,
      reviews: 2700,
    },
    {
      location: "Narayanganj",
      mapUrl: "https://www.google.com/maps?q=Narayanganj",
      rating: 4.7,
      reviews: 3500,
    },
    {
      location: "Savar",
      mapUrl: "https://www.google.com/maps?q=Savar",
      rating: 4.2,
      reviews: 4600,
    },
    {
      location: "Chittagong",
      mapUrl: "https://www.google.com/maps?q=Chittagong",
      rating: 4.8,
      reviews: 5500,
    },
    {
      location: "Agrabad",
      mapUrl: "https://www.google.com/maps?q=Agrabad",
      rating: 4.1,
      reviews: 4800,
    },
    {
      location: "Johnson Road",
      mapUrl: "https://www.google.com/maps?q=Johnson+Road",
      rating: 4.6,
      reviews: 3400,
    },
    {
      location: "Mirpur 12",
      mapUrl: "https://www.google.com/maps?q=Mirpur+12",
      rating: 4.3,
      reviews: 4300,
    },
    {
      location: "Rajshahi",
      mapUrl: "https://www.google.com/maps?q=Rajshahi",
      rating: 4.7,
      reviews: 5200,
    },
    {
      location: "Khulna",
      mapUrl: "https://www.google.com/maps?q=Khulna",
      rating: 4.9,
      reviews: 2900,
    },
    {
      location: "Sylhet",
      mapUrl: "https://www.google.com/maps?q=Sylhet",
      rating: 4.5,
      reviews: 3500,
    },
  ];

  return (
    <div className="md:max-w-screen-xl  mx-auto px-4">
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
