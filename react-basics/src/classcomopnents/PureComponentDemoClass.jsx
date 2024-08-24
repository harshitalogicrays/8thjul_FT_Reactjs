import React, { Component, PureComponent } from 'react'

export default class PureComponentDemoClass extends PureComponent {
    constructor(props) {
      super(props)
      this.state = { username:'Ram' }
    }
    
    changeName=()=>{
        console.log("changename called")
        this.setState({username:"Meera"})
    }
  render() {
    console.log("render called")
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button type="button" className='btn btn-primary' onClick={this.changeName}>Change Name</button>
      </div>
    )
  }
}
