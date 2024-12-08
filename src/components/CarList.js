import React from "react";
import CarCard from "./CarCard";

function CarList({ cars, onUpdatePrice, onDelete }) {
  return (
    <div className="car-container">
      {cars.map((car, index) => (
        <CarCard
          key={index}
          car={car}
          onUpdatePrice={onUpdatePrice}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default CarList;
