import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Importar toast
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
    const venta = {
      fecha: new Date().toISOString().split('T')[0], // Fecha en formato YYYY-MM-DD
      precio: producto.precio,
      cliente: 'Cliente ejemplo', // Puedes ajustar esto según tu lógica
      product: producto.id,
      cantidad: cantidad
    };

    // Realizar la solicitud POST al backend
    fetch('http://localhost:9000/api/ventas/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(venta),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la compra');
        }
        return response.json();
      })
      .then(data => {
        toast.success('Compra exitosa!');
        setMostrarFormulario(false);
        setCompraExitosa(true);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error en la compra');
      });
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
      </div>
    </div>
  );
};

export default Producto;
