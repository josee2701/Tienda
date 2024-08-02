// src/TablaStock.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TablaStock() {
  const [stocks, setstocks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9000/api/stock/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setstocks(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  }, []);
  return (
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map(stock => (
          <tr key={stock.id}>
            <td>{stock.id}</td>
            <td>{stock.producto}</td>
            <td>{stock.cantidad}</td>
            <td>
              <Link to={`/updatestock/${stock.id}`}>
                <button className="btn btn-primary">
                  <i className="fa-solid fa-pen"></i>
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaStock;
