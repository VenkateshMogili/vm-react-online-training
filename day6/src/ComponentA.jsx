import { useContext } from "react";
import ComponentB from "./ComponentB";
import { UserContext } from "./App";

export default function ComponentA() {
  const value=useContext(UserContext);
  console.log("context",value)
  return (
    <div>
      ComponentA {value.title}
      <br/><br/>
      <ComponentB/>
      </div>
  )
}
