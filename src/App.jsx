import { Suspense, useState } from 'react'

import Navbar from './Components/Navbar'
import './App.css'
import Banner from './Components/Banner'
import Cardholder from './Components/Cardholder'
import Endling from './Components/Endling'

function App() {
  const [count, setCount] = useState(0)
  const data=fetch('data.json').then(res=>res.json())
  

  return (
    <>
    <Navbar count={count}></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
     <Cardholder data={data} setCount={setCount}></Cardholder>
    </Suspense>
    <Endling></Endling>
    </>
  )
}

export default App
