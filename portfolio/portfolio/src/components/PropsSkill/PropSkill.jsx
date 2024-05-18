import React from 'react'
import style from './PropSkill.module.css'

const PropSkill = (props) => {
  return (
    <div className={style.container}>
      <div className={style.propskill}>
        <div>{props.skill}</div>
        <div>{props.percentage}</div>
      </div>
      <div className={style.percentage} style={{width:props.percentage}}>
      </div>
    </div>
  );
}

export default PropSkill
