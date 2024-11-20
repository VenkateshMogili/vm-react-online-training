import { useContext } from "react";
import { UserContext } from "./App";

export default function ComponentB() {
  const value=useContext(UserContext);
  return (
    <div>ComponentB {value.title}</div>
  )
}
