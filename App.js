import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import AddCar from './components/AddCar';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/add-car" element={<AddCar />} />
      </Routes>
    </Router>
  );
}

export default App;
