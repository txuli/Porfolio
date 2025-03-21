import { useState } from 'react'

import './components/font.css'
import NavBar from './components/NavBar'
import Home from './pages/home'
import About from './pages/about'
import LogIn from './pages/LogIn'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Title from './components/Title'
import Cv from './pages/Cv'
import Page404 from './pages/page404'
import Footer from './components/footer'

function App() {
  
  
    return (
      <div>
        
         <NavBar /> 
        <div className="absolute inset-0  -z-20">
                  <div class="fixed inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#800080_100%)]"></div>
                  <div class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              </div>
        <Title  />
       
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path= {'/about'} element = {<About/>}/>
        <Route path={'/projects'} element= {<Projects/>}/>
        <Route path={'/logIn'} element= {<LogIn/>}/>
        <Route path={'/cv'} element={<Cv/>}/>
        <Route path={'*'} element={<Page404/>}/>
      </Routes>
      <Footer />
      </div>
      
    )}

export default App
