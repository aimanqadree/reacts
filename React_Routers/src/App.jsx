import {BrowserRouter, Route, Routes} from "react-router-dom"
import Component1 from "./components/component1"
import Component2 from "./components/component2"
import Component3 from "./components/component3"

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Component1/>} />
        <Route path="/home" element = {<Component2/>} />
        <Route path="/login" element = {<Component3/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
