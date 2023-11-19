import React from 'react'
import  { useState } from 'react';
import commerce from '../lib/commerce';
import { useEffect } from 'react';
import ProductsList from './ProductList';




export default function Productx() {

        const [products, setProducts] = useState([]);

        const fetchProducts = () => {
            commerce.products.list().then((products) => {
              setProducts(products.data);
              console.log(products.data)
              
            }).catch((error) => {
              console.log('There was an error fetching the products', error)
            });
          }
          useEffect(() => {
            fetchProducts();
          }, []);
          


  return (
    <div>Product
<ProductsList
products={products}
/>

asdasdasd

    </div>
  )
}
