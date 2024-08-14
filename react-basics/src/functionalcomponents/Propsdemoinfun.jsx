import React, { Fragment } from 'react'

// const Propsdemoinfun = (props) => {
//   console.log(props)
//   // props.username="Meera"//error
//   return (
//     <>
//         <h1>Props</h1>
//         <h2>{props.username}</h2>
//         {props.isActive ? <span className='text-primary'>User is active </span> : <>User is not active</>}
//     </>
//   )
// }
// export default Propsdemoinfun


const Propsdemoinfun = ({username='',mobile,isActive,children}) => {
  return (
    <>
        <h1>Props</h1>
        <h2>{username}</h2>
        {isActive ? <span className='text-primary'>User is active </span> : <>User is not active</>}<br/>
        {isActive && <span className='text-primary'>User is active </span>}<br/>
        {/* <h3>{children}</h3> */}
        {/* {children[0]} */}

        {children?.map((item,i)=><Fragment key={i}>item= {item}</Fragment>)}
    </>
  )
}
export default Propsdemoinfun
