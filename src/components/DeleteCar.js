import React from "react";

function DeleteCar({ car, onDelete }) {
  const handleDelete = () => {
    onDelete(car);
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
}

export default DeleteCar;
