import style from "./ExtraSkillProps.module.css";

const ExtraSkillProps = (props) => {
  return (
    <div className={style.props}>
      <div className={style.icon}>{props.icon}</div>
      <div>{props.skills}</div>
      
      <div className={style.download}>
        <div>{props.text} </div>
      <div className={style.icons}>{props.icons}</div> 
      </div>
      
      
    </div>
  );
};

export default ExtraSkillProps;
