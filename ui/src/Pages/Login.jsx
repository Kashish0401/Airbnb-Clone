import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'

const Login = () => {
  return (
    <div className='mt-4 grow flex flex-col justify-center mb-64'>
      <h1 className='text-4xl text-center mb-4'>Login</h1>
      <form action="" className='max-w-md mx-auto' >
        <input type="email" placeholder='your@email.com' />
        <input type="password" placeholder='password' />
        <button className='primary'>Login</button>
      </form>
      <div className='max-w-md mx-auto mt-2 text-gray-500'>Don't have an account yet? <Link to={"/register"} className='underline text-black'>Register Now</Link></div>
    </div>
  )
}

export default Login
