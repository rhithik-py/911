import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-[#D72638] mb-6">
        🚗 911 Diecast Cars
      </h1>

      {cars.length === 0 ? (
        <p className="text-[#C0C0C0]">No cars found. Add some from admin panel.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-[#111] p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={car.image || "https://via.placeholder.com/300x200"}
                alt={car.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold">{car.title}</h2>
              <p className="text-[#C0C0C0]">${car.price}</p>
              <button className="mt-2 bg-[#007BFF] text-white px-4 py-2 rounded hover:bg-[#0056b3]">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
