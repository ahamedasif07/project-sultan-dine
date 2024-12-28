import React from "react";
import DishCard from "../Components/DishCard";
import MenuCard from "../Components/MenuCard";

const KacchiMenu = () => {
  const kacchiItems = [
    {
      id: 1,
      name: "Kacchi (Bashmati) Half",
      description: "Kacchi made with basmati rice",
      priceRange: "299 - 799",
      currency: "৳",
      image: "https://i.ibb.co.com/mB5bfhk/2-half-kacchi-450x450.jpg", // Replace with the actual image URL or path
    },
    {
      id: 2,
      name: "Kacchi (Bashmati) Full",

      description: "Kacchi made with basmati rice",
      priceRange: "499 - 3,349",
      currency: "৳",
      image: "https://i.ibb.co.com/9t0Rv1w/6-kacchi-full-450x450.jpg", // Replace with the actual image URL or path
      rating: 4.5, // Estimated from stars
    },
    {
      id: 3,
      name: "Kacchi Platter",
      description:
        "Comes with Kacchi Chicken Roast, Jali Kabab, Beef Rezala, Borhani, Chutney...",
      priceRange: "999 - 4,449",
      currency: "৳",
      image: "https://i.ibb.co.com/6ms7qH6/9-1-450x450.jpg", // Replace with the actual image URL or path
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto ">
      <div className="grid gap-5 py-4 md:grid-cols-3 grid-cols-2">
        {kacchiItems.map((item) => (
          <MenuCard key={item.id} dish={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default KacchiMenu;
