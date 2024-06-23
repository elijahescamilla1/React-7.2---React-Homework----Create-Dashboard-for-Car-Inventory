import React from 'react';
import { useForm } from 'react-hook-form';

function CreateCar({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <div>
      <h2>Add a New Car</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Make: </label>
          <input {...register('make', { required: true })} />
        </div>
        <div>
          <label>Model: </label>
          <input {...register('model', { required: true })} />
        </div>
        <div>
          <label>Year: </label>
          <input type="number" {...register('year', { required: true })} />
        </div>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default CreateCar;
