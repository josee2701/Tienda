// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Inventario from './components/Inventario/Inventario'; // Importar Inventario
import Navbar from './components/Navbar/Navbar';
import Venta from './components/Venta/Venta';

const Contacto = () => <h2>Contacto</h2>;

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Venta />} />
          <Route path="/productos" element={<Inventario />} /> 
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
