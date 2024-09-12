import React from "react";

const DishCard = ({ dish }) => {
  // Correct way to destructure an object
  const { name, id, image, price, currency, description } = dish;

  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <img src={image} alt={name} />
        <p>
          Price: {currency} {price}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DishCard;
