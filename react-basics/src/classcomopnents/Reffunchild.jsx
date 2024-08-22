import React from 'react'

const Reffunchild = (props) => {
  return (
    <div>
       <button  type="button" class="btn btn-danger mt-3" onClick={()=>alert(props.innerRef.current.value)}>fetch Data</button><br/>  
    </div>
  )
}

export default Reffunchild
