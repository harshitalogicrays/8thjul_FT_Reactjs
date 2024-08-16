import React from 'react'
import CustomComp from './CustomComp'

const UsesCustomcomp = () => {
  return (
  <>
    <CustomComp type="submit" click={()=>alert("button clicked")}>Click Me</CustomComp>
    <CustomComp class1="btn-danger" style={{color:'yellow'}} disabled={true}></CustomComp>
  </>
  )
}

export default UsesCustomcomp
