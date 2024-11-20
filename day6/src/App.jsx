import { createContext } from "react";
import "./App.css";
import ComponentA from "./ComponentA";
import BookDetails from "./BookDetails";

export const UserContext=createContext();

export const BookContext=createContext();

export default function App() {
  const title="Venkatesh"
  return (
    <div>
      <h1>App</h1>
      {title}
      <UserContext.Provider value={{title:title,name:"Vivek"}}>
      <ComponentA/>
      </UserContext.Provider>

      <BookContext.Provider value={{bookName:"123"}}>
        <BookDetails/>
      </BookContext.Provider>
      </div>
  )
}
