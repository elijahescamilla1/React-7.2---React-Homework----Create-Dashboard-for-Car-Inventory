import React from 'react';
import { useParams } from 'react-router-dom';

const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
  { id: 2, make: 'Honda', model: 'Accord', year: 2019 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2018 },
];

function CarDetail() {
  const { id } = useParams();
  const car = cars.find(car => car.id === parseInt(id));

  return (
    <div>
      <h1>{car.make} {car.model}</h1>
      <p>Year: {car.year}</p>
      <Link to="/">Back to Inventory</Link>
    </div>
  );
}

export default CarDetail;
