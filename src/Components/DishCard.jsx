import React from "react";
import { FaBasketShopping } from "react-icons/fa6";

const DishCard = ({ dish }) => {
  // Destructure the dish object
  const { name, id, image, price, currency, description } = dish;

  return (
    <div className="group py-2">
      {/* Add group class for hover effect */}
      <div className=" bg-slate-100 px-2 py-13 rounded-2xl">
        <div className=" flex flex-col justify-center items-center relative overflow-hidden">
          <div className="bg-[#F7F2E2]  group-hover:bg-[#FFC222] rounded-t-xl group-hover:rounded-t-md  h-1/2 w-full transition-all duration-300 absolute bottom-0 group-hover:h-full"></div>
          <img
            className="max-w-[300px]  group-hover:scale-110 transition-all duration-300 ease-in-out rounded-lg my-6 relative z-10"
            src={image}
            alt={name} // It's good practice to provide a meaningful alt text
          />
        </div>
        <div className="py-4">
          <h2 className="text-[18px] px-3 font-bold">{name}</h2>
          <div className="flex justify-between items-center px-3">
            <h2 className="flex items-center gap-3">
              <span className="text-yellow-500 text-[18px] font-bold">
                {description} :
              </span>
              <span className="text-yellow-500 text-[18px] font-bold">
                {currency}
              </span>
              <span className="text-yellow-500 text-[18px] font-bold">
                {price}
              </span>
            </h2>
            <p className="p-2 bg-yellow-500 rounded-lg hover:text-white">
              <FaBasketShopping></FaBasketShopping>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
