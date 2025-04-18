import { useState } from "react"
import "./components.css"

function FormComponent() {
     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")
     function Onsubmit (){
        if(password !== "aiman1234"){
            alert("wrong password")
        }else{
            console.log(email,password)
        }
     }
    return (
        <form className="form">
            <h1 className="top">Sign In</h1>

            <label htmlFor="email" className="labels">
             <p className="texts">Email</p>
                <input type="email" className="inputs" placeholder="aiman@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>

            <label htmlFor="password" className="emails">
                 <p className="texts">Password</p>
                 <input type="password" className="inputs" placeholder="" onChange={(e)=>{setPassword(e.target.value)}} />
            </label>
            <button className="btn" onClick={Onsubmit}>Submit</button>

        </form>

    )
}
export default FormComponent