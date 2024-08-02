// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AddProducto from './components/Productos/AddProductos';
import Productos from './components/Productos/Productos';
import UpdateProducto from './components/Productos/UpdateProductos';
import AddStock from './components/Stock/AddStock';
import Stock from './components/Stock/Inventario';
import UpdateStock from './components/Stock/UpdateStock';
import Tienda from './components/Tienda/Tienda';
import Ventas from './components/Ventas/Ventas';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tienda />} />
          <Route path="/productos" element={<Productos />} /> 
          <Route path="/addproducto" element={<AddProducto />} />
          <Route path="/updateproducto/:id" element={<UpdateProducto />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/addstock" element={<AddStock />} />
          <Route path="/updatestock" element={<UpdateStock />} />
          <Route path="/ventas" element={<Ventas />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
