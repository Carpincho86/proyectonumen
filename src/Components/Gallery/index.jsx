import React from 'react'
import Carousel from 'better-react-carousel'
// import {Carousel} from 'flowbite-react'
import {texto, listado} from './listaGallery'
import * as styles from './styles'
const Gallery = () => {
  return (
    <div>
      <div className={styles.TITLE}>
        <p>{texto.texto1} <span className="text-orange1"> {texto.texto2}</span></p>
      </div>
      <div className={styles.GALLERY_CONTAINER}>
        <Carousel cols={5}    // cantidad de columnas del carusel
                  loop={true}
                  autoplay={9000}
                  responsiveLayout={styles.MOBILE_CAROUSEL}
                  mobileBreakpoint={639} // inicio de version movil
                  containerClassName={styles.CAROUSEL_CONTAINER}>
          {listado.map((item) => (
            <Carousel.Item>
              <div>
                <img src={item.image} alt={item.alt} className={styles.ITEM}/>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Gallery;