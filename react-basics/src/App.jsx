import React from 'react'
import Firstfuncomp from './functionalcomponents/Firstfuncomp'
import Firstclasscomp from './classcomopnents/Firstclasscomp'
import Propsdemoinfun from './functionalcomponents/Propsdemoinfun'
import Eventdemoinfun from './functionalcomponents/Eventdemoinfun'
import Stateinfundemo from './functionalcomponents/Stateinfundemo'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>   
    {/* React.createElement("div",{className:'success'},React.createElement('h1',{},"hello  React"))
   <div className='container mt-5'>
        <h1>Hello React</h1>
        <h2>Welcome Back!!!</h2>
        <Firstfuncomp/><hr/>
        <Firstclasscomp/><hr/>
        <Propsdemoinfun username="Ram" mobile={909899087} isActive={false}>
            <h1>comp child</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto voluptas sit commodi aut quisquam. Beatae dolores molestias reiciendis voluptatibus possimus recusandae cumque consectetur soluta, inventore veritatis deleniti in animi non.</p>
            <Firstfuncomp/>
        </Propsdemoinfun>

        <Eventdemoinfun/>
        <Stateinfundemo/>
   </div> */}


       
      <Header/>
      <div className="container mt-5">
          <Outlet/>
      </div>


   </>

  )
}

export default App
