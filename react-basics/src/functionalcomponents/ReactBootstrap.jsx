import React from 'react'
import Container from 'react-bootstrap/Container'
import {Row,Col, Image, Form, Button} from 'react-bootstrap'
import Image1 from '/src/assets/login.png'
import { MyButton, TextBox } from './styledcomp'
const ReactBootstrap = () => {
  return (
  <>
    <Container>
        <h1>React Bootstrap Form</h1>
        {/* <Row>
          <Col xs={4} className="bg-info">erwerwwr</Col>
          <Col className="bg-danger" xs={{span:'4',offset:'3'}}>wrwr</Col>
        </Row> */}

        <Row>
          <Col xs={4}>
            <Image src={Image1} fluid/>
          </Col>
          <Col>
            <Form>
              {/* <Row>
                <Col> 
                <Form.Group className='mb-3'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group></Col>
              </Row> */}
               
               <Row className='mb-3'>
                <Col xs={2}> <Form.Label>Username</Form.Label></Col>
                <Col><Form.Control></Form.Control></Col>              
                </Row>
                <Row className='mb-3'>
                <Col xs={2}> <Form.Label>Email</Form.Label></Col>
                <Col><Form.Control></Form.Control></Col>              
                </Row>
                <Row className='mb-3'>
                <Col xs={2}> <Form.Label>Password</Form.Label></Col>
                <Col><Form.Control type="password"></Form.Control></Col>              
                </Row>
                <Row className='mb-3'>
                <Col xs={2}> <Form.Label>Confirm Password</Form.Label></Col>
                <Col><Form.Control></Form.Control></Col>              
                </Row>
                <div className="d-grid gap-2" >
                   {/* <Button type="submit" variant='info'>Submit</Button> */}
                   <MyButton  type="submit">Submit</MyButton>
                </div>
                
            </Form>
          </Col>
        </Row>

        <TextBox type="date"/>
    </Container>
  </>
  )
}

export default ReactBootstrap
