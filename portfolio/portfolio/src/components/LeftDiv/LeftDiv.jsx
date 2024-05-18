import About from "../About/About"
import ExtraSkills from "../ExtraSkills/ExtraSkills"
import Icons from "../Icons/Icons"
import Lang from "../Lang/Lang"
import Logo1 from "../Logo/Logo1"
import Name from "../Name/Name"

import Skill from "../Skills/Skill"
import style from './LeftDiv.module.css'


const LeftDiv = () => {
  return (
    <div className={style.LeftDivContainer}>
      <Logo1/>
      <Name/>
      <Icons/>
      <About/>
      <Lang/>
      <Skill/>
      <ExtraSkills/>
      
      
    </div>
  )
}

export default LeftDiv
