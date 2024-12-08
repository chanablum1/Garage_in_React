import { useState } from "react";

function EditPrice({ car, onUpdatePrice }) {
  const [price, setPrice] = useState(car.price);

  const handleUpdate = () => {
    if (price > 0) {
      onUpdatePrice(car, price);
    } else {
      alert("Price must be a positive number!");
    }
  };

  return (
    <div className="edit-price">
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
        className="price-input"
      />
      <button onClick={handleUpdate} className="edit-button">
        Update Price
      </button>
    </div>
  );
}

export default EditPrice;
