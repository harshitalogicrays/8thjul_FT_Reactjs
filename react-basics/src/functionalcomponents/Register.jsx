import React, { useState } from 'react'
import Image1 from '/src/assets/register.png'
const Register = () => {
  let initialState ={username:'ram',email:'ram@gmail.com',password:'',cpassword:'',ch:false}
  let [user,setUser]=useState({...initialState})
  let handleChange=(e)=>{
    // console.log(e)
    // setUser({...user,[e.target.name]:e.target.value}) 
    setUser((prevState)=>({...prevState ,[e.target.name]:e.target.value}))
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    alert(JSON.stringify(user))
  }
  return (
    <div className='container mt-5 shadow p-2'>
        <div className="row">
            <div className="col"> <img src={Image1} className="img-fluid"/>  </div>
            <div className="col">
                {/* <form onSubmit={handleSubmit}>
                  <div className="row">
                      <div className="mb-3 col">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" name="username" className="form-control" 
                        value={user.username} onChange={handleChange}/>
                      </div>
                      <div className="mb-3 col">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" name="email" className="form-control"
                        value={user.email} onChange={handleChange}/>
                      </div>  
                  </div>
                   
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Password</label>
                      <input type="text" name="password" className="form-control"
                      value={user.password} onChange={handleChange}/>
                    </div>
                    <div className="mb-3 form-floating">
                       <input type="text"  name="cpassword" className="form-control" placeholder=''
                       value={user.cpassword} onChange={handleChange}/>
                      <label htmlFor="" className="form-label">Confirm Password</label>
                    </div>
                    <div className="mb-3 form-check">
                      <label htmlFor="" className="form-label">I accept T & C</label>
                      <input type="checkbox" name="ch" className="form-check-input" />
                    </div>
                    <button  type="submit"  class="btn btn-primary"  >
                      Submit
                    </button>
                    
                </form> */}

            <form onSubmit={handleSubmit}>
                  <div className="row">
                      <div className="mb-3 col">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" name="username" className="form-control" 
                        value={user.username} onChange={(e)=> setUser((prevState)=>({...prevState ,username:e.target.value}))}/>
                      </div>
                      <div className="mb-3 col">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" name="email" className="form-control"
                        value={user.email} onChange={(e)=> setUser((prevState)=>({...prevState ,email:e.target.value}))}/>
                      </div>  
                  </div>
                   
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">Password</label>
                      <input type="text" name="password" className="form-control"
                      value={user.password} onChange={(e)=> setUser((prevState)=>({...prevState ,password:e.target.value}))}/>
                    </div>
                    <div className="mb-3 form-floating">
                       <input type="text"  name="cpassword" className="form-control" placeholder=''
                       value={user.cpassword} onChange={(e)=> setUser((prevState)=>({...prevState ,cpassword:e.target.value}))}/>
                      <label htmlFor="" className="form-label">Confirm Password</label>
                    </div>
                    <div className="mb-3 form-check">
                      <label htmlFor="" className="form-label">I accept T & C</label>
                      <input type="checkbox" name="ch" className="form-check-input" 
                      checked={user.ch}
                     onClick={(e)=> setUser((prevState)=>({...prevState ,ch:!prevState.ch}))}/>
                    </div>
                    <button  type="submit"  class="btn btn-primary"  >
                      Submit
                    </button>
                    
            </form>
            </div>
        </div>
    </div>
  )
}

export default Register
