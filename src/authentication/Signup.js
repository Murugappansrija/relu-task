import React, { useState } from "react";
import "./signup.css";
// import { createUserWithEmailAndPassword } from "firebase"
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSignup = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: name,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  
  return (
    <div className="signup-container">
      <div className="signup">
        <h1>Sign up</h1>
        <input
          type="text"
          placeholder=" Enter username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
