import React from "react";
import styles from'./Navbar.module.css'
import  logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className={styles.container }>
      <div className={styles.logo}>
        <img className={styles.logo_img} src={logo}></img>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
