import React from 'react'
import ProductCard from './ProductCard'
import { Row } from 'react-bootstrap'

const ProductItems = ({products}) => {
  return (
   <div className='container mt-5'>
    {products.length==0 && <h1>No Product Found</h1>}
    <Row>
          {products.map((product)=><ProductCard key={product.id} product={product}></ProductCard>)}
    </Row>
   </div>
  )
}

export default ProductItems
