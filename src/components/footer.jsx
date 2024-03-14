import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
import ImgReact from '../pages/media/React.png'
function Footer() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  return (
    <div>
      {screenWidth > 700 ? (
        <div className='w-full grid grid-cols-3  px-1 my-4'>
        <div className='flex text-center justify-center'>© 2024</div>
        <div className='flex justify-center'>
          <div className='flex text-center justify-center my-auto px-3'>Made with </div>
          <div><img src={ImgReact} alt=" Image of react" className='h-9 filter invert' /></div>
        </div>
        <Outlet />
      </div>
      ):(
        <div> </div>
      )}
    </div>
  )
}

export default Footer
