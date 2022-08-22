import React from 'react'
import {texto , listadoinfo } from './listaInfo'
import { Icon } from '@iconify/react';
import * as styles from "./styles";

const InfoCards = () => {
  return (
    <>
      <div className={styles.TITLE}>
        <p>{texto.texto1}</p>
        <p className="text-orange1">{texto.texto2}</p>
      </div>
    
      <div className={styles.CARD_CONTAINER}> 
        {listadoinfo.map((info) => (
          <div className={styles.CARD} key={info.id}>
            <Icon icon = {info.icono} style={{ color: styles.COLORS.orange1 , fontSize: '44px' }}/>
            <p className={styles.NAME}>{info.titulo}</p>
            <p className={styles.TEXT}>{info.texto}</p>
              
          </div>
        ))}
      </div>
    </>
  )
}

export default InfoCards