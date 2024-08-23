import React, { Component, createRef } from 'react'
import RefChild from './RefChild'
import Reffunchild from './Reffunchild'
import ForwardRefdemo from './ForwardRefdemo'

export default class RefinClass extends Component {
    constructor(props) {
      super(props)
      this.state = {data:''}
      this.dataRef = React.createRef()
      this.focusRef = React.createRef()
      this.myRef = createRef()
    }
    fetchData=()=>{
        // alert(this.state.data)
        this.dataRef.current.style.color='blue'
        alert(this.dataRef.current.value)
        this.dataRef.current.focus()
    }
    componentDidMount(){ //call once comp is init.
        this.focusRef.current.focus()
    }
decreaseCount=()=>{
  this.myRef.current.value > 1 ? this.myRef.current.value-- : this.myRef.current.value=1
}
  render() {
    console.log("render called")
    return ( <> <div className="container mt-5 col-6">
            <div className="input-group mb-3">
             {/* <input type="text" className="form-control" value={this.state.data} onChange={(e)=>this.setState({data:e.target.value})} /> */}
             <input type="text" className="form-control" ref={this.dataRef } 
             defaultValue="ram"/>
             <button  type="button" class="btn btn-primary" onClick={this.fetchData}>fetch Data</button><br/>  
             </div>
             <input type="text" className="form-control" ref={this.focusRef } 
            /><hr/>
            {/* <RefChild innerRef = {this.focusRef}></RefChild>
            <Reffunchild innerRef = {this.focusRef}></Reffunchild> */}

    <div className="input-group">
             <button type="button" className="btn btn-primary" 
             onClick={this.decreaseCount}>-</button> <ForwardRefdemo username="Happy" ref={this.myRef}/><button type="button" className="btn btn-primary "
             onClick={()=>this.myRef.current.value++}>+</button>
            </div>
        </div>
     </>
    )
  }
}
