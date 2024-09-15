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
import { NavLink } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

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

  // ---------------navbar  on scroll fixed ----------
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust the value 50 to when you want the navbar to become fixed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" ">
      {/* ----------- navbar location part start---------- */}
      <div className="bg-[#880000] hidden lg:block ">
        <div className="flex gap-5 px-3 py-2 max-w-[1100px] mx-auto items-center">
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
      <div
        className={`hidden lg:block bg-white ${
          isFixed ? "fixed top-0 left-0 w-full shadow-lg z-50" : ""
        }`}
      >
        <nav className="flex py-4 md:container mx-auto items-center justify-around">
          <div>
            <img className="w-[110px]" src={brandLogo} alt="" />
          </div>
          <ul className="flex items-center gap-5 relative">
            <li className="text-[14px] my-2  text-red-950 font-bold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 border-b-4 border-yellow-500"
                    : "hover:text-yellow-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-[13px] text-red-950 font-bold">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 border-b-4 text-[13px]  font-bold border-yellow-500"
                    : "hover:text-yellow-500 "
                }
              >
                About
              </NavLink>
            </li>
            {/* Shop Dropdown */}
            {/* Shop Dropdown */}
            {/* <li
              ref={shopRef}
              className="relative text-[13px] text-red-950 font-bold"
            >
              <h2
                className="cursor-pointer flex items-center gap-2"
                onClick={() => setIsShopOpen((prev) => !prev)}
              >
                Shop
                <p>{isShopOpen ? <FaAngleUp /> : <FaChevronDown />}</p>
              </h2>
              {isShopOpen && (
                <ul className="absolute transition-all duration-500 ease-in-out border-gray-600 left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                  <li className="text-[13px] text-red-950 font-bold py-2">
                    <NavLink
                      to="/kacchi"
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-500 border-b-4 border-yellow-500 p-2"
                          : "p-2 hover:bg-gray-200"
                      }
                    >
                      Kacchi
                    </NavLink>
                  </li>
                  <li className="text-[13px] text-red-950 py-2 font-bold">
                    <NavLink
                      to="/shop/accessories"
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-500 border-b-4 border-yellow-500 p-2"
                          : "p-2 hover:bg-gray-200"
                      }
                    >
                      Accessories
                    </NavLink>
                  </li>
                  <li className="text-[13px] text-red-950 py-2 font-bold">
                    <NavLink
                      to="/shop/footwear"
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-500 border-b-4 border-yellow-500 p-2"
                          : "p-2 hover:bg-gray-200"
                      }
                    >
                      Footwear
                    </NavLink>
                  </li>
                </ul>
              )}
            </li> */}
            {/* -----drop dowen end ----*/}
            <li className="text-[13px] text-red-950 font-bold">
              <NavLink
                to="/catering"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 border-b-4 border-yellow-500"
                    : "hover:text-yellow-500"
                }
              >
                Catering
              </NavLink>
            </li>
            <li className="text-[13px] text-red-950 font-bold">
              <NavLink
                to="/reservation"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 border-b-4 border-yellow-500"
                    : "hover:text-yellow-500"
                }
              >
                Reservation
              </NavLink>
            </li>
            <li className="text-[13px] text-red-950 font-bold">
              <NavLink
                to="/media-outlets"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 border-b-4 border-yellow-500"
                    : "hover:text-yellow-500"
                }
              >
                Media Outlets
              </NavLink>
            </li>
            <li className="text-[13px] text-red-950 font-bold">
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 border-b-4 border-yellow-500"
                    : "hover:text-yellow-500"
                }
              >
                Career
              </NavLink>
            </li>
          </ul>

          {/* Right side content */}
          <div className="flex gap-3 items-center">
            <img className="w-[50px]" src={delebaryPmg} alt="" />
            <div className="flex flex-col justify-center">
              <p className="text-[13px] text-gray-500">Call and Order in</p>
              <h2 className="text-[22px] font-bold text-red-900">CONTACT</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[20px] p-2 border-2 rounded-full hover:bg-yellow-400 hover:border-yellow-400 text-[#3a0e0e]">
              <IoSearch />
            </span>
            <span className="text-[20px] p-2 border-2 rounded-full hover:bg-yellow-400 hover:border-yellow-400 text-[#3a0e0e]">
              <FaUser />
            </span>
            <span className="text-[20px] p-2 text-[#3a0e0e] relative border-2 rounded-full hover:bg-yellow-400 hover:border-yellow-400">
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
      <div className="relative ">
        <div
          className={`block lg:hidden bg-white py-2 ${
            isFixed
              ? "fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300"
              : "relative"
          }`}
        >
          <nav className="flex items-center  justify-between translate-x">
            <div className="">
              <h2
                onClick={() => setISMenuOpen(!isMenuOpen)}
                className="text-[28px] pl-3"
              >
                {isMenuOpen === false ? <AiOutlineMenu /> : ""}
              </h2>
              <div className="absolute top-0">
                <ul
                  className={`bg-black h-[100%] fixed px-5 py-2 left-0 z-50 transition-transform duration-500 ease-in-out w-[70%] ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <div className="flex justify-between items-center py-2">
                    <h2></h2>
                    <h2 className="flex float-end">
                      <span
                        onClick={() => setISMenuOpen(!isMenuOpen)}
                        className="text-2xl text-gray-200"
                      >
                        {isMenuOpen && <RxCross2 />}
                      </span>
                    </h2>
                  </div>
                  <li className="text-[16px] my-2 text-gray-200 flex font-bold py-2">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : "hover:text-yellow-500"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="text-[16px] my-2 text-gray-200 text--bold py-2">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : "hover:text-yellow-500"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li
                    ref={shopRef}
                    className="relative text-[16px] my-2 text-gray-200 text--bold py-2"
                  >
                    <h2
                      className="cursor-pointer flex items-center gap-2"
                      onClick={() => setIsShopOpen((prev) => !prev)}
                    >
                      Shop
                      <span>
                        {isShopOpen ? <FaAngleUp /> : <FaChevronDown />}
                      </span>
                    </h2>
                    {isShopOpen && (
                      <ul
                        className={`absolute left-0 mt-2 w-[200px] border-2 border-gray-600 bg-black shadow-lg rounded-md z-50 transition-all duration-500 ease-in-out transform ${
                          isShopOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
                        } overflow-hidden`}
                      >
                        <li className="text-[16px] my-2 text-gray-200 text--bold py-2">
                          <NavLink
                            to="/shop/clothing"
                            className={({ isActive }) =>
                              isActive
                                ? "text-yellow-500 p-2"
                                : "p-2 hover:bg-gray-200"
                            }
                          >
                            Clothing
                          </NavLink>
                        </li>
                        <li className="text-[16px] my-2 text-gray-200 text--bold py-2">
                          <NavLink
                            to="/shop/accessories"
                            className={({ isActive }) =>
                              isActive
                                ? "text-yellow-500 p-2"
                                : "p-2 hover:bg-gray-200"
                            }
                          >
                            Accessories
                          </NavLink>
                        </li>
                        <li className="text-[16px] my-2 text-gray-200 text--bold py-2">
                          <NavLink
                            to="/shop/footwear"
                            className={({ isActive }) =>
                              isActive
                                ? "text-yellow-500 p-2"
                                : "p-2 hover:bg-gray-200"
                            }
                          >
                            Footwear
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="text-[16px] my-2 text-gray-200 text--bold py-2">
                    <NavLink
                      to="/catering"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : "hover:text-yellow-500"
                      }
                    >
                      Catering
                    </NavLink>
                  </li>
                  <li className="text-[16px] my-2 text-gray-200 text--bold py-2">
                    <NavLink
                      to="/reservation"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : "hover:text-yellow-500"
                      }
                    >
                      Reservation
                    </NavLink>
                  </li>
                  <li className="text-[16px] my-2 text-gray-200 text--bold py-2">
                    <NavLink
                      to="/media-outlets"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : "hover:text-yellow-500"
                      }
                    >
                      Media Outlets
                    </NavLink>
                  </li>
                  <li className="text-[16px] my-2 text-gray-200 text--bold py-2">
                    <NavLink
                      to="/career"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : "hover:text-yellow-500"
                      }
                    >
                      Career
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <img className="w-[130px]" src={brandLogo} alt="" />
            <div>
              <h2 className="text-[28px] pr-3">
                <MdAddIcCall />
              </h2>
            </div>
          </nav>
        </div>
      </div>
      {/* -----------mini device nav---------*/}
    </div>
  );
};

export default NavBar;
