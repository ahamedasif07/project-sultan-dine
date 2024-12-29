import React from "react";
import MenuCard from "../Components/MenuCard";

const PolaoMenu = () => {
  const kacchiItems = [
    {
      id: 1,
      name: "Plain Polao Platter",
      description: "Serves with Chicken roast & Borhani.",
      priceRange: "649 – ৳ 3,099",
      currency: "৳",
      image: "https://i.ibb.co.com/6ms7qH6/9-1-450x450.jpg", // Replace with the actual image URL or path
    },
    {
      id: 2,
      name: "Plain Polao, Chicken Roast, Borhani",

      description:
        "Comes with Plain Polaw Chicken Roast Jali Kabab Beef Rezala Borhani Chutney Salad",
      priceRange: " 299 – ৳ 1,350",
      currency: "৳",
      image: "https://i.ibb.co.com/YLgS0QH/2-1-450x450.jpg", // Replace with the actual image URL or path
      rating: 4.5, // Estimated from stars
    },
  ];
  return (
    <div>
      <div className="max-w-screen-lg mx-auto ">
        <div className="grid gap-5 py-4 md:grid-cols-3 grid-cols-1 px-4">
          {kacchiItems.map((item) => (
            <MenuCard key={item.id} dish={item}></MenuCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolaoMenu;
