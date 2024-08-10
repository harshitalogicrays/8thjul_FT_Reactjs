import React from 'react'

const Eventdemoinfun = () => {
    let handleClick=()=>{
        alert("handleclick called")
    }
    let handleAdd = (a,b)=>alert(a+b)
  return (
    <>
        <button type="button" class="btn btn-primary me-3" onClick={()=>alert("button clicked")} >Click ME </button>
        <button type="button" class="btn btn-primary me-2" onClick={handleClick} >Click ME </button>
        <button type="button" class="btn btn-primary me-3" onClick={()=>handleClick()} >Click ME </button>
        <button type="button" class="btn btn-primary me-3" onClick={()=>handleAdd(2,3)} >Add </button>
    </>
  )
}

export default Eventdemoinfun
