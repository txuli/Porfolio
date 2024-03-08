import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
function Footer() {
  const navigate = useNavigate()


  return (
    <div className='w-full grid grid-cols-3  px-1'>
        <div>© 2024</div>
        <Outlet />
    </div>
    
  )
}

export default Footer
