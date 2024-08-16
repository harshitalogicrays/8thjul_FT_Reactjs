import React from 'react'

const CustomComp = ({type="button",children="button",class1="btn-primary",click,...r}) => {
    console.log(r)
  return (
   <>
    <button type={type} 
    className={`m-1 btn ${class1}`}
    onClick={click} {...r}>{children}</button>
   </>
  )
}

export default CustomComp
