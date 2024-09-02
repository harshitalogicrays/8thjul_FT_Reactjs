import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import {toast} from 'react-toastify'
export const myContext = React.createContext()
const CartContext = ({children}) => {
    const [cartItems,setCartItems]=useState([])
        const [total,setTotal]=useState(0)
        const addtocart=(product)=>{
            // alert(JSON.stringify(product))
            setCartItems([...cartItems,{...product,qty:1}])
            toast.success(`${product.title } added to cart`)
        }
        const increase=()=>{}
        const decrease=()=>{}
        const removeFromCart=()=>{}
        const emptyCart=()=>{}
        const calculate_total=()=>{}
        
  return (
   <myContext.Provider value={{cartItems,total,addtocart,increase,decrease,removeFromCart,emptyCart,calculate_total}}>
    {children}
   </myContext.Provider>
  )
}

export default CartContext

export const useMycontext = ()=>useContext(myContext)