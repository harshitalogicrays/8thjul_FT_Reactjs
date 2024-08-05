// import { Component } from "react";

// class Firstclasscomp extends Component{
//     render(){
//         return(
//             <div>
//             <h3>First class Comp Demo</h3>
//             <h2>child of App component</h2>
//         </div>
//         )
//     }
// }
// export default Firstclasscomp

//rcc
import React, { Component } from 'react'
export default class Firstclasscomp extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>First class Comp Demo</h3>
        <h2>child of App component</h2>
      </React.Fragment>
    )
  }
}
