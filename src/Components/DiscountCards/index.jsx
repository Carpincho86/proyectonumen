import React from 'react'
import {texto , listado } from './listaProductos'
import * as styles from "./styles";
import Swal from 'sweetalert2'
import Logo from '../Images/Logo/Logo.svg'

const DiscountCards = ({items,setItems}) => {
  const alerta = () => {
    Swal.fire({
      title: '¿Desea agregar el producto al carrito?',
      text: "Luego podrá modificar su cantidad.",
      // icon: 'question',
      imageUrl: Logo,
      // imageWidth: 614,
      // imageHeight: 116,
      showCancelButton: true,
      confirmButtonColor: styles.COLORS.green1,
      cancelButtonColor: styles.COLORS.orange1,
      confirmButtonText: 'Agregar al carrito!', 
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Gracias!',
          text: 'Su producto fue agregado al carrito.',
          confirmButtonColor: styles.COLORS.green1,
        })
        setItems(items+1);
      }
    })
  };
  return (
    <>
      <div className={styles.TITLE}>
        <p>{texto.texto1}</p>
        <p className="text-orange1">{texto.texto2}</p>
      </div>
      <div className={styles.CARD_CONTAINER}> 
        {listado.map((producto) => (
          <div className={styles.CARD} key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} className={styles.IMAGE}/>
              <p className={styles.NAME}>{producto.nombre}</p>
              <div className={styles.PRICE_CONTAINER}>
                <p className={styles.DISCOUNT}>$ {producto.precio * (1 - producto.descuento / 100)}</p>
                <p className={styles.PRICE}>$ {producto.descuento !== 0 ? producto.precio : 0 }</p>
              </div>
              <button className={styles.BUTTON} onClick={() => alerta()}>{texto.boton}</button>
              {/* <button className={styles.BUTTON} value={producto.id} onClick={addToCart}>{texto.boton}</button> */}
          </div>
        ))}
      </div>
    </>
  )
}


export default DiscountCards