import { useState } from 'react'

import Navbar from './Components/Navbar'
import './App.css'
import Banner from './Components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    </>
  )
}

export default App
