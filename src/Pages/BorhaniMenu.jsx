import React from "react";
import MenuCard from "../Components/MenuCard";

const BorhaniMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Firni",
      description: "Traditional dessert made from milk and rice.",
      priceRange: "70",
      currency: "৳",
      image: "https://i.ibb.co.com/Rvrfp1Y/IMG-20230926-WA0019-450x450.jpg", // Replace with the actual image URL
    },
    {
      id: 2,
      name: "Jorda",
      description: "Sweet yellow rice dessert with nuts and raisins.",
      priceRange: "70",
      currency: "৳",
      image: "https://i.ibb.co.com/K0jW6G8/IMG-20230926-WA0020-450x450.jpg", // Replace with the actual image URL
    },
    {
      id: 3,
      name: "Borhani",
      description: "Traditional yogurt-based savory drink (1 Glass).",
      priceRange: "70",
      currency: "৳",
      image: "https://i.ibb.co.com/Bc7j7GN/Borhani-450x450.png", // Replace with the actual image URL
    },
    {
      id: 4,
      name: "Soft Drinks",
      description: "Refreshing soft drinks as labeled.",
      priceRange: "As labeled",
      currency: "৳",
      image: "https://i.ibb.co.com/68MHCwM/Untitled-design-1-450x450.png", // Replace with the actual image URL
    },
    {
      id: 5,
      name: "Water",
      description: "Pure bottled drinking water.",
      priceRange: "20",
      currency: "৳",
      image:
        "https://i.ibb.co.com/C637cTv/super-fresh-drinking-water-500-liter-bottle-removebg-preview-450x450.png", // Replace with the actual image URL
    },
    {
      id: 6,
      name: "Zafran Sharbat",
      description: "Refreshing saffron-flavored drink.",
      priceRange: "90 - 360",
      currency: "৳",
      image: "https://example.com/zafran-sharbat.jpg", // Replace with the actual image URL
    },
  ];

  return (
    <div>
      <div className="max-w-screen-lg mx-auto ">
        <div className="grid gap-5 py-4 md:grid-cols-3 grid-cols-1 px-4">
          {menuItems.map((item) => (
            <MenuCard key={item.id} dish={item}></MenuCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorhaniMenu;
