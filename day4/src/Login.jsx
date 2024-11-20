import { useState } from "react";

function Login(){
  const [name,setName]=useState("");

  const handleSubmit=(e)=>{
    alert("submitted");
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </form>
  )
}

export default Login;