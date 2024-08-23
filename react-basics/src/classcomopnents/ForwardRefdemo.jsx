import React, { forwardRef } from 'react'

const ForwardRefdemo = forwardRef((props,ref)=>{
    return (
    <>
    <input type="text" ref={ref} defaultValue={1} style={{width:'40px',textAlign:'center'}}/>
    </>)
})


export default ForwardRefdemo
