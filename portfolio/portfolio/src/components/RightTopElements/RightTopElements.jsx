import React from 'react'
import logo1 from '../assets/logo1.png'
import style from './RightTopElements.module.css'
import { FaArrowRightLong } from "react-icons/fa6";

const RightTopElements = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.h4}>
          <h4>I'm Frogshopping</h4>
          <h4>Front-End Developer</h4>
        </div>

        <p1>
          Skilled Front-end Developer with 4 years of experience in designing,
          developing and maintaining front-end web applications. Achieved
          measurable success in increasing page load speeds by 20% which lead to
          an increase in website conversion rates.
        </p1>
        <div className={style.btn}>
          <button className={style.bttn}>Hire me {<FaArrowRightLong />}</button>
        </div>
      </div>
      <div className={style.imgg}>
        <img src={logo1} className={style.logo2} />
      </div>

      
    </div>
  );
}

export default RightTopElements
