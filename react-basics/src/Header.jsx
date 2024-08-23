import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    let funlinks = [ 
        {id:1,text:'First Fun comp',link:'/funfirst'}, 
        {id:2,text:'Props',link:'/funprops'}, 
        {id:3,text:'Events',link:'/funevent'}, 
        {id:4,text:'useState hook',link:'/funstate'}, 
        {id:5,text:'Form ',link:'/funform'}, 
        {id:6,text:'Form Validation',link:'/funformvalidation'},
        {id:7,text:'reactbs ',link:'/funreactbs'}, 
        {id:8,text:'custom comp',link:'/funcustomcomp'},
        {id:9,text:'list rendering',link:'/funlistrendering'},
        {id:10,text:'Products',link:'/funproducts'},
        {id:11,text:'react hook form',link:'/funrhf'},
        {id:12,text:'Lifting the state up',link:'/funltsu'},
        {id:13,text:'useEffect,useCallback and useRef Hook Demo ',link:'/funecrhooks'},
        {id:14,text:'useMemo Hook',link:'/funusememo'},
    ]

    let classlinks = [
      {id:1,text:'First class comp',link:'/classfirst'}, 
      {id:2,text:'props,state and event',link:'/classpes'}, 
      {id:3,text:'ref',link:'/classref'},
      {id:4,text:'Life Cycle Methods',link:'/classlifecycle'},  
    ]
    
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">myReactApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className={({ isActive}) =>
                        isActive ? " nav-link text-danger bg-warning" : "nav-link"
                      } aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive}) =>
                        isActive ? " nav-link text-danger bg-warning" : "nav-link"
                      } to='/about'>About</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Functional Components
          </a>
          <ul className="dropdown-menu">
            {funlinks.map((item,i)=><Fragment key={item.id}>
                <li>
                    <NavLink 
                      className={({ isActive}) =>
                        isActive ? " dropdown-item text-danger bg-warning" : "dropdown-item"
                      }
                    to={item.link}>{item.text}</NavLink>
                    </li>
               { i != funlinks.length-1 && <li ><hr className="dropdown-divider"/></li>} 
            </Fragment>)}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            class Components
          </a>
          <ul className="dropdown-menu">
          {classlinks.map((item,i)=><Fragment key={item.id}>
                <li>
                    <NavLink 
                      className={({ isActive}) =>
                        isActive ? " dropdown-item text-danger bg-warning" : "dropdown-item"
                      }
                    to={item.link}>{item.text}</NavLink>
                    </li>
               { i != classlinks.length-1 && <li ><hr className="dropdown-divider"/></li>} 
            </Fragment>)}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}
