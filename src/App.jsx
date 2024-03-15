import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/home'
import About from './pages/about'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path= {'/about'} element = {<About/>}/>
      <Route path={'/projects'} element= {<Projects/>}/>
      <Route path={'*'} element={<Home/>}/>
    </Routes>
  )
}

export default App
