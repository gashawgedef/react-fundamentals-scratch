import React from 'react'
// function  Great(){
//     return <h1>Gashaw Gedef</h1>
// }

const Great=(props)=>{
    console.log(props);
   return( <>
    <h1>Hello {props.name} and adress is {props.address}</h1>
    {props.children}
    </>
   ) 

}
export default Great