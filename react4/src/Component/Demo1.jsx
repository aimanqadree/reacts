import React from 'react'
import { useNavigate } from 'react-router-dom'

function Demo1() {
  const navigate = useNavigate()
  function onsubmit (){
    navigate ("/demo2")
  }
  
  function onchange (){
    navigate ("/demo3")
  }
  
  return (
    <>
     <h1>This is Demo1</h1>
    <button onClick={onsubmit}>Button1</button>
    <button onClick={onchange}>Button2</button>
    </>
  )
}

export default Demo1