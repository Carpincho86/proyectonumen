import React from 'react'
import Carousel from 'better-react-carousel'
// import {Carousel} from 'flowbite-react'
import {texto, listado} from './listaGallery'
import * as styles from './styles'
const Gallery = () => {
  return (
    <>
      <div className={styles.TITLE}>
        <p>{texto.texto1}</p>
        <p className="text-orange1">{texto.texto2}</p>
      </div>

      <div className={styles.GALLERY_CONTAINER}>
        <Carousel cols={5} rows={1} gap={10} loop containerClassName={styles.CAROUSEL_CONTAINER}>
          {listado.map((item) => (
            <Carousel.Item>
              <div className={styles.IMAGE_CONTAINER}>
                <img src={item.image} alt={item.alt} className={styles.ITEM}/>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={1000} >
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div> */}
    </>
  )
}

export default Gallery;