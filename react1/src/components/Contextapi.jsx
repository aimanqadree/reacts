import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Counter from './Countercontextapi'
import Operations from './operation'



export const context = createContext(null)
const Appnew = () => {

  const [count,setCount] = useState(0)
  return (
    <context.Provider value={{count,setCount}}>
      <Counter />
      <Operations />
    </context.Provider>
  )
}

export default Appnew