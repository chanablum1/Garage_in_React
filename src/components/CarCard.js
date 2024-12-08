import React from "react";
import EditPrice from "./EditPrice";
import DeleteCar from "./DeleteCar";

function CarCard({ car, onUpdatePrice, onDelete }) {
  return (
    <div className="car-card">
      <h1>{car.name.toUpperCase()}</h1>
      <p>Car Number: {car.numbercar}</p>
      <p>Price:  ${car.price}</p>
      <img src={car.imagecar} alt={`${car.name}`} className="car-image" />
      <EditPrice car={car} onUpdatePrice={onUpdatePrice} />
      <DeleteCar car={car} onDelete={onDelete} />
    </div>
  );
}

export default CarCard;
