// src/TablaProductos.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const productos = [
  { id: 1, empresa: 'AZ Smart Technology LTDA', nombre: '5 Megas', operador: 'Telefonía M2M', moneda: 'Col', precio: '7000,00' },
  { id: 2, empresa: 'Campo Fe', nombre: '5 Megas', operador: 'Telefonía M2M', moneda: 'Usd', precio: '3,00' },
  { id: 3, empresa: 'Flota Proseguridad', nombre: '5 Megas', operador: 'Telefonía M2M', moneda: 'Usd', precio: '3,00' },
  { id: 4, empresa: 'Percapita', nombre: '5 Megas', operador: 'Telcel', moneda: 'Mex', precio: '30,00' },
  { id: 5, empresa: 'SCO CO', nombre: '5 Megas', operador: 'Telefonía M2M', moneda: 'Col', precio: '7000,00' },
  { id: 6, empresa: 'SCO CO', nombre: '3 Megas', operador: 'Claro CO', moneda: 'Col', precio: '57800,00' },
  { id: 7, empresa: 'SCO CO', nombre: '5 Megas', operador: 'Claro CO', moneda: 'Col', precio: '82400,00' },
  { id: 8, empresa: 'SCO CO', nombre: 'AZ 5 MB Mes', operador: 'Claro CO', moneda: 'Col', precio: '7700,00' },
  { id: 9, empresa: 'Vertical LATAM', nombre: '5 Megas', operador: 'Telefonía M2M', moneda: 'Usd', precio: '3,00' },
];

function TablaProductos() {
  return (
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Empresa</th>
          <th>Nombre</th>
          <th>Operador</th>
          <th>Moneda</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {productos.map(producto => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.empresa}</td>
            <td>{producto.nombre}</td>
            <td>{producto.operador}</td>
            <td>{producto.moneda}</td>
            <td>{producto.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaProductos;
