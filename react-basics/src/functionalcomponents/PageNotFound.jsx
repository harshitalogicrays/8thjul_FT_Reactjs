import React from 'react'
// import './notfound.css'
import cssmodule from './notfound.module.css'

export const PageNotFound = () => {
    // let cssvar= {color:'red',position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}
  return (
    <>
    {/* <h1 style={{color:'red'}}> 404 PageNotFound</h1> */}
    {/* <h1 style={cssvar}> 404 PageNotFound</h1> */}

    {/* <h1 className='notfound'> 404 PageNotFound</h1> */}

 <h1 className={cssmodule.mnotfound}> 404 PageNotFound</h1>
    </>
  )
}
