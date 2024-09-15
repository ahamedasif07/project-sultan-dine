import React, { useState } from "react";

const ContactFrom = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    party: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      {/* contact from */}
      <div className="md:max-w-screen-xl mx-auto pt-[20px] pb-12">
        <div className="relative bg-[#f9f4e6] p-10 border border-gray-300 rounded-md max-w-full mx-auto mt-8">
          {/* Overlapping Title */}
          <h2 className="absolute -top-4 left-4 bg-[#f9f4e6] px-2 text-[18px] font-bold text-gray-700">
            Contact Details
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-8">
            {/* Date Field */}
            <div className="flex flex-col">
              <label htmlFor="Name" className="text-sm text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Name"
                className="px-4 py-3 border max-w-[500px] border-gray-300 rounded-md text-gray-600 bg-white  focus:outline-none"
              />
            </div>

            {/* Time Field */}
            <div className="flex flex-col">
              <label htmlFor="Email" className="text-sm text-gray-600 mb-1">
                Email
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="Email"
                className="px-4 py-3 max-w-[500px] border border-gray-300 rounded-md text-gray-600 bg-white focus:outline-none"
              />
            </div>

            {/* Party Size Field */}
            <div className="flex flex-col">
              <label htmlFor="Contact" className="text-sm text-gray-600 mb-1">
                Contact
              </label>
              <input
                id="Contact"
                name="Contact"
                className="px-4 py-3 border max-w-[500px] border-gray-300 rounded-md bg-white text-gray-600 focus:outline-none"
              ></input>
              <h2 className="text-yellow-500 font-semibold mt-4">
                Add a Message
              </h2>
            </div>
          </form>
        </div>
      </div>
      <div className="md:container mx-auto pt-[20px] pb-12">
        <div className="relative bg-[#f9f4e6] p-10 border border-gray-300 rounded-md max-w-full mx-auto mt-8">
          <button className="bg-yellow-500 hover:text-white py-3 mt-6 transition-all duration-500 ease-in-out px-5 rounded-md font-bold">
            Request Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
