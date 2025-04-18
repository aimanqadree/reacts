import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo() {
    if (data.trim() === "") return;
    setTodos([...todos, data])
    setData("")
  }

  function handleDelete(id) {
     const updatedTodos = todos.filter((_, index) => index !==id)
     setTodos(updatedTodos)
  }

  return (
    <>
      <div>
        <label htmlFor="ToDo Task">
          <p>ToDo Task</p>
          <input type="text"
            id="task"
            value={data}
            onChange={(e) => setData(e.target.value)} />
        </label>
        <button onClick={addTodo}>AddTodo</button>
      </div>

      <div>
        {todos.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
            <button onClick={() => handleDelete(index)}>Delete Todo</button>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default App
