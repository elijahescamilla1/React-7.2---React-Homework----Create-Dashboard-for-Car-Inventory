import React, { useState } from 'react';
import CreateCar from './CreateCar';
import UpdateCar from './UpdateCar';
import './DataTable.css';

const initialCars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
  { id: 2, make: 'Honda', model: 'Accord', year: 2019 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2018 },
];

function DataTable() {
  const [cars, setCars] = useState(initialCars);
  const [editingCar, setEditingCar] = useState(null);

  const addCar = (car) => {
    car.id = cars.length ? cars[cars.length - 1].id + 1 : 1;
    setCars([...cars, car]);
  };

  const updateCar = (id, updatedCar) => {
    setCars(cars.map(car => car.id === id ? updatedCar : car));
    setEditingCar(null);
  };

  const deleteCar = (id) => {
    setCars(cars.filter(car => car.id !== id));
  };

  return (
    <div>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>
                <button onClick={() => setEditingCar(car)}>Edit</button>
                <button onClick={() => deleteCar(car.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingCar ? (
        <UpdateCar car={editingCar} onSubmit={updateCar} />
      ) : (
        <CreateCar onSubmit={addCar} />
      )}
    </div>
  );
}

export default DataTable;
