import React from "react";

const JobCard = ({ job }) => {
  console.log(job);
  const { title, description } = job;
  return (
    <div className="py-6">
      <div className="bg-[#FFFFFF] border border-gray-300 rounded-md  pb-3 ">
        <div className="">
          <div className="bg-[#F5F5F5] ">
            <h3 className="font-bold  px-4 py-2 text-[16px] text-gray-600 mb-4">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 px-4 mb-4">{description}</p>
          <div className="px-4">
            <button className="bg-yellow-500 hover:text-white py-3 mt-6 transition-all duration-500 ease-in-out px-4  text-[14px] rounded-md font-bold">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
