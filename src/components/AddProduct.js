import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [form, setForm] = useState({
    product_id: '',
    name: '',
    type: '',
    stock: '',
    price: '',
    status: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'products'), form);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        {['product_id', 'name', 'type', 'stock', 'price', 'status'].map((field, i) => (
          <div className="mb-3" key={i}>
            <label className="form-label">{field.replace('_', ' ').toUpperCase()}</label>
            <input
              type={field === 'stock' || field === 'price' ? 'number' : 'text'}
              name={field}
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
