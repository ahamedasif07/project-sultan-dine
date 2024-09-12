import React from "react";
import aboutBg from "../assets/images/sultan-dine-about/2_optimized.jpg.webp";
import { MdArrowForwardIos } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ShairdHeader = ({ about, path }) => {
  return (
    <div>
      <div
        className=" "
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "450px",
          width: "100%",
        }}
      >
        <div className="  h-full  flex flex-col items-center justify-center">
          <h2 className=" font-bold text-5xl text-gray-200">{about}</h2>
          <p className="text-gray-300 flex items-center gap-2 mt-2 text-[18px] font-semibold ">
            <NavLink
              to="/"
              className={({ isActive }) => {
                isActive && "text-yellow-500";
              }}
            >
              Home
            </NavLink>
            <span>
              <MdArrowForwardIos />
            </span>
            <span className="text-yellow-500">{path}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShairdHeader;
