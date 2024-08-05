import './App.css'
import React from 'react'
import Firstfuncomp from './functionalcomponents/Firstfuncomp'
import Firstclasscomp from './classcomopnents/Firstclasscomp'
import Propsdemoinfun from './functionalcomponents/Propsdemoinfun'


function App() {

  return (
    // React.createElement("div",{className:'success'},React.createElement('h1',{},"hello  React"))
   <div className='success'>
        <h1>Hello React</h1>
        <h2>Welcome Back!!!</h2>
        <Firstfuncomp/><hr/>
        <Firstclasscomp/><hr/>
        <Propsdemoinfun/>
   </div>
  
  )
}

export default App
