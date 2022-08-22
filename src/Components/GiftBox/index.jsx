import React from 'react'
import {texto} from './giftBox'
import { Icon } from '@iconify/react';
import * as styles from './styles'
import vegetablesBasket from "../Images/VegetablePatch/vegetablesBasket.jpg"

const GiftBox = () => {
  return (
    <>
      <div className={styles.CONTAINER}>       
        <div className={styles.IMAGE_CONTAINER}>
          <img src={vegetablesBasket} alt="vegetablesBasket" className={styles.IMAGE}/>
        </div>

        <div>
          <div className={styles.TITLE}>
            <p>{texto.texto1}</p>
            <p className="text-orange1">{texto.texto2}</p>
          </div>
          
          <p className={styles.TEXT}>{texto.texto3}</p>

          <button className={styles.BUTTON}>{texto.boton}</button>
        </div>
      </div>
    </>
  )
}

export default GiftBox