import { useState } from 'react'
function App() {


  return (
        <div className='w-full flex justify-center px-1'>
        <div className='bg-zinc-800 w-75 h-16 flex items-center text-center gap-4 mt-5 rounded-md px-4'>
        <a href="#" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> Home</a>
        <a href="#" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> About me</a>
        <a href="#" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> Projects</a>
      </div> 
    </div>
  )
}

export default App
