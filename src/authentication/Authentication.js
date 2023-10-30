import React, { useState } from "react";
import "./authentication.css";
import Login from "./Login";
import Signup from "./Signup";
const Authentication = () => {
  const [authButton, setAuthButton] = useState("login");
  const handleChange = ()=>{
    setAuthButton(authButton === "login" ? "signup" : "login")
  }
  return (
    <div className="main-container">
      <div className="left-Auth">
        <img src="https://images.unsplash.com/photo-1697530152990-2c47d3cf7d7a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="right-Auth">
        {authButton === "login" ? <Login/> : <Signup/>}
        
        <div className="dynamic-auth">
          <span>
            {authButton === "login" ? (
              <>
                Don't have an account?
                <button className="dybutton" onClick={handleChange}>Sing up</button>
              </>
            ) : (
              <>
                Already have account
                <button className="dybutton" onClick={handleChange}>Log In</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
