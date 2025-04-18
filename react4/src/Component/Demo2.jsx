import React from 'react'
import { useNavigate } from 'react-router-dom'

function Demo2() {
  const navigate =useNavigate()
  function onsubmit (){
    navigate ("/demo3")
  }

  function onchange (){
    navigate ("/")
  }
  return (
    <>
    <h1>This is Demo2</h1>
    <button onClick={onsubmit}>Button1</button>
    <button onClick={onchange}>Button2</button>
    </>
  )
}

export default Demo2