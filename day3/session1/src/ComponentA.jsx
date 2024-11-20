import { useState } from "react";
import ComponentB from "./ComponentB";

// child
function ComponentA(props) {
  const [count,setCount]=useState(0);

  const incrementCount=()=>{
    setCount((prevCount)=>prevCount+1);
  }

  return (
    <div>
      <h1>Component A</h1>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Update Count</button>
      <ComponentB count={props.count} incrementCount={props.incrementCount}/>
    </div>
  )
}
export default ComponentA;