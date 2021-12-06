import axios from "axios";
import React, { useState, useEffect } from "react";
import Tasks from "../Tasks";

const BASE_URL = "http://localhost:4000";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const login = async () => {
      const users = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      console.log(users);
      setToken(users.data.token);
      localStorage.setItem("token", users.data.token);
  };

  return (
    <>
      {!token ? 
        <div className="login">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(val) => setEmail(val.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(val) => setPassword(val.target.value)}
          />
          <button onClick={login}> Login </button>
        </div>
      :
        <Tasks clearToken={setToken} token={token} />
      }
    </>
  );
};
export default Login;
