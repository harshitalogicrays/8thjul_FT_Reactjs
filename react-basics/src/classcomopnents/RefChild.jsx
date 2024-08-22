import React, { Component } from 'react'

export default class RefChild extends Component {
  render() {
    return (
      <div>
        <button  type="button" class="btn btn-primary" onClick={()=>alert(this.props.innerRef.current.value)}>fetch Data</button><br/>  
      </div>
    )
  }
}
