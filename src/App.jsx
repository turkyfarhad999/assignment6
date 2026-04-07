import { Suspense, useState } from 'react'

import Navbar from './Components/Navbar'
import './App.css'
import Banner from './Components/Banner'
import Cardholder from './Components/Cardholder'

function App() {
  const [count, setCount] = useState(0)
  const data=fetch('data.json').then(res=>res.json())
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
     <Cardholder data={data}></Cardholder>
    </Suspense>
    </>
  )
}

export default App
