import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Cards from './Components/Cards'
import Redes from './Components/Redes'
import Blog from './Components/Blog'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Cards/>
      <Blog/>
      <Redes/>
      <Footer/>
    </div>
  )
}

export default App