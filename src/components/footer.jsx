import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
import ImgReact from '../pages/media/React.png'
function Footer() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  return (
    <div className="fixed bottom-0 left-0 w-full">
      {screenWidth > 700 ? (
        <div className='w-full grid grid-cols-3  px-1 my-4'>
           <div className='flex text-center justify-start col text-white/60'>© 2024</div> 
          
          <div className='col-start-3 flex justify-end'>
            <div className='flex text-center justify-center my-auto px-3 text-white/60'>Made with ❤️ by <div><a href="https://github.com/txuli" target="_blank" rel="noopener noreferrer"></a></div> </div>
          </div>
          <Outlet />
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  )
}

export default Footer
