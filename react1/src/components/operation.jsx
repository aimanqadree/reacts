import React from 'react'
import { useContext } from 'react'
import { context } from './contextapi'

const Operations = () => {
  const {count,setCount} = useContext(context)
  return (
    <>
    <button onClick={()=>setCount(count +1)}>Increment</button>
    <button onClick={()=>setCount(count -1)}>Decrement</button>
    </>
  )
}

export default Operations