import React from 'react'
import { useNavigate } from 'react-router-dom'

function Demo3() {
  const navigate = useNavigate()
  function onsubmit (){
    navigate ("/")
  }

  function onchange (){
    navigate ("/demo2")
  }
  return (
    <>
     <h1>This is Demo3</h1>
    <button onClick={onsubmit}>Button1</button>
    <button onClick={onchange}>Button2</button>
    </>
  )
}

export default Demo3