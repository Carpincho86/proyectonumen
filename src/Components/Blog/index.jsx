import React from 'react'
import * as styles from "./styles";
import { Icon } from '@iconify/react';

const Blog = () => {
    return (
        <div className={styles.BG_CONTAINER} style={styles.BG_IMG}>
            <div className='p-4'>
                <h2 className={styles.TITLE}>Si te interesa conocer mas sobre</h2>
                <h2 className={styles.TITLE}>sustentabilidad y medio ambiente</h2>
            </div>
            <div className={styles.DIV_ICON}>
                <span><Icon className={styles.ICON} icon="fa:recycle"/></span>
            </div>
            <div className='p-4'>
                <a href="#" className={styles.BOTON}>Saber mas</a>
            </div>
        </div>
    )
}

export default Blog