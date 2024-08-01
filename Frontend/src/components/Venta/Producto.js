import React, { useState } from 'react';
import './Productos.css';
const Producto = ({ producto }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [compraExitosa, setCompraExitosa] = useState(false);

  const handleComprarClick = () => {
    setMostrarFormulario(true);
  };

  const handleCantidadChange = (event) => {
    setCantidad(event.target.value);
  };

  const handleConfirmarClick = () => {
    // Aquí puedes agregar la lógica para confirmar la compra
    console.log(`Producto comprado: ${producto.nombre}, Cantidad: ${cantidad}`);
    setMostrarFormulario(false);
    setCompraExitosa(true);

    // Ocultar el mensaje de éxito después de 3 segundos
    setTimeout(() => {
      setCompraExitosa(false);
    }, 999);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={producto.imagen} className="img-fluid rounded-start" alt={producto.nombre} />
        </div>
        <div className="col-md-8 d-flex flex-column">
          <div className="card-body flex-grow-1">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text"><strong>Precio:</strong> ${producto.precio}</p>
            <p className="card-text"><small className="text-muted">Disponible en {producto.colores} colores</small></p>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            {!mostrarFormulario && (
              <button className="btn btn-primary" onClick={handleComprarClick}>Comprar</button>
            )}
          </div>
          {mostrarFormulario && (
            <div className="mt-3">
              <div className="d-flex justify-content-end align-items-center">
                <input 
                  type="number" 
                  value={cantidad} 
                  onChange={handleCantidadChange} 
                  className="form-control me-2" 
                  min="1"
                />
                <button className="btn btn-success" onClick={handleConfirmarClick}>Confirmar</button>
              </div>
            </div>
          )}
        </div>
      {compraExitosa && (
            <div className="alert alert-success mt-3" role="alert">
              Compra exitosa!
            </div>
          )}
      </div>
    </div>
  );
};

export default Producto;