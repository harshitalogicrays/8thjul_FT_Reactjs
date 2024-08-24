import React, { Component } from 'react'

export default class LifeCycleMethodsDemo extends Component {
    constructor(props) {
        console.log("constructor called")
      super(props)
      this.state = {data:'',location:this.props.location,error:null}
      this.weatherUpdate = null
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log("getDerivedStateFromProps called" )
        if(nextProps.location != prevState.location)
        {
            return {location:nextProps.location,data:null}
        }
        return null
    }
    componentDidMount(){
        //api - http://api.weatherapi.com/v1/current.json?key=be5896af299a475989192741242308&q=india
        console.log("componentDidMount called" )
        this.fetchWeatherData()
        this.weatherUpdate = setInterval(this.fetchWeatherData,6000)
      }

      fetchWeatherData = ()=>{//get
        fetch(`http://api.weatherapi.com/v1/current.json?key=be5896af299a475989192741242308&q=${this.state.location}`)
        .then((res)=>{
                res.json().then((d)=>{
                    console.log(d)
                  this.setState({data:d}) 
                })
        })
        .catch((error)=>{ this.setState({error:"Failed to get weather data"})})
    }

    shouldComponentUpdate(nextProps,nextState){
      console.log("shouldComponentUpdate called" )
      return nextState.data != this.data
      }

    componentDidUpdate(prevProps,prevState){
      console.log("componentDidUpdate called" )
      if(prevState.location != this.state.location){
        this.fetchWeatherData()
      }
    }

    componentWillUnmount(){
      console.log("componentWillUnmount called" )
      clearInterval(this.weatherUpdate)
    }
  render() {
    console.log("render called")
    if(this.state.location !='india'){
      throw new Error('something went wrong')
    }
    return (
     <>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.data ? <h5>{JSON.stringify(this.state.data)}</h5> : <h4>Loading....</h4>}
     </>
    )
  }

}
