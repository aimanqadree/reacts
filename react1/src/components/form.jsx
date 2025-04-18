import { useState } from "react";
function Form(){ 
    const [name,setName] = useState("")
    console.log(name)
return (
    <>
    <form action="">
        <input type="text" onChange={(e)=>{setName(e.target.value)}} />
    </form>
    
    </>
)
}

export default Form