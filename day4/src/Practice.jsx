import { useEffect, useState } from "react";
import Button from "./Button";

function Practice() {
  // highlight day.
  const [isHighLight,setIsHighLight]=useState(false);
  const day="Sunday";

  const handleHighlight=(name)=>{
    // setIsHighLight(!isHighLight);
    alert("Executed!"+name)
  }

  useEffect(()=>{
    handleHighlight();
  },[])

  return (
    <div>
      <Button title="Click here" handleHighlight={(name)=>handleHighlight(name)}/>
      {/* <h1 className={isHighLight?"highlight":""}>{day}</h1>
      <button onClick={handleHighlight}>Highlight Day</button> */}
      {/* <button onClick={handleHighlight}>Hide</button> */}
      {/* <button onClick={handleHighlight}>Show</button> */}
      {/* <h1>List</h1> */}
    </div>
  )
}

export default Practice;