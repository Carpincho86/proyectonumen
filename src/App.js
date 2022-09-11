import React, {useState} from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import DiscountCards from './Components/DiscountCards'
import InfoCards from './Components/infoCards'
import OtherProducts from './Components/OtherProducts'
import GiftBox from './Components/GiftBox'
import Gallery from './Components/Gallery'
import Redes from './Components/Redes'
import Blog from './Components/Blog'

const App = () => {
  const [items,setItems] = useState(0);

  return (
    <div className='flex flex-col space-y-8'>
      
        <NavBar items={items} setItems={setItems}/>
        <DiscountCards items={items} setItems={setItems}/>
        <InfoCards/>
        <OtherProducts/>
        <GiftBox/>
        <Gallery/>
        <Blog/>
        <Redes/>
        <Footer/>
     
    </div>
  )
}

export default App