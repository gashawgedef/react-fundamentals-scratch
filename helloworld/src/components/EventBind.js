import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         'Message':'Hello Gashaw'
      }
      this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         'Message':'Good By'
    //     })
    // }
    clickHandler=()=>{
        this.setState({
           'Message':'Good By'
          })
       }
  render() {
    return (
      <div>
        <div>{this.state.Message}</div>
       {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
       {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
       <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
