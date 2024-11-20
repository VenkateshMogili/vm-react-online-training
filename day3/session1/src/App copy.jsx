import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // step-1
  const [user, setUser] = useState(
    {
      name: "Venkatesh",
      age: 20
    }
  );
  // step-1
  const [todos,setTodos]=useState(['Learn React','Master React']);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  }

  // step-4
  const updateName=()=>{
    setUser({...user,name:"Vivek"})
  }

  // step-4
  const addTodo=()=>{
    setTodos([...todos,'New Item']);
  }

  return (
    <>
    <h1>Todo List</h1>
    {/* step-2 */}
    {todos.map((todo,index)=>(
      <div key={index}>
        <p>{todo}</p>
      </div>
    ))}
    {/* Step-3 */}
    <button onClick={addTodo}>Add Todo</button>


      {/* <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Update Count</button> */}

      {/* step-2 */}
      {/* <div>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1> */}
        {/* step-3 */}
        {/* <button onClick={updateName}>Update Name</button>
      </div> */}
    </>
  )
}

export default App
