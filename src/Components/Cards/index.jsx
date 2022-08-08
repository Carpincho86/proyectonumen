import React from "react";
import { products } from "./constants";
import * as styles from "./styles";

const Cards = () => {
  return (
    <div className={styles.CARD_CONTAINER}>
      {products.map((item) => (
        <div className={styles.CARD}>
          <img src={item.imagen} alt={item.texto} className={styles.IMAGE} />
          <p className={styles.TEXT}>{item.texto}</p>
          <p className={styles.PRICE}>$ {item.precio}</p>
          <button className={styles.BUTTON}>Comprar</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
