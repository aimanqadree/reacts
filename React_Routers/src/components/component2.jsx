import React from 'react'
import { useNavigate } from 'react-router-dom'
const Component2 = () => {
const navigate = useNavigate()
function onsubmit (){
    navigate("/login")
}
  return (
    <div>component2
        <button onClick={onsubmit}>Go</button>
    </div>
  )
}

export default  Component2
