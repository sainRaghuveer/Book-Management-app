import React from 'react'
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { login } from '../Redux/Authentication/action';
import {useNavigate, useLocation} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("loginLocation", location)

    const loginHandler=()=>{
        let userData={
            email:email,
            password:password,
        }
        dispatch(login(userData)).then(()=>{
            navigate(location.state, {replace:true});
        });
    }

  return (
    <div>
    <h1>Login</h1>
    <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <button onClick={loginHandler}>Log In</button>
    </div>
  )
}

export default Login