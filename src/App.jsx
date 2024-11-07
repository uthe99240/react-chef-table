import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Receipes from './components/Receipes/Recipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar></Navbar>
        <Banner></Banner>
        <Receipes></Receipes>
      </div>
    </>
  )
}

export default App
