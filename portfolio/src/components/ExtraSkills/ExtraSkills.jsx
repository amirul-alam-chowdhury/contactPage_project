import ExtraSkillProps from "../ExtraSkillProps/ExtraSkillProps"
import { IoCopy } from "react-icons/io5";
import style from './ExtraSkills.module.css'

const ExtraSkills = () => {
  return (
    <div className={style.container}>
      <h4>Extra SKills</h4>
      <ExtraSkillProps skills="MERN , System Design" icon={<IoCopy />} />
      <ExtraSkillProps skills="OOP, MYSQL" icon={<IoCopy />} />
      <ExtraSkillProps skills=" Stylus" icon={<IoCopy />} />
      <ExtraSkillProps skills="Github, Git" icon={<IoCopy />} />
    </div>
  );
}

export default ExtraSkills
