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
            let itemIndex =  cartItems.findIndex(item=>item.id==product.id)
            if(itemIndex == -1){
                setCartItems([...cartItems,{...product,qty:1}])
                toast.success(`${product.title } added to cart`)
            }
            else  toast.info(`${product.title } already added to cart`)

        }
        const increase=(product)=>{
            let itemIndex =  cartItems.findIndex(item=>item.id==product.id)
            if(itemIndex != -1){
                if(  cartItems[itemIndex].qty < product.stock)
                    cartItems[itemIndex].qty++
                else toast.info(` only ${product.stock } qty available`)
            }
            setCartItems([...cartItems])
        }
        const decrease=(product)=>{
            let itemIndex =  cartItems.findIndex(item=>item.id==product.id)
            if(itemIndex != -1){
                if(  cartItems[itemIndex].qty > 1)
                    cartItems[itemIndex].qty--
                else  cartItems[itemIndex].qty=1
            }
            setCartItems([...cartItems])
        }
        const removeFromCart=(id)=>{
            //splice or filter 
            // let itemIndex =  cartItems.findIndex(item=>item.id==id)
            // cartItems.splice(itemIndex,1)
            // setCartItems([...cartItems])

            let filter =  cartItems.filter(item=>item.id!=id)
            setCartItems([...filter])
        }
        const emptyCart=()=>{ setCartItems([]);setTotal(0)}
        const calculate_total=()=>{
            let total = cartItems.reduce((prev,curr)=>{return prev+curr.price*curr.qty},0)
            setTotal(total)
        }
        
  return (
   <myContext.Provider value={{cartItems,total,addtocart,increase,decrease,removeFromCart,emptyCart,calculate_total}}>
    {children}
   </myContext.Provider>
  )
}
export default CartContext
export const useMycontext = ()=>useContext(myContext)