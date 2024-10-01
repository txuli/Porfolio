import { useState } from 'react'

import './components/font.css'
import NavBar from './components/NavBar'
import Home from './pages/home'
import About from './pages/about'
import LogIn from './pages/LogIn'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Title from './components/Title'
import Cv from './pages/Cv'
import Page404 from './pages/page404'

function App() {
  const isNavBarVisible = location.pathname !== '/404';

  
    return (
      <>
        <NavBar />
        <Title />
        <div className="absolute inset-0  -z-20">
                  <div class="absolute inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#800080_100%)]"></div>
                  <div class="relative h-full w-full "><div class="absolute bottom-0 left-0 right-0 top-0 bg-</div>[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
              </div>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path= {'/about'} element = {<About/>}/>
        <Route path={'/projects'} element= {<Projects/>}/>
        <Route path={'/logIn'} element= {<LogIn/>}/>
        <Route path={'/cv'} element={<Cv/>}/>
        <Route path={'*'} element={<Page404/>}/>
      </Routes>
    
      </>
      
    )}

export default App
