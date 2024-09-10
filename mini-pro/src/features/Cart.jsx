import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useMycontext } from '../CartContext';
import { toast } from 'react-toastify';
const Cart = () => {
  const redirect = useNavigate()
  let location = useLocation();
  console.log(location)
  const data = useMycontext()
  const {cartItems,total,increase,decrease,removeFromCart,emptyCart,calculate_total} = data
   useEffect(()=>{
      calculate_total() 
   },[cartItems])

   let handleCheckout=()=>{
    if(sessionStorage.getItem("8thjulreact") != null){
      saveorder()
   
    }
      else{
        redirect('/login',{state:{from:location.pathname}})
      } 
 
   }

   let saveorder=async()=>{
    try{
      let data =  JSON.parse(sessionStorage.getItem("8thjulreact"))
      let obj = {cartItems,total,email:data.email,orderStatus:"Pending",orderDate:new Date().toLocaleDateString(),orderTime:new Date().toLocaleTimeString(),createdAt:Date.now()}
        await fetch(`${import.meta.env.VITE_BASE_URL}/orders`,{
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(obj)
        })
      emptyCart()
      toast.success("order placed successfully")
      redirect('/')
    }
    catch(err){toast.error(err.message)}

  
   }
      return (
        <div className="max-w-7xl mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-12">
        
        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg p-6">
            {cartItems.length==0 && <h2>No Item in Cart</h2>}
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-6 border-b border-gray-200">
                <div className="flex items-center gap-6">
                  <img src={item.images[0]} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Total Price: ${(item.qty*item.price).toFixed(2)}</p>
                    <div className="flex items-center mt-4">
                      <label htmlFor={`quantity-${item.id}`} className="mr-3 text-gray-700">
                        Quantity:
                      </label>
                      
                      <button className='px-2' onClick={()=>decrease(item)}>-</button>
                      <input
                        type="text"
                        id={`quantity-${item.id}`}
                        name={`quantity-${item.id}`}
                        min="1"
                        value={item.qty}
                        className=" border w-8 border-gray-300 rounded-lg text-center"
                      />
                   <button className='px-2' onClick={()=>increase(item)}>+</button>
                    </div>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700" onClick={()=>removeFromCart(item.id)}>
                  <TrashIcon className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

     
        <div className="lg:w-1/3">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg mb-4">
            
              <span className="text-gray-700">Shipping</span>
              <span className="font-medium text-gray-900">{total<50 ? '$5.00' :'$0.00'}</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-6">
              <span>Total</span>
              {total<50 ?     <span className="text-gray-900">${(total + 5).toFixed(2)}</span> :
                   <span className="text-gray-900">${(total + 0).toFixed(2)}</span> }
         
            </div>
            <div className="flex">
               <button className="mt-8 w-50 bg-red-600 text-white p-3 rounded-lg text-lg font-medium hover:bg-red-700 me-2 transition duration-200" onClick={()=>emptyCart()}>
                Empty Cart
              </button>
                 <button className="mt-8 w-50 bg-indigo-600 text-white p-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart