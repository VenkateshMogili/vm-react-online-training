import { useState } from "react";

function Login() {
  // step-1
  const [userName, setUserName] = useState("");
  const [password, setPassword]=useState("");

  const handleLogin=()=>{
    // userName === admin and password === admin
    if(userName==="admin" && password==="admin"){
      alert("Login Successful!");
    } else{
      alert("Wrong credentials!");
    }
  }

  return (
    <div>
      <h1>Login Form</h1>
      {/* step-2 */}
      <input
        type="text"
        placeholder="Enter your username"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
      />
      <br/>
      {/* step-2 */}
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;