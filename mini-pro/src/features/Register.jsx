import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const redirect = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
          // await fetch(`${import.meta.env.VITE_BASE_URL}/users`,{
          //   method:"POST",
          //   headers:{'content-type':'application/json'},
          //   body:JSON.stringify({...user,role:'1',createdAt:new Date()})
          // })

          await axios.post(`${import.meta.env.VITE_BASE_URL}/users`,{...user,role:'1',createdAt:new Date()})
          toast.success("registered successfully")
          redirect('/login') //redirect login page 
        }
        catch(err){toast.error(err.message)}
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-center">Register</h2>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>
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
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Register
            </button>
          </form>
        </div>
      );
}

export default Register
