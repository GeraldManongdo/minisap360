import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';


const InventoryDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, 'products'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Inventory Dashboard</h2>
        <Link to="/add" className="btn btn-primary">+ Add Product</Link>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Stock</th>
            <th>Unit Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.product_id}</td>
              <td>{prod.name}</td>
              <td>{prod.type}</td>
              <td>{prod.stock}</td>
              <td>₱{prod.price}</td>
              <td>{prod.status}</td>
              <td>
                <Link to={`/product/${prod.id}`} className="btn btn-info btn-sm">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryDashboard;
