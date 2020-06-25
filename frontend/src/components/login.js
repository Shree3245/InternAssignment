import React, {useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import auth from "../actions/auth";
import reg from "../actions/register"
function Login(){


    const dispatch = useDispatch();

    const regBool = useSelector(state => state.reg);


    const [user,setUser]=useState("");
    const [passw,setPassw]=useState("");

    const updatePass= e =>{
        setPassw(e.target.value);
    }

    const updateUser=e=>{
        setUser(e.target.value);
    }

    return(
      <div className='login-div'>
        <div className='username-div'>
            <label htmlFor="username">Username</label>
            <input id="username" value={user} onChange={updateUser} className='login-input'></input>
        </div>
        <br></br>
        <div className='passw-div'>
            <label htmlFor="passw">Password</label>
            <input id="passw" value={passw} onChange={updatePass} type='password' className='login-input'></input>
        </div>
        

        <button onClick={() => dispatch(auth())} className='login-button'>Submit</button>
    <button onClick={() => dispatch(reg())} className='login-button'>{regBool ? "Sign Up" : "Register"}</button>
      </div>    
    )
}

export default Login