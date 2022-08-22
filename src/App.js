import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import DiscountCards from './Components/DiscountCards'
import InfoCards from './Components/infoCards'
import OtherProducts from './Components/OtherProducts'
import GiftBox from './Components/GiftBox'
import Gallery from './Components/Gallery'


const App = () => {
  return (
    <div>
      <NavBar/>
      <DiscountCards/>
      <InfoCards/>
      <OtherProducts/>
      <GiftBox/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App