import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUserToAPI } from '../redux/userSlice'

const AddUser = () => {
    let initialState ={username:'',email:'',password:'',cpassword:''}
    let [user,setUser]=useState({...initialState})
    const dispatch=useDispatch()
    let handleChange=(e)=>{
          setUser((prevState)=>({...prevState ,[e.target.name]:e.target.value}))
    }
    let handleSubmit=async(e)=>{
      e.preventDefault()
      // try{
      //   await fetch("https://66e7f13cb17821a9d9daa59b.mockapi.io/users",{
      //     method:"POST",
      //     headers:{'content-type':'application/json'},
      //     body:JSON.stringify(user)
      //   })
      // }
      // catch(error){
      //     console.log(error.message)
      // }
        // dispatch(ADD_USER(user))
        dispatch(addUserToAPI(user))
        setUser({...initialState})
    }
  return (
    <div>
        <h1>Add User</h1><hr/>
        <div className='container p-2'>
               <form onSubmit={handleSubmit}>
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
                    <button  type="submit"  class="btn btn-primary"  >
                      Submit
                    </button>
                    
                </form>
            </div>
        </div>

  )
}

export default AddUser
