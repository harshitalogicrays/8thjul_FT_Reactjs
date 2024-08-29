import React from 'react'
import DisplayHOC from './DisplayHOC'
const HOCLogic = (InputComponent,InputData) => {
  return class extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        data:[], columns:InputData.columns,
        heading:InputData.heading }}
    componentDidMount(){
        fetch(InputData.url)
        .then((res)=>{
            res.json().then((d)=>{
                this.setState({data:d})
            })   })
        .catch(err=>console.log(err)) }
    render(){
        return( <DisplayHOC data={this.state}/>   )
    }
  }
}

export default HOCLogic
