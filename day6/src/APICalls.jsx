import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

// CRUD Operations - Create Read Update Delete
function App() {
  const [todos,setTodos]=useState(['Todo 1','Todo 2','Todo 3','Todo 4']);
  const [todo,setTodo]=useState("");
  const [loading,setLoading]=useState(false);

  // GET method
  const fetchTodos=async()=>{
    // try{
      setLoading(true);
    let response=await fetch("https://jsonplaceholder.typicode.com/todos",{
      method:"GET"
    });
    let data = await response.json();
    setTodos(data.slice(0,5));
    console.log(data);
    if(data){
      setLoading(false);
    }
  // } catch(error){
  //   console.log(error);
  // }
  }

  // POST Method
  const addTodo=async()=>{
    const newTodo={title:todo};
    let response=await fetch("https://jsonplaceholder.typicode.com/todos",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newTodo)
    });
    let data = await response.json();
    let updatedTodos=[...todos,data];
    setTodos(updatedTodos)
  }

  // PUT Method
  const updateTodo=async (id)=>{
    const newTodo={title:todo};
    let response=await fetch("https://jsonplaceholder.typicode.com/todos/"+id,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newTodo)
    });
    let data = await response.json();
    if(data){
    let updatedData=[...todos];
    let index=updatedData.findIndex((todo)=>todo.id===id);
    updatedData[index].title=todo;
    setTodos(updatedData);
    }
  }


  // Delete Method
  const deleteTodo=async (id)=>{
    let response=await fetch("https://jsonplaceholder.typicode.com/todos/"+id,{
      method:"DELETE"
    });
    let data = await response.json();
    console.log(data)
    let updatedData=[...todos];
    let index=updatedData.findIndex((todo)=>todo.id===id);
    updatedData.splice(index,1);
    setTodos(updatedData);
  }

  useEffect(()=>{
    fetchTodos();
  },[])

  return (
    <>
      <h1>Todos</h1>
      {loading?<h1>Loading</h1>:""}
      <button onClick={fetchTodos}>Fetch Todos</button>

      <div>
        <input type="text" placeholder='Enter Todo' value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <div>
          <button onClick={addTodo}>Add Todo</button>
        </div>
      </div>

      {todos.map((todo,index)=>(
      <p key={index} className='todo-card'>
        {todo.title} {todo.id}
        <button onClick={()=>updateTodo(todo.id)}>Update</button>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </p>
      ))}
    </>
  )
}

export default App
