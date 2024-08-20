import React from 'react'
import Container from 'react-bootstrap/Container'
import {Row,Col, Image, Form, Button} from 'react-bootstrap'
import Image1 from '/src/assets/login.png'
import {useForm} from 'react-hook-form'
const ReactHookFormDemo = () => {
    const {register,handleSubmit,  formState: { errors },trigger,getValues}=useForm()
    let storeData=(data)=>{
        alert(JSON.stringify(data))
    }
  return (
    <Container> <h1>React Hook Form</h1>
    <Row> <Col xs={4}>  <Image src={Image1} fluid/> </Col>
      <Col> <Form onSubmit={handleSubmit(storeData)}>
           <Row className='mb-3'>
            <Col xs={2}> <Form.Label>Username</Form.Label></Col>
            <Col><Form.Control {...register('username', {required:"username is required"} )}
            onBlur={()=>trigger('username')}></Form.Control>
            {errors.username && <span className="text-danger">{errors.username.message}</span>}
            </Col>              
            </Row>
            <Row className='mb-3'>
            <Col xs={2}> <Form.Label>Email</Form.Label></Col>
            <Col><Form.Control {...register('email', 
            {required:{value:true,message:"Email is required"},
            pattern:{ value:/^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/,message:"Invalid Email"}    
            })}
            onBlur={()=>trigger('email')}></Form.Control>
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </Col>  </Row>
            <Row className='mb-3'>
            <Col xs={2}> <Form.Label>Password</Form.Label></Col>
            <Col><Form.Control type="password" {...register('password' ,{required:"password is required", minLength:{value:5,message:"min 5 char"},maxLength:{value:20,message:"max 20 char"}} )}
             onBlur={()=>trigger('password')}
            ></Form.Control>
            {errors.password && <span className="text-danger">{errors.password.message}</span>}</Col>  </Row>
            <Row className='mb-3'>
            <Col xs={2}> <Form.Label>Confirm Password</Form.Label></Col>
            <Col><Form.Control type="password" {...register('cpassword', 
            {required:"cpassword is required",
                validate:(cpwd)=>{
                    let {password}=getValues()
                    return password==cpwd || "password not same"
                } } )}
             onBlur={()=>trigger('cpassword')}></Form.Control>
            {errors.cpassword && <span className="text-danger">{errors.cpassword.message}</span>}
            </Col>              </Row>
            <div className="d-grid gap-2" >  <Button type="submit" variant='info'>Submit</Button> </div>    
        </Form>
      </Col>
    </Row>
    </Container>
  )
}

export default ReactHookFormDemo
