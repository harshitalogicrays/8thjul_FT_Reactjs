import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductItems from '../features/ProductItems'

const Home = () => {
  // console.log(import.meta.env.VITE_BASE_URL)
  const data = useLoaderData()
  // console.log(data)
  return (
    <>
  <h1>Home Page</h1>
  <ProductItems products={data.products}/>
  </>
  )
}

export default Home
