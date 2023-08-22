import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  const [displayState, setDisplayState] = useState('')

  const DisplaySwitch = (state) => {
    switch (state) {
      case '':
        return <Home setDisplayState = { setDisplayState } />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      case 'resume':
        return <Resume />
      default:
        return <Home />
    }
  }

  return (
    <>
       <Navbar setDisplayState = { setDisplayState } />
      {DisplaySwitch(displayState)}
      <Footer setDisplayState = { setDisplayState } />
    </>
  )
}

export default App
