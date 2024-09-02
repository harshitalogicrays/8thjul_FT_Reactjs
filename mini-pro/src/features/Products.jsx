import React, { useEffect, useState } from 'react'
// import {productlist} from '/src/assets/productlist.js'
import ProductItems from './ProductItems'
import { toast } from 'react-toastify'
const Products = () => {
    // const [products,setProducts]=useState([...productlist])
    useEffect(()=>{
      getAllProducts()
    },[])

    let getAllProducts=async()=>{
      try{
         let res =  await fetch('https://dummyjson.com/products')
         let data =  await res.json()
         setProducts(data.products)
      }
      catch(err){toast.error(err.message)}
    }

    const [products,setProducts]=useState([])
  return (
   <>
    <ProductItems products={products}></ProductItems>
   </>
  )
}

export default Products
