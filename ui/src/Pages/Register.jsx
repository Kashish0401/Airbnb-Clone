import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='mt-4 grow flex flex-col justify-center mb-32'>
          <h1 className='text-4xl text-center mb-4'>Registeration Page</h1>
          <form action="" className='max-w-md mx-auto'>
              <input type="text" placeholder='Your Name' />
              <input type="email" placeholder='your@email.com' />
              <input type="password" placeholder='password' />
              <button className='primary'>Register</button>
          </form>
          <div className='max-w-md mx-auto text-gray-500 mt-2'>Already have an account? <Link to={"/login"} className='underline text-black text-center'>Login</Link></div>
    </div>
  )
}

export default Register
