import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const { setUser } = useContext(UserContext);
  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      const {data} = await axios.post('/login', {
        email,
        password,
      }, { withCredentials: true });
      setUser(data);
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
