import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate= useNavigate()
  const location = useLocation()
  // console.log("login",location)
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        try{
          let res = await fetch(`${import.meta.env.VITE_BASE_URL}/users?email=${user.email}`)
          let data  = await res.json()
          console.log(data)
          if(data.length==0)
            toast.error("invalid credentails")
          else if(data[0].password != user.password)
            toast.error("invalid credentails")
          else {
            let obj = {isLoggedIn:true,email:user.email,name:data[0].name,role:data[0].role,
              userId:data[0].id
            }
            sessionStorage.setItem("8thjulreact",JSON.stringify(obj))
            toast.success("loggeded successfully")

            const redirectTo = location.state?.from || '/'
            navigate(redirectTo) 
          }
        
        }
        catch(err){toast.error(err.message)}
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Login
            </button>
          </form>
        </div>
      );
}

export default Login
