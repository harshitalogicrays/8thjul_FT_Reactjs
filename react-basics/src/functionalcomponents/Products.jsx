import React, { useState } from 'react'
import {productlist} from '/src/assets/productlist.js'
import ProductItems from './ProductItems'
const Products = () => {
    const [products,setProducts]=useState([...productlist])
  return (
   <>
    <ProductItems products={products}></ProductItems>
   </>
  )
}

export default Products
