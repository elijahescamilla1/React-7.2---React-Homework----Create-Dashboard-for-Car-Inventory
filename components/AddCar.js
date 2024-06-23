import React, { useState } from 'react';

function AddCar() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding car logic here
    console.log({ make, model, year });
  };

  return (
    <div>
      <h1>Add a New Car</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make: </label>
          <input type="text" value={make} onChange={(e) => setMake(e.target.value)} required />
        </div>
        <div>
          <label>Model: </label>
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
        </div>
        <div>
          <label>Year: </label>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        </div>
        <button type="submit">Add Car</button>
      </form>
      <Link to="/">Back to Inventory</Link>
    </div>
  );
}

export default AddCar;
