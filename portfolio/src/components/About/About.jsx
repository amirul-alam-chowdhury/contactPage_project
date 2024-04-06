import React from 'react'
import style from './About.module.css'

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutLeft}>
        <li className={style.l1}>Age</li>
        <li className={style.l2}>Residence</li>
        <li className={style.l3}>Freelance</li>
        <li className={style.l4}>Adress</li>
      </div>
      <div className={style.aboutRight}>
        <li className={style.l1}>24</li>
        <li>BD</li>
        <li>Available</li>
        <li>Dhaka, Bangladesh</li>
      </div>
    </div>
  );
}

export default About
