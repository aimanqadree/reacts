import React from 'react'
import{ Link } from 'react-router-dom'
const component1 = ()=>{
  return (
  <div>component1
    <Link to = "/home">jumping into component2</Link>
    </div>
  )
}
export default component1







    //    how to write components
function Comp1(){
    return (

    )
}
export default Comp1

    //   or
export default function Comp2(){
    return (

    )
}
    //    or
const Comp1 = () =>{
    return (

    )
}
export default  Comp1
