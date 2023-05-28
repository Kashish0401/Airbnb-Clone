import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      await axios.post('/login', {
        email,
        password,
      }, { withCredentials: true });
      alert('login successful!')
      setRedirect(true);
    }
    catch (e) {
      alert('Login failed!');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className='mt-4 grow flex flex-col justify-center mb-32'>
      <h1 className='text-4xl text-center mb-4'>Login</h1>
      <form onSubmit={handleLogin} className='max-w-md mx-auto' >
        <input type="email"
          placeholder='your@email.com'
          value={email}
          onChange={ev => { setEmail(ev.target.value) }} />
        <input type="password"
          placeholder='password'
          value={password}
          onChange={ev => { setPassword(ev.target.value) }} />
        <button className='primary'>Login</button>
      </form>
      <div className='max-w-md mx-auto mt-2 text-gray-500'>Don't have an account yet? <Link to={"/register"} className='underline text-black'>Register Now</Link></div>
    </div>
  )
}

export default Login
