
import React,{Component} from "react";
class Welcome extends Component{
    
    render(){
        const {name,address}=this.props
        return(

        <h1>Welcome {name} to {address}</h1>
        )
    } 
}

export default Welcome