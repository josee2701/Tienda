// src/components/Venta/Venta.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import ListaProductos from './ListaProductos';

function Venta() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/products/')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <header className="header bg-primary text-white p-3">
        <h1 className="text-start">Tienda</h1>
        
      </header>
      <main className="mt-4">
        
        <ListaProductos productos={productos} />
      </main>
    </div>
  );
}

export default Venta;
