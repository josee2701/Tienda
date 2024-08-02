import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Productos.css';

function EditarProducto() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    imagen: null,
    colores: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      // Fetch the product details if we are in edit mode
      fetch(`http://localhost:9000/api/products/${id}/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setFormData({
            nombre: data.nombre,
            precio: data.precio,
            imagen: null, // We don't pre-fill the file input
            colores: data.colores
          });
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
          setError(error);
        });
    }
  }, [id]);

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
    if (formData.imagen) {
      data.append('imagen', formData.imagen);
    }
    data.append('colores', formData.colores);

    const url = id ? `http://localhost:9000/api/products/${id}/` : 'http://localhost:9000/api/products/';
    const method = id ? 'PUT' : 'POST';

    fetch(url, {
      method: method,
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
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
        <h1 className="text-start">{id ? 'Editar Producto' : 'Nuevo Producto'}</h1>
      </header>
      <main className="mt-4">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {error && <div className="alert alert-danger" role="alert">Error: {error.message}</div>}
          {success && <div className="alert alert-success" role="alert">Producto {id ? 'actualizado' : 'agregado'} exitosamente</div>}
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
          <button type="submit" className="btn btn-primary">{id ? 'Guardar cambios' : 'Agregar Producto'}</button>
        </form>
      </main>
    </div>
  );
}

export default EditarProducto;
