// src/components/ListaProductos.js
import React from 'react';
import Producto from './Producto';

const ListaProductos = ({ productos }) => {
  return (
    <div>
      {productos.map(producto => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ListaProductos;
