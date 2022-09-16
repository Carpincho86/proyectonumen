import React from 'react'
import {texto , listadoOther} from './listaOther'
import { Icon } from '@iconify/react';
import * as styles from './styles'
import vegetablesHands from "../Images/VegetablePatch/vegetablesHands.jpg"

const OtherProducts = () => {
  return (
    <>
      <div className={styles.CONTAINER}>
        <div className="flex flex-col items-center md:items-start">
          <div className={styles.TITLE}>
            <p>{texto.texto1}</p>
            <p className="text-orange1">{texto.texto2}</p>
          </div>
          
          <p className={styles.SUBTITLE}>{texto.subtitulo}</p>
        
          <div className={styles.ITEM_CONTAINER}> 
            {listadoOther.map((other) => (
                <div className={styles.ITEM} key={other.id}>
                  <Icon icon = "icon-park-solid:success" style={styles.ICON}/>
                  <p className={styles.TEXT}>{other.texto}</p>
                </div>
            ))}
          </div>

          <button className={styles.BUTTON}>{texto.boton}</button>
        </div>
        
        <div className={styles.IMAGE_CONTAINER}>
          <img src={vegetablesHands} alt="vegetablesHands" className={styles.IMAGE}/>
        </div>
      </div>
    </>
  )
}

export default OtherProducts