import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Productos.css';

function Productos() {
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    precio: '',
    imagen: '',
    colores: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío del formulario
    console.log(formData);
  };

  return (
    <div className="container">
      <header className="header bg-primary text-white p-3">
        <h1 className="text-start">Nuevo Producto</h1>
      </header>
      <main className="mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">Precio</label>
            <input
              type="number"
              className="form-control"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">Imagen</label>
            <input
              type="text"
              className="form-control"
              id="imagen"
              name="imagen"
              value={formData.imagen}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="colores" className="form-label">Colores</label>
            <input
              type="number"
              className="form-control"
              id="colores"
              name="colores"
              value={formData.colores}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Agregar Producto</button>
        </form>
      </main>
    </div>
  );
}

export default Productos;
