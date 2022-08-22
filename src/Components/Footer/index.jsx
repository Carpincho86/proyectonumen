import React from "react"
import logo from '../../img/Logo.svg';
import { productos, categorias, seguinos } from "./constants";
import { Icon } from '@iconify/react';
import * as styles from "./styles";

const Footer = () => {
    
    const wp_icon = "logos:whatsapp-icon";
  
    return (
		<div className={styles.GRID}>
			<div className={styles.LOGO_CONTAINER}>
          <img src={logo} alt="logo" className={styles.LOGO_IMG}/>
			</div>
			<div className={styles.CHILD_GRID}>
                <a className={styles.TITLE_COL} href="#">Productos</a>
                {/* Cargar de productos */}
                {
                  productos.map((item) => (
                      <a className={styles.SUB_LINK} href={item.link}>{item.name}</a>
                    )
                  )
                }
      </div>
			<div className={styles.CHILD_GRID}>
                <a className={styles.TITLE_COL} href="#">Categorias</a>
                {/* Cargar de categorias */}
                {
                  categorias.map((item) => (
                      <a className={styles.SUB_LINK} href={item.link}>{item.name}</a>
                    )
                  )
                }
			</div>
			<div className={styles.CHILD_GRID}>
                <a className={styles.TITLE_COL} href="#">Seguinos</a>
                {/* Cargar redes para segumiento */}
                {
                  seguinos.map((item) => (
                      <a target="_blank" className={styles.SUB_LINK} href={item.link}>{item.name}</a>
                    )
                  )
                }
			</div>
			<div className={styles.CHILD_GRID}>
                <a className={styles.TITLE_COL} href="#">Nuestras Marcas</a>
			</div>
			<div className={styles.CHILD_GRID}>
                <a className={styles.TITLE_COL} href="#">Sobre Nosotros</a>
                <div>  
                <a target="_blank" className={styles.SUB_LINK} href="https://wa.me/34555005500">Contacto <span className={styles.WP_ANIMATION}><Icon icon={wp_icon}/></span></a>
                </div>
			</div>
		</div>
    )
}

export default Footer