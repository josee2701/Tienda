import axios from 'axios';
import React, { useEffect, useState } from 'react';

function WarehouseList() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/warehouses/')
      .then(response => {
        setWarehouses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the warehouses!', error);
      });
  }, []);

  return (
    <div>
      <h1>Warehouse List</h1>
      <ul>
        {warehouses.map(warehouse => (
          <li key={warehouse.id}>{warehouse.name} - {warehouse.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default WarehouseList;
