import React from "react";
import * as styles from "./styles";

const BurgerButton = (props) => {
  return (
    <div onClick={props.changerClick} className={styles.MENU_ICON}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 48 48"
      >
        <g
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        >
          <path d="M7.94971 11.9497H39.9497" />
          <path d="M7.94971 23.9497H39.9497" />
          <path d="M7.94971 35.9497H39.9497" />
        </g>
      </svg>
    </div>
  );
};

export default BurgerButton;
