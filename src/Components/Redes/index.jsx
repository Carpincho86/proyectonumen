import React from 'react'
import * as styles from "./styles"
import { Icon } from '@iconify/react';
import { redes } from "./constants";
import "./styles.css";

const Redes = () => {

    return (
        <div className={styles.BG_CONTAINER} style={styles.BG_IMG}>
            <div>
                {/* Titulos */}
                <h2 className={styles.TITLE}><span className='text-[#379908]'>Contale a un </span><span className='text-[#E1C050]'>Amigo</span></h2>
            </div>
            <div className={styles.DIV_REDES}>
                {/* Cargar las redes */}
                {redes.map((item) => (
                    <div className={styles.ICON_CONTAINER}>
                        <a target="_blank" href={item.link}><span className={styles.ICON_TEXT}><Icon icon={item.icon}/></span></a>
                    </div> 
                    )
                )}
            </div>
        </div>
    )
}


export default Redes;