import { useEffect } from "react"

function LatestComponent(){
    function Alertbox (){
        alert('Button was clicked')
    }

    return(
        <>
        Hello
        <button onClick={Alertbox}>Click</button>
        </>
    )
}
export default LatestComponent


                                    // Data Fetching.
export const DataFetching =()=>{
        useEffect(()=>{
            async function serverCall(){
             const response = await fetch ('https://dummyjson.com/products')
                const res = await response.json()
                console.log(res)
            }
            serverCall()
        },[])
    
    return( 
    <>
    Data Fetching
    </>
    )
}