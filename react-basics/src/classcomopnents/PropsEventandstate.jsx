import React, { Component } from 'react'
import CustomComp from '../functionalcomponents/CustomComp'
import { TextBox } from '../functionalcomponents/styledcomp'
import propTypes  from 'prop-types'

export default class PropsEventandstate extends Component {
    constructor(props) {
      super(props) 
      this.state ={email:'ram@gmail.com',mobile:9090,hobbies:[],address:{city:"pune",state:"maharashtra",country:"india",pincode:''}}
    }
    handleEmail=()=>{ this.setState({email:"happy@gmail.com"})}
    handleCity=()=>{ this.setState({address:{...this.state.address,city:"ahmedabad"}})}
  render() {
    let {username} =this.props
    return (
     <> <h1>{username}</h1>
        <h1 style={{color:'green'}}>{this.props.isActive ? "Active" : "Inactive"}</h1>
        <h2>{this.state.email}</h2> <h2>{this.state.address.city}</h2>
        <CustomComp click={this.handleEmail}>Change email</CustomComp>
        <CustomComp click={this.handleCity}>Change City</CustomComp><br/>
        <h6>{JSON.stringify(this.state.address)}</h6>

        <TextBox value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}></TextBox>

        <TextBox value={this.state.address.state} onChange={(e)=>this.setState({address:{...this.state.address,state:e.target.value}})}></TextBox>
     </>
    )
  }
}

PropsEventandstate.defaultProps  = {  username:"Sad Singh"}
PropsEventandstate.propTypes ={username:propTypes.string}