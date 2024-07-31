import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SaleList() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/sales/')
      .then(response => {
        setSales(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the sales!', error);
      });
  }, []);

  return (
    <div>
      <h1>Sale List</h1>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>{sale.product.name} - {sale.quantity} sold from {sale.warehouse.name} on {sale.sale_date}</li>
        ))}
      </ul>
    </div>
  );
}

export default SaleList;
