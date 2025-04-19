//question create an example where only 2 out of 4 components use the context.(GrandChild and GrandGrandChild will consume the context data using useContext.) & (Parent and Child will not use the context directly (they’re just structure).

import React, { createContext, useContext } from 'react';

const UserContext = createContext()

const GrandGrandChild = ()=>{
const user = useContext(UserContext)
return (
<h3>GrandGrandChild: Hello, i am{user.name} </h3>
)
}

const GrandChild = ()=>{
  const user = useContext(UserContext)
  return (
  <h2>GrandChild: Hello, i am {user.name} </h2>
  )
  }

  const Child = () =>{
    return(
      <div>
        <h3>ChildComponent(I Don't use context API)</h3>
      </div>
    )
  }

  const Parent = () =>{
    return(
      <div>
        <h3>ParentComponent(I Don't use context API)</h3>
      </div>
    )
  }

  const App =()=>{
    return(
     < UserContext.Provider value = {{ name: 'Aiman'}}>
      <div>
        <h1>React Context API Example</h1>
        <Parent/>
        <Child/>
        <GrandChild/>
        <GrandGrandChild/>
      </div>
     </UserContext.Provider>
    )
  }
export default App