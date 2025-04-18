import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from "./pages/Landing"
import Second from "./pages/Second"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Landing/>} />
      <Route path="/second" element = {<Second/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
