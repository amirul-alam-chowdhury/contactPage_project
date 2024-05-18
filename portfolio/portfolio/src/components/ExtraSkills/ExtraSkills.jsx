import ExtraSkillProps from "../ExtraSkillProps/ExtraSkillProps"
import { IoCopy } from "react-icons/io5";
import style from './ExtraSkills.module.css'
import { IoMdCodeDownload } from "react-icons/io"

const ExtraSkills = () => {
  return (
    <div className={style.container}>
      <div>
        <h4>Extra SKills</h4>
        <ExtraSkillProps skills="MERN , System Design" icon={<IoCopy />} />
        <ExtraSkillProps skills="OOP, MYSQL" icon={<IoCopy />} />
        <ExtraSkillProps skills=" Stylus" icon={<IoCopy />} />
        <ExtraSkillProps skills="Github, Git" icon={<IoCopy />} />
      </div>
      <button className={style.btn}>
        <ExtraSkillProps text="Download CV" icons={<IoMdCodeDownload fontSize='17' />} />
        
      </button>
    </div>
  );
}

export default ExtraSkills
