import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>Product Details</h2>
      <ul className="list-group">
        {Object.entries(product).map(([key, value]) => (
          <li className="list-group-item" key={key}>
            <strong>{key.replace('_', ' ').toUpperCase()}:</strong> {value}
          </li>
        ))}
      </ul>
      <Link to="/" className="btn btn-secondary mt-3">Back</Link>
    </div>
  );
};

export default ProductDetails;
