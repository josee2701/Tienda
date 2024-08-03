// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TablaVentas from './TablaVentas';

function Ventas() {
  return (
    <div className="container">
      <header className="header bg-primary text-white p-3">
        <h1 className="text-start">Ventas</h1>
      </header>
      <main className="mt-4">
        <TablaVentas />
      </main>
    </div>
  );
}

export default Ventas;
