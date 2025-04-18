
import ClassBasedComponent from "./components/classBasedComponent"
import Form from "./components/form"
import FunctionalComponent from "./components/functionalBasedComponent"
import UseRef from "./components/use_Ref"
import  Memocallback  from "./components/use_Memo"
import Newcomponent from "./components/newcomponent"
import Appnew from "./components/contextapi"

function App() {


  return (
    <>

    <FunctionalComponent/>
    <ClassBasedComponent/>
    <UseRef/>
    <Form />
    <Memocallback/>
    <Newcomponent/>
    <Appnew />
    </>
  )
}

export default App


