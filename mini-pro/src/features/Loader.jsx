import React from 'react'
import ImageLoader from '/src/assets/loader.gif'
import './loader.css'
import ReactDOM from 'react-dom'
const Loader = () => {
  return ReactDOM.createPortal(<>
            <div className="wrapper">
                <div className="loader">
                        <img src={ImageLoader}/>
                </div>
            </div>
  </>,document.getElementById('loader')

  )
}

export default Loader
