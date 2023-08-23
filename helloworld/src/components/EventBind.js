import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         'Message':'Hello Gashaw'
      }
    }
    clickHandler(){
        this.setState({
            'Message':'Good By'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.Message}</div>
       <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBind
