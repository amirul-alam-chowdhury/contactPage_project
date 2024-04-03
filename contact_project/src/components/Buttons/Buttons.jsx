import styles from './Buttons.module.css'


const Buttons = (props) => {
  return (
    <button className={props.isWidebtn? styles.wide_btn: styles.top_btn}>
      {props.icon}
      {props.text}
    </button>
  );
}

export default Buttons
