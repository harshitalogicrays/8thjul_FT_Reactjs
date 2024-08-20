import React from 'react'
import {Button, Card, Col} from 'react-bootstrap'
const ProductCard = ({product}) => {
  return (
 <Col xs={3}>
      <Card>
      <Card.Img variant="top" src={product.image} 
      height={170}/>
      <Card.Body>

        <Card.Title>{product.name}
          {product.stock>0 ? <span
            class="badge rounded-pill text-bg-success float-end">In Stock</span>
           : <span
           class="badge rounded-pill text-bg-danger float-end">Out of Stock</span>}      
          </Card.Title> 
        <Card.Text>
        {product.category}<br/>{product.brand}<br/>
        ${product.price}<br/>
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
 </Col>
  )
}

export default ProductCard
