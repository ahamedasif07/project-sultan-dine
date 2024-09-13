import React, { useState } from "react";

const TableBookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    party: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="md:container mx-auto pt-[50px] pb-6">
        <div className="relative bg-[#f9f4e6] p-10 border border-gray-300 rounded-md max-w-full mx-auto mt-8">
          {/* Overlapping Title */}
          <h2 className="absolute -top-4 left-4 bg-[#f9f4e6] px-2 text-[18px] font-bold text-gray-700">
            Book a table
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-8">
            {/* Date Field */}
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm text-gray-600 mb-1">
                Date
              </label>
              <input
                type="text"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="September 13, 2024"
                className="px-4 py-3 border max-w-[500px] border-gray-300 rounded-md text-gray-600 bg-white focus:outline-none"
              />
            </div>

            {/* Time Field */}
            <div className="flex flex-col">
              <label htmlFor="time" className="text-sm text-gray-600 mb-1">
                Time
              </label>
              <input
                type="text"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="Time"
                className="px-4 py-3 max-w-[500px] border border-gray-300 rounded-md text-gray-600 bg-white focus:outline-none"
              />
            </div>

            {/* Party Size Field */}
            <div className="flex flex-col">
              <label htmlFor="party" className="text-sm text-gray-600 mb-1">
                Party
              </label>
              <select
                id="party"
                name="party"
                value={formData.party}
                onChange={handleChange}
                className="px-4 py-3 border max-w-[500px] border-gray-300 rounded-md bg-white text-gray-600 focus:outline-none"
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TableBookingForm;
