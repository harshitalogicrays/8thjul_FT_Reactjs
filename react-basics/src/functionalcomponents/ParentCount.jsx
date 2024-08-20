import React, { useState } from 'react'
import ChildCount from './ChildCount'

const ParentCount = () => {
    let [count,setCount]=useState('')
    let handleClick=(val)=>{
        setCount(parseInt(count + val))
    }
    let handleClick1=(val)=>{  
       count>1 ?  setCount(parseInt(count - val)) : setCount(1)
    }
  return (
   <>
    <ChildCount increaseCount={handleClick}
    decreaseCount={handleClick1}/>
   
    <h1>{count}</h1>
   </>
  )
}

export default ParentCount
