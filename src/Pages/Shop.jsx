import React from "react";
import MenuCard from "../Components/MenuCard";

const Shop = () => {
  const allMenuItems = [
    {
      id: 1,
      name: "Kacchi (Bashmati) Half",
      description: "Kacchi made with basmati rice",
      priceRange: "299 - 799",
      currency: "৳",
      image: "https://i.ibb.co.com/mB5bfhk/2-half-kacchi-450x450.jpg",
    },
    {
      id: 2,
      name: "Kacchi (Bashmati) Full",
      description: "Kacchi made with basmati rice",
      priceRange: "499 - 3,349",
      currency: "৳",
      image: "https://i.ibb.co.com/9t0Rv1w/6-kacchi-full-450x450.jpg",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Kacchi Platter",
      description:
        "Comes with Kacchi Chicken Roast, Jali Kabab, Beef Rezala, Borhani, Chutney...",
      priceRange: "999 - 4,449",
      currency: "৳",
      image: "https://i.ibb.co.com/6ms7qH6/9-1-450x450.jpg",
    },
    {
      id: 4,
      name: "Chicken Roast",
      description: "Delicious chicken roast cooked to perfection.",
      priceRange: "150",
      currency: "৳",
      image: "https://i.ibb.co.com/MP8c0PS/Chicken-Roast-450x450-1.png",
    },
    {
      id: 5,
      name: "Beef Rezala",
      description: "Tender beef in a flavorful rezala curry.",
      priceRange: "200",
      currency: "৳",
      image: "https://i.ibb.co.com/YcMbfFF/Rezala-450x450-1.png",
    },
    {
      id: 6,
      name: "Plain Polao",
      description: "Fragrant polao rice garnished with fried onions.",
      priceRange: "120",
      currency: "৳",
      image: "https://i.ibb.co.com/YNFzp1w/FB-IMG-1695764314003-450x450.jpg",
    },
    {
      id: 7,
      name: "Jail Kebab",
      description: "Flavorful kebabs made with authentic spices.",
      priceRange: "60",
      currency: "৳",
      image: "https://i.ibb.co.com/j4NSX5y/Jali-Kabab-450x450.png",
    },
    {
      id: 8,
      name: "Chutney",
      description: "Sweet and tangy chutney made with fresh ingredients.",
      priceRange: "25",
      currency: "৳",
      image: "https://i.ibb.co.com/SdHHqKH/chutny-2-450x450.png",
    },
    {
      id: 9,
      name: "Plain Polao Platter",
      description: "Serves with Chicken roast & Borhani.",
      priceRange: "649 – 3,099",
      currency: "৳",
      image: "https://i.ibb.co.com/6ms7qH6/9-1-450x450.jpg",
    },
    {
      id: 10,
      name: "Plain Polao, Chicken Roast, Borhani",
      description:
        "Comes with Plain Polaw Chicken Roast Jali Kabab Beef Rezala Borhani Chutney Salad",
      priceRange: "299 – 1,350",
      currency: "৳",
      image: "https://i.ibb.co.com/YLgS0QH/2-1-450x450.jpg",
      rating: 4.5,
    },
    {
      id: 11,
      name: "Firni",
      description: "Traditional dessert made from milk and rice.",
      priceRange: "70",
      currency: "৳",
      image: "https://i.ibb.co.com/Rvrfp1Y/IMG-20230926-WA0019-450x450.jpg",
    },
    {
      id: 12,
      name: "Jorda",
      description: "Sweet yellow rice dessert with nuts and raisins.",
      priceRange: "70",
      currency: "৳",
      image: "https://i.ibb.co.com/K0jW6G8/IMG-20230926-WA0020-450x450.jpg",
    },
    {
      id: 13,
      name: "Borhani",
      description: "Traditional yogurt-based savory drink (1 Glass).",
      priceRange: "70",
      currency: "৳",
      image: "https://i.ibb.co.com/Bc7j7GN/Borhani-450x450.png",
    },
    {
      id: 14,
      name: "Soft Drinks",
      description: "Refreshing soft drinks as labeled.",
      priceRange: "As labeled",
      currency: "৳",
      image: "https://i.ibb.co.com/68MHCwM/Untitled-design-1-450x450.png",
    },
    {
      id: 15,
      name: "Water",
      description: "Pure bottled drinking water.",
      priceRange: "20",
      currency: "৳",
      image:
        "https://i.ibb.co.com/C637cTv/super-fresh-drinking-water-500-liter-bottle-removebg-preview-450x450.png",
    },
    {
      id: 16,
      name: "Zafran Sharbat",
      description: "Refreshing saffron-flavored drink.",
      priceRange: "90 - 360",
      currency: "৳",
      image: "https://example.com/zafran-sharbat.jpg",
    },
  ];

  return (
    <div>
      <div className="max-w-screen-lg mx-auto ">
        <div className="grid gap-5 py-4 md:grid-cols-3 grid-cols-1 px-4">
          {allMenuItems.map((item) => (
            <MenuCard key={item.id} dish={item}></MenuCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
