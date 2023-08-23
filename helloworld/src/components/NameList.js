import React from 'react'

function NameList() {
    const names=['Gashaw','Melkamu','Melos','Chalelign']
    const NameList=names.map(name=><h1>{name}</h1>)
  return (
    <div>{ NameList}</div>
  )
}

export default NameList
