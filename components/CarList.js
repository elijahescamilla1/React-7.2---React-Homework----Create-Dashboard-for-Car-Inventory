import React from 'react';
import { Link } from 'react-router-dom';

const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
  { id: 2, make: 'Honda', model: 'Accord', year: 2019 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2018 },
];

function CarList() {
  return (
    <div>
      <h1>Car Inventory</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <Link to={`/car/${car.id}`}>{car.make} {car.model}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-car">Add a New Car</Link>
    </div>
  );
}

export default CarList;
