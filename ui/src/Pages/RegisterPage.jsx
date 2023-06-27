import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const registerUser = async(ev) => {
    ev.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registration completed!');
      setRedirect(true);
    }
    catch (e) {
      alert('Registration failed!');
      setRedirect(false);
    }
  }

  if (redirect) {
    return <Navigate to = { '/login'}/>
  }

  return (
    <div className='mt-4 grow flex flex-col justify-center mb-32'>
      <h1 className='text-4xl text-center mb-4'>Registeration Page</h1>
      <form onSubmit={registerUser} className='max-w-md mx-auto'>
        <input type="text"
          placeholder='Your Name'
          value={name}
          onChange={ev => setName(ev.target.value)} />
        <input type="email"
          placeholder='your@email.com'
          value={email}
          onChange={ev => setEmail(ev.target.value)} />
        <input type="password"
          placeholder='password'
          value={password}
          onChange={ev => { setPassword(ev.target.value) }}
        />
        <button className='primary'>Register</button>
      </form>
      <div className='max-w-md mx-auto text-gray-500 mt-2'>Already have an account? <Link to={"/login"} className='underline text-black text-center'>Login</Link></div>
    </div>
  )
}

export default Register
