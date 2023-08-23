import React, { useState } from 'react';
import "./loginsignup.css";

const LoginSignup = () => {

    const [action,setAction] = useState("Login");
        
    return (
        <div className="LoginSignup">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>    
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
            <input type="text" placeholder='Name'/>
            </div>}
        
        <div className="input">
            <input type="email" placeholder='Email' />
        </div>
        <div className="input">
            <input type="password" placeholder='Password' />
        </div>
        <div className="input">
            <input type="text" pattern="[0-9]*" maxlength="8" placeholder="Handphone Number"/>
        </div>
        </div>

        {action==="Sign Up"?<div></div>: <div className="forgot-password">Need help logging in? <span>Click here!</span></div>}  

        <div className="submit-container"> 
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        </div>
        </div>
    )
}

export default LoginSignup