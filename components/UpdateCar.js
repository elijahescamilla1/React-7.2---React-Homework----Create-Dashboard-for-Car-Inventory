import React from 'react';
import { useForm } from 'react-hook-form';

function UpdateCar({ car, onSubmit }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: car
  });

  const submitHandler = (data) => {
    onSubmit(car.id, data);
    reset();
  };

  return (
    <div>
      <h2>Update Car</h2>
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
        <button type="submit">Update Car</button>
      </form>
    </div>
  );
}

export default UpdateCar;
