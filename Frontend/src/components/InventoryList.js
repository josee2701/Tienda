import axios from 'axios';
import React, { useEffect, useState } from 'react';

function InventoryList() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/inventory/')
      .then(response => {
        setInventory(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the inventory!', error);
      });
  }, []);

  return (
    <div>
      <h1>Inventory List</h1>
      <ul>
        {inventory.map(item => (
          <li key={item.id}>{item.product.name} - {item.quantity} in {item.warehouse.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryList;
