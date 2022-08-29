import React from "react";
import Logo from "../../images/Logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import * as styles from "./styles";
import { links } from "./constants";

function NavBar() {
  return (
    <>
      <nav className={styles.NAV}>
        <div>
          <a href="#">
            <img className={styles.IMAGE} src={Logo} alt="logo" />
          </a>
        </div>
        <div className={styles.MENU_CONTEINER}>
          <GiHamburgerMenu className={styles.MENU_ICON} />
        </div>

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
          <AiOutlineShoppingCart className={styles.CART_ICON} />

          <div className={styles.CART_NOTIFICATIONS}>0</div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
