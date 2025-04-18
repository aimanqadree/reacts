import { useEffect, useState } from "react"
function Counter(){
    let [count, setCount ] = useState(0)
    function increment(){
        setCount(count +1)
    }
    function Decrement(){
        setCount(count -1)
    }

    const [data,setData] = useState(0)
    useEffect(()=>{                                       // => side effect function
        console.log("10")
    },[data])
    return(
   <>
   <button onClick={Decrement}>Decrement</button>
   <h1>{count}</h1>
   <button onClick={increment}>Increment</button>
   <button onClick={()=>{setData(data+1)}}>change state</button>
   </>
    )
}
export default Counter
