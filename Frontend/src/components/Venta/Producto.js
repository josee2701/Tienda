// src/components/Producto.js
import React from 'react';

const Producto = ({ producto }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={producto.imagen} className="img-fluid rounded-start" alt={producto.nombre} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text"><strong>Precio:</strong> ${producto.precio}</p>
            <p className="card-text"><small className="text-muted">Disponible en {producto.colores} colores</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producto;
