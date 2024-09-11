import React from "react";
import letstUpdated1 from "../../assets/images/sultan-dine-home/opaninng1.webp";
import letstUpdated2 from "../../assets/images/sultan-dine-home/opaning2.webp";
import letstUpdated3 from "../../assets/images/sultan-dine-home/opaning3.webp";

const LatestUpdated = () => {
  const letestPosts = [
    {
      title: "Sultan’s Dine is now on Sylhet",
      date: "September 4, 2024",
      category: "Uncategorized",
      author: "admin",
      description:
        "Sultan's Dine is famous in Dhaka for its kachchi biryani. Now they opened their new branch in Sylhet.",
      buttonText: "READ MORE",
      image: letstUpdated1, // Replace with the actual path to your image
    },
    {
      title: "Press Release",
      date: "May 8, 2024",
      category: "Uncategorized",
      author: "admin",
      description:
        "On 26th April, 2024, Sultan’s Dine Expands to Mirpur 12 with Grand Opening Celebration Featuring Bangladesh’s First YouTuber...",
      buttonText: "READ MORE",
      image: letstUpdated2, // Replace with the actual path to your image
    },
    {
      title: "Sultan’s Dine is coming soon on Rajshahi !!!",
      date: "April 21, 2024",
      category: "Uncategorized",
      author: "admin",
      description:
        "Sultan's Dine is famous in Dhaka for its kachchi biryani. The restaurant started business in the capital five years ago and now expands to Rajshahi...",
      buttonText: "READ MORE",
      image: letstUpdated3, // Replace with the actual path to your image
    },
  ];

  return (
    <div className="md:container mx-auto">
      <h2 className="text-4xl font-bold text-red-900 py-5 ">Latest updated</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {letestPosts.map((posts, index) => (
          <div
            key={index}
            className="rounded-md bg-white border-2  border-gray-200 flex flex-col"
          >
            <div>
              <img src={posts.image} alt="" className="w-full" />
            </div>
            <div className="flex-grow py-3 px-4">
              <p className="text-[12px] py-3 text-gray-700">
                {posts.category} / {posts.date} / post by {posts.author}
              </p>
              <h2 className="text-xl font-bold flex flex-wrap text-red-800 py-3">
                {posts.title}
              </h2>
              <p className="text-[15px] flex flex-wrap text-gray-700">
                {posts.description}
              </p>
            </div>
            <div className="px-4 pb-4">
              <button className="uppercase px-3 py-3 w-full bg-yellow-500 rounded-md font-semibold hover:text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out text-[14px]">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdated;
