import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent=this.greetParent.bind(this);
    }

    greetParent(child){
        alert(`Hello ${this.state.parentName} from ${child}`)
    }
    
  render() {
    return (
      <div>
        {/* <button onClick={this.greetParent.bind(this)}>Click</button> */}
        {/* <button onClick={this.greetParent}>Click</button> */}
        {/* <button onClick={this.greetParent}>Click</button> */}
        <ChildComponent greetHandler={this.greetParent}/>
        
      </div>
    )
  }
}

export default ParentComponent
