// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import './Inventario.css';
import TablaInventario from './TablaInventario';

function Inventario() {
  return (
    <div className="container">
      <header className="header bg-primary text-white p-3">
        <h1 className="text-start">Inventario</h1>
      </header>
      <main className="mt-4">
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-primary"><Link to="/addstock">+ Agrgar a inventario</Link></button>
        </div>
        <TablaInventario />
      </main>
    </div>
  );
}

export default Inventario;
