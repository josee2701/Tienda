import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InventoryList from './components/InventoryList';
import ProductList from './components/ProductList';
import SaleList from './components/SaleList';
import WarehouseList from './components/WarehouseList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/sales" element={<SaleList />} />
          <Route path="/warehouses" element={<WarehouseList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
