import "./App.css"
import { useState, useEffect } from "react"
import AddCar from "./components/AddCar"
import CarList from "./components/CarList"
import { getAllCars } from "./api"

function App() {
  const [cars, setCars] = useState([])
  useEffect(() => {
    async function fetchCars() {
      const allCars = await getAllCars()
      setCars(allCars)
    }
    fetchCars()
  }, [])

  const addCar = (newCar) => {
    setCars([...cars, newCar])
  }
  const deleteCar = (carToDelete) => {
    setCars(cars.filter((car) => car !== carToDelete))
  }

  const updatePrice = (carToUpdate, newPrice) => {
    setCars(
      cars.map((car) =>
        car === carToUpdate ? { ...car, price: newPrice } : car
      )
    )
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Garage</h1>
      </header>

      <AddCar onAddCar={addCar} />
      <CarList cars={cars} onUpdatePrice={updatePrice} onDelete={deleteCar} />
    </div>
  )
}

export default App
