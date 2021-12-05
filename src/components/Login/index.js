import axios from "axios";
import React, { useState } from "react";

const BASE_URL = "http://localhost:4000";

function Login() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("")
        const [token, setToken] = useState("");


        const login = async () => {
            try {
            const users = await axios.post(`${BASE_URL}/login` , {
            email,
            password
        })
        console.log(users);
        setToken(users.data.token)
        localStorage.setItem("token" , users.data.token)
    }catch (error) {
        console.log(error);
    }
    }


    return (
        <>
        <div className="login">
        <h1>Login</h1>
        <input type="email" name = "email" placeholder= "Enter your email" onChange={(val) => setEmail(val.target.value) }/>
        <input type="password" name = "password" placeholder= "Enter your password" onChange={(val) => setPassword(val.target.value) }/>
        <button onClick={login}> Login </button>
        </div>
        </>
    )
}
export default Login;
