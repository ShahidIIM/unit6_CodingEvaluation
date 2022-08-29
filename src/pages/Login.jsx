import React, { useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const payload = { email, password };
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input data-cy="login-email" placeholder='Email' width = "500px"  value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input data-cy="login-password" placeholder='Password' width = "500px" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button data-cy="login-submit" onClick={handleLogin}>Submit</button>
    </div>
  );
};

export default Login;
