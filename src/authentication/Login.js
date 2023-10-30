import React, { useState } from 'react'
import './login.css'

const Login = () => {
  const [email,setEmail] = useState("")
  const[password, setPassword]  = useState('')
  return (
    <div className='login-container'>
    <div className='login'>
      <h1>Log in</h1>
      <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
      <input  type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
      <button>Log in</button>
      
    </div>
    </div>
  )
}

export default Login