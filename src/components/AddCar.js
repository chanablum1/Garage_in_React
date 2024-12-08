import { useState } from "react";
import { addCar } from "../api"; // מייבאים את הפונקציה מ-`api.js`



function AddCar({ onAddCar }) {
  const [name, setName] = useState("");
  const [numbercar, setNumbercar] = useState("");
  const [imagecar, setImagecar] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !numbercar.trim() || !imagecar.trim()) {
      setError("All fields are required.");
      return;
    }

    if (!/^\d{1,8}$/.test(numbercar)) {
      setError("Car Number must be a number with up to 8 digits.");
       return;
    }
    try {
      // שליחה לשרת
      const newCar = { name, numbercar, imagecar };
      const addedCar = await addCar(newCar);  // קריאה לפונקציה מ-`api.js`
      onAddCar(addedCar); // הוספת רכב לרשימה בצד הלקוח
      setName("");
      setNumbercar("");
      setImagecar("");
      setError("");
    } catch (error) {
      setError("Failed to add car.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-car-form">
      <div>
        <input
          type="text"
          placeholder="Car Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Car Number"
          value={numbercar}
          onChange={(e) => setNumbercar(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Car Image URL"
          value={imagecar}
          onChange={(e) => setImagecar(e.target.value)}
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      <button type="submit">Add Car</button>
    </form>
  );
}

export default AddCar;
