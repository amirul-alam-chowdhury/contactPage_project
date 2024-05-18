import React from 'react'
import style from './Skill.module.css'
import PropSkill from '../PropsSkill/PropSkill'

const Skill = () => {
  return (
    <div className={style.skill}>
      <h4>Skills</h4>
      <PropSkill skill="React" percentage="90%" />
      <PropSkill skill="Python" percentage="90%" />
      <PropSkill skill="HTML" percentage="100%" />
      <PropSkill skill="CSS" percentage="100%" />
      <PropSkill skill="JS" percentage="85%" />
    </div>
  );
}

export default Skill
