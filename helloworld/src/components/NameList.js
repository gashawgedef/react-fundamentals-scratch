import React from 'react'
import Person from './Person'

function NameList() {
    
    const persons=[
        { 
            id:1,
            name:'Gashaw ',
            age:29,
            skill:'Angular'

         },
         { 
            id:2,
            name:'Melkamu ',
            age:29,
            skill:'React'

         },
         { 
            id:3,
            name:'Melos ',
            age:29,
            skill:'Java'

         },
         { 
            id:4,
            name:'Getachew ',
            age:29,
            skill:'Cakephp'

         }
    ]
//     const names=['Gashaw','Melkamu','Melos','Chalelign']
    const personList=persons.map(person=><Person key={person.id} person={person}/>)
  return (
    <div>{ personList}</div>
  )
}

export default NameList
