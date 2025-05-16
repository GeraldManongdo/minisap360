import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InventoryDashboard from './components/InventoryDashboard';
import AddProduct from './components/AddProduct';
import ProductDetails from './components/ProductDetails';
import SideNavLayout from './components/SideNavLayout';

function App() {
  return (
    <Router>
      <SideNavLayout />
      <Routes>
        <Route path="/" element={<InventoryDashboard />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
