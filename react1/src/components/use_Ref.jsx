import { useEffect, useRef, useState } from "react"
function UseRef(){
    let [count, setCount ] = useState(0)
    let headerRef = useRef()
    console.log(headerRef)

    function increment(){
        setCount(count +1)
        headerRef.current.style.color = "green"
    }
    function Decrement(){
        setCount(count -1)
         headerRef.current.style.color = "red"
    }

    const [data,setData] = useState(0)
    let c = useRef(0)
    useEffect(()=>{
        c.current +=1
        console.log("c",c.current)
    },)
    return(
   <>
   <button onClick={Decrement}>Decrement</button>
   <h1 ref={headerRef}>{count}</h1>
   <button onClick={increment}>Increment</button>
   <button onClick={()=>{setData(data+1)}}>change state</button>
   </>
    )
}
export default UseRef
