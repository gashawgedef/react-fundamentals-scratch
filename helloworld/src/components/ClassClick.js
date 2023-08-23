import React, { Component } from 'react'

class ClassClick extends Component {
    ClickHandler(){
        console.log("The click is logged");
    }
  render() {
   
    return (
      <div>
        <button onClick={this.ClickHandler}>Click this button</button>

        <button onClick={()=>{
            alert('Welcome Gashaw Gedef')
        }}>Event Handller</button>

      
      </div>
    )
  }
}

export default ClassClick
