// src/components/Venta/Venta.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ListaProductos from './ListaProductos';

const productosIniciales = [
  {
    id: 1,
    nombre: 'Torre Gamer Amd Ryzen 7 5700x',
    precio: 4084905,
    imagen: 'url_imagen1',
    colores: 2
  },
  {
    id: 2,
    nombre: 'Todo En Uno Hp Celeron 8gb',
    precio: 1198500,
    imagen: 'url_imagen2',
    colores: 1
  },
  {
    id: 3,
    nombre: 'Apple Mac Mini M2 8gb Ram',
    precio: 2960000,
    imagen: 'url_imagen3',
    colores: 1
  },
  // Agrega más productos aquí
];

function Venta() {
  const [productos, setProductos] = useState(productosIniciales);

  return (
    <div className="container">
      <header className="header bg-primary text-white p-3">
        <h1 className="text-start">Venta</h1>
        
      </header>
      <main className="mt-4">
        
        <ListaProductos productos={productos} />
      </main>
    </div>
  );
}

export default Venta;
