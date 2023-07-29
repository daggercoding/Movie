import React from 'react'

const Student = ({name,age,city}) => {
  return (
    <div>
     <hr/>
     <h1 style={{color:"black", fontSize:"20px" }}>My name is {name} and my age is {age} years and he belongs to {city}</h1>
     <hr/>
    </div>
  )
}
export default Student
