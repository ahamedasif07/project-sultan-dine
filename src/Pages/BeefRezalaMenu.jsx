import React from "react";
import MenuCard from "../Components/MenuCard";

const BeefRezalaMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Chicken Roast",
      description: "Delicious chicken roast cooked to perfection.",
      priceRange: "150",
      currency: "৳",
      image: "https://i.ibb.co.com/MP8c0PS/Chicken-Roast-450x450-1.png", // Replace with the actual image URL
    },
    {
      id: 2,
      name: "Beef Rezala",
      description: "Tender beef in a flavorful rezala curry.",
      priceRange: "200",
      currency: "৳",
      image: "https://i.ibb.co.com/YcMbfFF/Rezala-450x450-1.png", // Replace with the actual image URL
    },
    {
      id: 3,
      name: "Plain Polao",
      description: "Fragrant polao rice garnished with fried onions.",
      priceRange: "120",
      currency: "৳",
      image: "https://i.ibb.co.com/YNFzp1w/FB-IMG-1695764314003-450x450.jpg", // Replace with the actual image URL
    },
    {
      id: 4,
      name: "Jail Kebab",
      description: "Flavorful kebabs made with authentic spices.",
      priceRange: "60",
      currency: "৳",
      image: "https://i.ibb.co.com/j4NSX5y/Jali-Kabab-450x450.png", // Replace with the actual image URL
    },
    {
      id: 5,
      name: "Chutney",
      description: "Sweet and tangy chutney made with fresh ingredients.",
      priceRange: "25",
      currency: "৳",
      image: "https://i.ibb.co.com/SdHHqKH/chutny-2-450x450.png", // Replace with the actual image URL
    },
  ];

  return (
    <div>
      <div className="max-w-screen-lg mx-auto ">
        <div className="grid gap-5 py-4 md:grid-cols-3 grid-cols-2">
          {menuItems.map((item) => (
            <MenuCard key={item.id} dish={item}></MenuCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeefRezalaMenu;
