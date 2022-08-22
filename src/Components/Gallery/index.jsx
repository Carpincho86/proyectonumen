import React from 'react'
import Carousel from 'better-react-carousel'
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
        <Carousel cols={5} rows={1} gap={60} loop containerClassName={styles.CAROUSEL_CONTAINER}>
          {listado.map((item) => (
            <Carousel.Item>
              <div className={styles.IMAGE_CONTAINER}>
                <img src={item.image} alt={item.alt} className={styles.ITEM}/>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Gallery;