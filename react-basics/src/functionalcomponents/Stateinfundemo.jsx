import React, { useState } from 'react'

const Stateinfundemo = () => {
    let [result,setResult] = React.useState(0)
    let handleAdd = (a,b)=>{ 
        setResult(a+b)
        console.log(result)
    }

    let [count,setCount]=useState('')
    let handleCount=()=>{
        // setCount(parseInt(count+1))
        setCount((prev)=>parseInt(prev + 1 ))
    }
  return (
   <>
   <button type="button" class="btn btn-primary me-3" onClick={()=>handleAdd(2,3)} >Add </button>
    <div>{result}</div> <br/>

    <button type="button"   class="btn btn-primary" onClick={handleCount}> Counter</button>
    <h1>{count}</h1>
   </>
  )
}

export default Stateinfundemo
