import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const locations = [
    { name: "Sultan's Dine Bashundhara", rating: 4.1, reviews: 2900 },
    { name: "Sultan's Dine Dhanmondi", rating: 4.3, reviews: 1900 },
    { name: "Sultan's Dine Mirpur", rating: 4.1, reviews: 4600 },
    { name: "Sultan's Dine Uttara", rating: 4.1, reviews: 2300 },
    { name: "Sultan's Dine Baily Road", rating: 4.0, reviews: 2300 },
    { name: "Sultan's Dine Old Dhaka", rating: 4.1, reviews: 3600 },
    { name: "Sultan's Dine Gulshan", rating: 4.3, reviews: 9800 },
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed (3 seconds)
    pauseOnHover: true, // Pause slider on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-[#FFF6F2] overflow-hidden">
      {" "}
      {/* Add overflow-hidden here */}
      <Slider {...settings}>
        {locations.map((location, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-md shadow-lg p-5">
              <h3 className="font-bold text-[20px]">{location.name}</h3>
              <div className="flex items-center mt-2">
                <div className="flex flex-col items-start">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {/* Star Ratings */}
                    {Array(Math.floor(location.rating))
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 15l-5.5 3 1-5.8L1 7.6l5.8-.8L10 1l2.2 5.8L18 7.6l-4.5 4.6 1 5.8L10 15z" />
                        </svg>
                      ))}
                    {location.rating % 1 !== 0 && (
                      <svg
                        className="w-5 h-5 fill-current text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 15l-5.5 3 1-5.8L1 7.6l5.8-.8L10 1l2.2 5.8L18 7.6l-4.5 4.6 1 5.8L10 15z" />
                      </svg>
                    )}
                  </div>

                  <p className=" mt-2 block break-before-auto text-gray-600">
                    Rating: {location.rating}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 ">
                {`${(location.reviews / 1000).toFixed(1)}K`} Reviews
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
