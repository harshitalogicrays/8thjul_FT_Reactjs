import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [count,setCount] = useState('')
    const [show,setShow]=useState(true)
    let handleCount = ()=>setCount((prev)=>parseInt(prev+1))

    let calculation=(n)=>{
        console.log("calculation called" ,n)
        for(let i=1;i<=1000000000;i++){}
        return n
    }

    // let checknum = calculation(count)

    let checknum = useMemo(()=>{return calculation(count)},[count])

  return (
   <>
    <button  type="button" class="btn btn-primary" onClick={handleCount} >Counter </button><br/>
    <h1>{checknum}</h1>   
    <button  type="button" class="btn btn-primary"
    onClick={()=>setShow(!show)}>{show ? "Welcome Back!":'Please login'} </button> 
   </>
  )
}

export default UseMemoHook
