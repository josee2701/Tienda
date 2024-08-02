import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Productos.css';

function Productos() {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    imagen: null,
    colores: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      imagen: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('precio', formData.precio);
    data.append('imagen', formData.imagen);
    data.append('colores', formData.colores);

    fetch('http://localhost:9000/api/products/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),  // Aquí se incluye el token CSRF
      },
      body: data,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      setSuccess(true);
      setFormData({
        nombre: '',
        precio: '',
        imagen: null,
        colores: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
      setError(error);
    });
  };

  // Función para obtener el token CSRF de las cookies
  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  return (
    <div className="container">
      <header className="header bg-primary text-white p-3">
        <h1 className="text-start">Nuevo Producto</h1>
      </header>
      <main className="mt-4">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {error && <div className="alert alert-danger" role="alert">Error al agregar el producto: {error.message}</div>}
          {success && <div className="alert alert-success" role="alert">Producto agregado exitosamente</div>}
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
              type="file"
              className="form-control"
              id="imagen"
              name="imagen"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="colores" className="form-label">Colores</label>
            <select
              className="form-control"
              id="colores"
              name="colores"
              value={formData.colores}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un color</option>
              <option value="rojo">Rojo</option>
              <option value="azul">Azul</option>
              <option value="verde">Verde</option>
              <option value="amarillo">Amarillo</option>
              <option value="negro">Negro</option>
              <option value="blanco">Blanco</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Agregar Producto</button>
        </form>
      </main>
    </div>
  );
}

export default Productos;
