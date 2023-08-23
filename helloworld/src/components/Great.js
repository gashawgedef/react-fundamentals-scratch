import React from 'react'
// function  Great(){
//     return <h1>Gashaw Gedef</h1>
// }

// const Great=({name, address})=>{

//    return( <>
//     <h1>Hello {name} and adress is {address}</h1>
//     </>
//    ) 

// }
const Great=(props)=>{
    const {name,address}=props

    return( <>
     <h1>Hello {name} and adress is {address}</h1>
     </>
    ) 
 
 }
export default Great