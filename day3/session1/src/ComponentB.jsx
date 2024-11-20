import { useState } from "react";

// child
function ComponentB() {
  const [count,setCount]=useState(0);

  const incrementCount=()=>{
    setCount((prevCount)=>prevCount+1);
  }
  return (
    <div>
      <h1>Component B</h1>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Update Count</button>
    </div>
  )
}
export default ComponentB;