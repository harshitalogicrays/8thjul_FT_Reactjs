import React from 'react'

const ChildCount = ({increaseCount,decreaseCount}) => {
  return (
    <>
         <button type="button" className='btn btn-primary me-2' onClick={()=>increaseCount(1)}>increase by 1 </button>
         <button type="button" className='btn btn-primary me-3' onClick={()=>increaseCount(5)}>increase by 5 </button>

         <button type="button" className='btn btn-primary me-2' onClick={()=>decreaseCount(1)}>decreaseCount by 1 </button>
         <button type="button" className='btn btn-primary me-3' onClick={()=>decreaseCount(5)}>decreaseCount by 5 </button>
    </>
  )
}

export default ChildCount
