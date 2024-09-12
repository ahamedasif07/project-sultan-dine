import React from "react";
import DishCard from "../DishCard";

const Dishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Kacchi",
      image: "path_to_kacchi_image", // Replace with the actual image path
      price: "7,475",
      currency: "৳",
      description: "From",
    },
    {
      id: 2,
      name: "Tehari",
      image: "path_to_tehari_image", // Replace with the actual image path
      price: "6,250",
      currency: "৳",
      description: "From",
    },
    {
      id: 3,
      name: "Polao",
      image: "path_to_polao_image", // Replace with the actual image path
      price: "7,475",
      currency: "৳",
      description: "From",
    },
  ];

  return (
    <div>
      <div>
        {dishes.map((dish) => (
          <DishCard dish={dish} key={dish.id}></DishCard>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
