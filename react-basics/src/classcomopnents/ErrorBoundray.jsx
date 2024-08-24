import React, { Component } from 'react'

export default class ErrorBoundray extends Component {
    constructor(props) {
      super(props)
      this.state = {  hasErr:false }
    }
    static getDerivedStateFromError(error){
        return { hasErr: true };
    }
    componentDidCatch(error,errorinfo){
        console.log(error)
    }
  render() {
    if(this.state.hasErr)
            return ( <>{this.props.fallback}
            <p>Something went wrong</p>
            </> )
    else 
            return ( <>{this.props.children}</> )
  }
}
