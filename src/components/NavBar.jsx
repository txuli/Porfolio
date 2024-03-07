import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
function App() {
  const navigate = useNavigate()

  // navigate('/')

  return (
      <div className='w-full grid grid-cols-3  px-1'>
        <h1 className='flex w-auto mx-5 items-center mt-5 '>My life programming</h1>
        <div className='flex items-center justify-center'>
        <div className='bg-zinc-800 w-auto h-16 flex items-center text-center gap-4 mt-5 rounded-md px-4'>
        <Link to="/home" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> Home</Link>
        <Link to="/about" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> About me</Link>
        <a href="/projedcts" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> Projects</a>
        </div>
        <Outlet />
    </div>
    </div>
  )
}

export default App
