import React, { useState } from 'react'
import Image1 from '/src/assets/register.png'
const FormValidations = () => {
    let initialState ={username:'',email:'',password:'',cpassword:'',ch:false}
    let [user,setUser]=useState({...initialState})
    let [errors,setErrors]=useState({})

    let handleChange=(e)=>setUser((prevState)=>({...prevState ,[e.target.name]:e.target.value}))
    
    let handleSubmit=(e)=>{
      e.preventDefault()
      let un = checkuname();
      let em = checkemail()
      if(un==false || em==false){e.preventDefault()}
      else alert(JSON.stringify(user))
    }
    let checkuname=()=>{
        if(user.username==''){
            setErrors((prevState)=>({...prevState ,username:"username is required"}))
            return false
        }else { setErrors((prevState)=>({...prevState ,username:""}))
            return true
        }
    }
    let checkemail=()=>{
        let pattern = /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/
        if(user.email==''){
            setErrors((prevState)=>({...prevState ,email:"email is required"}))
            return false
        }
        else if(!pattern.test(user.email)){
            setErrors((prevState)=>({...prevState ,email:"invalid email"}))
            return false
        }
        else { setErrors((prevState)=>({...prevState ,email:""}))
            return true
        }
    }
  return (
    <div className='container mt-5 shadow p-2'>
        <h1 className='text-center'>Form Validations</h1><hr/>
    <div className="row">
        <div className="col"> <img src={Image1} className="img-fluid"/>  </div>
        <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="row">
                  <div className="mb-3 col">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" 
                    value={user.username} onChange={handleChange} onBlur={checkuname}/>
                    {errors?.username && <span className='text-danger'>{errors.username}</span>}
                  </div>
                  <div className="mb-3 col">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" name="email" className="form-control"
                    value={user.email} onChange={handleChange} onBlur={checkemail}/>
                     {errors?.email && <span className='text-danger'>{errors.email}</span>}
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
                  <input type="checkbox" name="ch" className="form-check-input" 
                  onClick={()=>setUser({...user,ch:!user.ch})} />
                </div>
                <button  type="submit"  class="btn btn-primary" disabled={user.ch==false} >
                  Submit
                </button>             
            </form>
        </div>
    </div>
</div>
  )
}

export default FormValidations
