import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
import ImgMenu from './media/icons8-menu.svg'
function App({ }) {
  const navigate = useNavigate()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isOpen, setIsOpen] = useState(false)
  // Comentar en release
  useEffect(() => {
    setInterval(() => {
      setScreenWidth(window.innerWidth)
    }, 1000)
  }, [])

  const Menu_click = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      {screenWidth > 710 ? (
        <div className='w-full grid grid-cols-3 px-1'>
          <h1 className='flex w-auto mx-5 items-center mt-5 '>My life programming</h1>
          <div className='flex items-center justify-center'>
            <div className='bg-zinc-800 w-auto h-16 flex items-center text-center gap-4 mt-5 rounded-md px-4 '>
              <Link to="/home" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> Home</Link>
              <Link to="/about" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md w-28'> About me</Link>
              <Link to="/projects" className='flex items-center cursor-pointer transition px-5 bg-zinc-500 h-10 rounded-md'> Projects</Link>
            </div>
            <Outlet />
          </div>
        </div>
      ) : (
        <div className='w-full flex px-1'>
          <div onClick={() => { Menu_click() }} className='fixed z-20 object-cover filter invert'><img src={ImgMenu} alt="" /></div>

          <div className={`menu w-full mt-8 flex overflow-hidden transition-height duration-300 ease-in-out ${isOpen ? 'h-36' : 'h-0'}`}>
            <div className='grid grid-rows-3 row-start-2 w-full'>
              <Link to='/home' className=' flex justify-center  text-center '>home</Link>
              <Link to='/about' className=' text-center '> about</Link>
              <Link to='/projects' className=' text-center '> projects</Link>
            </div>
          </div>

          <Outlet />
        </div>
      )}
    </div>
  )
}

export default App
