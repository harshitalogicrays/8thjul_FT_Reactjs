import React, { Component } from 'react'

export default class DisplayHOC extends Component {
  render() {
    return (
      <div className='container mt-5 p-3'>
            <h2>{this.props.data.heading}</h2>
            <div class="table-responsive" >
            <table  class="table table-primary"  >
                <thead>
                    <tr>{this.props.data.columns.map((c)=> <th>{c}</th>  )}</tr>
                </thead>
                <tbody>
                    {this.props.data.data.map((item,i)=>
                        <tr key={i}>
                            {this.props.data.columns.map((c)=>
                                <td>{item[c]}</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
