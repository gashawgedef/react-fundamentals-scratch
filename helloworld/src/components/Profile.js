import React from "react";

function Profile(){
    return(
        <img  src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"/>
    )
}

export default function Gallery(){
    return(
       <section>
         <Profile/>
         <Profile/>
         <Profile/>
       </section>
    )
   }