import React from 'react'
import style from './Logo1.module.css'
import logo1 from '../assets/logo1.png'

const Logo1 = () => {
  return (
    <div className={style.logo1}>
      <img src={logo1} />
    </div>
  );
}

export default Logo1
