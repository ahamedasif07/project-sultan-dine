import React, { useState, useRef, useEffect } from "react";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineTikTok } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import brandLogo from "./assets/images/sultan-dine-home/Sultans-Diner-main-logo.png.webp";
import delebaryPmg from "./assets/images/sultan-dine-home/delebary.png";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { MdAddIcCall } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [isMenuOpen, setISMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const shopRef = useRef(null); // Ref for the shop dropdown

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

  // Handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopRef.current && !shopRef.current.contains(event.target)) {
        setIsShopOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      {/* ----------- navbar location part start---------- */}
      <div className="bg-[#880000] hidden lg:block py-2">
        <div className="flex gap-5 px-3 max-w-[1100px] mx-auto items-center">
          <div className="flex gap-x-4 flex-wrap ">
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
      {/* ----------- navbar location part end---------- */}

      {/* ----------main nav start ---------- */}
      <div className="hidden lg:block">
        <nav className="flex py-4 md:container mx-auto items-center justify-around">
          <div>
            <img className="w-[110px]" src={brandLogo} alt="" />
          </div>
          <ul className="flex items-center gap-5 relative">
            <li>Home</li>
            <li>About</li>
            <li
              ref={shopRef} // Attach the ref here
              className="relative"
            >
              <span
                className="cursor-pointer"
                onClick={() => setIsShopOpen((prev) => !prev)} // Toggle on click
              >
                Shop
              </span>
              {isShopOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                  <li className="p-2 hover:bg-gray-200">Clothing</li>
                  <li className="p-2 hover:bg-gray-200">Accessories</li>
                  <li className="p-2 hover:bg-gray-200">Footwear</li>
                </ul>
              )}
            </li>
            <li>Catering</li>
            <li>Reservation</li>
            <li>Media Outlets</li>
            <li>Career</li>
          </ul>
          <div className="flex gap-3 items-center">
            <img className="w-[50px]" src={delebaryPmg} alt="" />
            <div className="flex flex-col justify-center">
              <p className="text-[13px] text-gray-500">Call and Order in</p>
              <h2 className="text-[22px] font-bold text-red-900">CONTACT</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[20px] p-2 border-2 rounded-full hover:bg-yellow-400 hover:border-yellow-400">
              <IoSearch />
            </span>
            <span className="text-[20px] p-2 border-2 rounded-full hover:bg-yellow-400 hover:border-yellow-400">
              <FaUser />
            </span>
            <span className="text-[20px] p-2 relative border-2 rounded-full hover:bg-yellow-400 hover:border-yellow-400">
              <FaBasketShopping />
              <p className="bg-yellow-500 px-1 rounded-full top-0 right-1 absolute text-center text-[12px]">
                0
              </p>
            </span>
          </div>
        </nav>
      </div>
      {/* ----------main nav end ---------- */}

      {/* -----------mini device nav---------*/}
      <div className="block lg:hidden">
        <nav className="flex items-center justify-between px-3">
          <div className="relative ">
            <h2
              onClick={() => setISMenuOpen(!isMenuOpen)}
              className="text-[28px]"
            >
              {isMenuOpen ? <RxCross2 /> : <AiOutlineMenu />}
            </h2>
            <ul
              className={`absolute left-0 z-50 transition-all duration-500 ease-in-out ${
                isMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
              } overflow-hidden`}
            >
              <li className="p-2">home</li>
              <li className="p-2">about</li>
              <li className="p-2">shop</li>
            </ul>
          </div>
          <img className="w-[130px]" src={brandLogo} alt="" />
          <div>
            <h2 className="text-[28px]">
              <MdAddIcCall />
            </h2>
          </div>
        </nav>
      </div>
      {/* -----------mini device nav---------*/}
    </div>
  );
};

export default NavBar;
