import React from 'react';
import './DataTable.css';

const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
  { id: 2, make: 'Honda', model: 'Accord', year: 2019 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2018 },
];

function DataTable() {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
