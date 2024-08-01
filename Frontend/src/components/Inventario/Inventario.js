// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Inventarios.css';
import TablaProductos from './TablaProductos';

function Inventario() {
  return (
    <div className="container">
      <header className="header bg-primary text-white p-3">
        <h1 className="text-start">Inventario</h1>
      </header>
      <main className="mt-4">
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-primary">+ Agregar Producto</button>
          <input type="text" className="form-control w-25" placeholder="Buscar..." />
        </div>
        <TablaProductos />
      </main>
    </div>
  );
}

export default Inventario;
