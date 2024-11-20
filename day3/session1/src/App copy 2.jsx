import { useState } from 'react'
import './App.css'
import ComponentA from './ComponentA'

// parent
function App() {
  const [count,setCount]=useState(0);

  const incrementCount=()=>{
    setCount((prevCount)=>prevCount+1);
  }

  return (
    <>
    <ComponentA
    count={count}
    incrementCount={incrementCount}
    />
    </>
  )
}

export default App
