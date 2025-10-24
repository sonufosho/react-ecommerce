import { useState, useEffect } from 'react';
import axios from 'axios'
import Header from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css'

export default function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}