import style from "./ExtraSkillProps.module.css";

const ExtraSkillProps = (props) => {
  return (
    <div className={style.props}>
      <div className={style.icon}>{props.icon}</div>
      <div>{props.skills}</div>
      
    </div>
  );
};

export default ExtraSkillProps;
