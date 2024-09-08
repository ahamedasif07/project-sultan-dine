import React from "react";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineTikTok } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const NavBar = () => {
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
    { location: "Rajshahi", mapUrl: "https://www.google.com/maps?q=Rajshahi" },
    { location: "Khulna", mapUrl: "https://www.google.com/maps?q=Khulna" },
    { location: "Sylhet", mapUrl: "https://www.google.com/maps?q=Sylhet" },
  ];

  return (
    <div className=" ">
      {/* ----------- nabbar locction part start---------- */}
      <div className="bg-[#880000] hidden md:block py-2">
        <div className="flex gap-5 px-3  max-w-[1100px] mx-auto   items-center">
          <div className="flex gap-x-4  flex-wrap ">
            {locations.map((loc, idx) => (
              <a
                key={idx} // Move key here
                target="_blank"
                href={loc.mapUrl}
                rel="noopener noreferrer" // Recommended for security
              >
                <h2 className="text-white flex gap-2 text-[14px] font-semibold">
                  <span className="text-white text-[17px]">
                    <CiLocationOn />
                  </span>
                  {loc.location}
                </h2>
              </a>
            ))}
          </div>
          <div className="flex gap-5">
            <span className="text-white text-[17px]">
              <a
                target="_blank"
                href="https://www.facebook.com/dinelikeasultan"
              >
                <CiFacebook />
              </a>
            </span>
            <span className="text-white text-[17px]">
              <a
                target="_blank"
                href="https://www.instagram.com/sultans_dine/?hl=en"
              >
                <IoLogoInstagram />
              </a>
            </span>
            <span className="text-white text-[17px]">
              <a
                target="_blank"
                href="https://www.tiktok.com/@sultans.dine?_t=8deFl5lCSkz&_r=1"
              >
                <AiOutlineTikTok />
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* ----------- nabbar locction part end---------- */}
    </div>
  );
};

export default NavBar;
