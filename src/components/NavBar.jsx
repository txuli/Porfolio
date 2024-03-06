import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
function App() {
  const navigate = useNavigate()

  // navigate('/')

  return (
      <div className='w-full flex justify-center px-1'>
        <div className='bg-zinc-800 w-75 h-16 flex items-center text-center gap-4 mt-5 rounded-md px-4'>
        <Link to="/estdrytfgbhujnimk" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> Home</Link>
        <a href="/about" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> About me</a>
        <a href="/projedcts" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> Projects</a>
        </div> 
        <Outlet />
    </div>
  )
}

export default App
