import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './pages/section1'
import Navbar from './Utilities/Navbar'
import Section2 from './pages/section2'
import Section3 from './pages/section3'
import Section4 from './pages/section4'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="bg-black w-full min-h-screen font-poppins">
      <div className='relative top-5'>
      <Navbar/>
      </div>
      <Section1 />
    </div>
      <Section2/>
      <Section3/>
      <Section4/>
    </>
  )
}

export default App
