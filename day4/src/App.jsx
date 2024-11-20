import { useState } from 'react';
import './App.css'
import Login from './Login';
import Practice from './Practice';
import Styles from './Styles';

function App() {
  const [name,setName]=useState("");

  const handleLogin=(role)=>{
    alert("Login!"+role);
  }

  return (
    <>
    <Styles/>
    {/* <Practice/> */}
    {/* <Login/> */}
      {/* <h1>React Live Training Day-4</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={()=>handleLogin()}>Login</button>
      <button onClick={()=>handleLogin('admin')}>Login as Admin</button>

<p>{name}</p>
      <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} /> */}
    </>
  )
}

export default App
