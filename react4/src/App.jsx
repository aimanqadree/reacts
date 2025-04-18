import { useState } from 'react'
import Demo1 from './Component/Demo1'
import Demo2 from './Component/Demo2'
import Demo3 from './Component/Demo3'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Demo1/>
    <Demo2/>
    <Demo3/> */}
   <BrowserRouter>
      
        
        <Routes>
          <Route path="/" element={<Demo1 />} />
          <Route path="/demo2" element={<Demo2 />} />
          <Route path="/demo3" element={<Demo3 />} />
        </Routes>
      
    </BrowserRouter>

    </>
  )
}

export default App
