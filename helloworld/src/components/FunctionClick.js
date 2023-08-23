import React from "react";

function FunctionClick(){


    function clickHandler(){
        console.log('Button has been clicked');
    }
    return(
        <div>
           <button onClick={clickHandler}>Click this button</button>
        </div>
    )
}

export default FunctionClick