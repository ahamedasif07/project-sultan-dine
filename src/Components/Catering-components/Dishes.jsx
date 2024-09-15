import React from "react";
import DishCard from "../DishCard";
import cardImg1 from "../../assets/images/sultan-dine-catering/2-half-kacchi-450x450.jpg.webp";
import cardImg2 from "../../assets/images/sultan-dine-catering/24-450x450.jpg.webp";
import cardImg3 from "../../assets/images/sultan-dine-catering/Morog-Polao-450x450.png.webp";

const Dishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Kacchi",
      image: cardImg1, // Replace with the actual image path
      price: "7,475",
      currency: "৳",
      description: "From",
    },
    {
      id: 2,
      name: "Tehari",
      image: cardImg2, // Replace with the actual image path
      price: "6,250",
      currency: "৳",
      description: "From",
    },
    {
      id: 3,
      name: "Polao",
      image: cardImg3, // Replace with the actual image path
      price: "7,475",
      currency: "৳",
      description: "From",
    },
  ];

  return (
    <div className="md:max-w-screen-xl mx-auto py-5 px-4">
      <div className="grid md:grid-cols-3 md:gap-10 grid-cols-1">
        {dishes.map((dish) => (
          <DishCard dish={dish} key={dish.id}></DishCard>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
