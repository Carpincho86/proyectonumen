import React, { useState } from "react";
import Logo from "../../images/Logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import * as styles from "./styles";
import { links } from "./constants";
import BurgerButton from "../BurgerButton";
import { Icon } from "@iconify/react";
import "./styles.css"

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const changerClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className={styles.NAV}>
        <div>
          <a href="#">
            <img className={styles.IMAGE} src={Logo} alt="logo" />
          </a>
        </div>
        <div className={styles.MENU_CONTEINER}>
          <BurgerButton  changerClick={changerClick} />
        </div>

        <ul className={clicked ? `custom-bg-paterns ${styles.MENU}` : styles.MENU_NONE}>
          {links.map((item, index) => (
            <li className={styles.ANCHOR}>
              <a key={index} href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <ul className={styles.ANCHOR_LIST}>
          {links.map((item, index) => (
            <li className={styles.ANCHOR}>
              <a key={index} href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.CART_CONTEINER}>
          <Icon
            className={styles.CART_ICON}
            icon="ant-design:shopping-cart-outlined"
          />

          <div className={styles.CART_NOTIFICATIONS}>0</div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
