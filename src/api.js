import axios from 'axios';


export const getAllCars = async () => {
    const response = await axios.get("http://localhost:3005/cars")
    return response.data
  }

export const addCar = async (newCar) => {
    try {
      const response = await axios.post("http://localhost:3005/cars", newCar);
      return response.data; 
    } catch (error) {
      throw new Error("Failed to add car");
    }
  };

