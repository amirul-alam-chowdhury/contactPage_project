import style from "./PropsLang.module.css";

const PropsLang = (props) => {
  return (
    <div className={style.props}>
      <div className={style.name_progress_container}>
        <div className={style.name_progress}>
          <div>{props.name}</div>
          <div>{props.progress}</div>
        </div>

        <div className={style.progress} style={{width:props.progress}} ></div>
      </div>
    </div>
  );
};

export default PropsLang;
