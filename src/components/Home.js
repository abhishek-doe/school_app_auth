import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/choosepwd')}>Choose Password</button>
      <button onClick={() => navigate('/choosestaff')}>Choose Staff</button>
      <button onClick={() => navigate('/createaccount')}>Create Account</button>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default Home
