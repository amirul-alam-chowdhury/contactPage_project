import style from './Rightdiv.module.css'
import web from "../assets/web.png";
import ui from "../assets/ui.png";
import game from '../assets/game.png'
import system from '../assets/system.png'
import backend from '../assets/backend.png'
import app from '../assets/app.png'

const BotomComponents = (props) => {
  return (
    <div className={style.one}>
      <div className={style.webb}>
        <img src={web} className={style.web} />
      </div>
      <div>
        <h4>{props.text1}</h4>
      </div>
      <div>{props.text2}</div>

      <div className={ui_container}>
        <div className={style.uii}>
          <img src={ui} className={style.ui} />
        </div>
        <div>{props.text3}</div>
        <div>{props.text4}</div>
      </div>
      <div>
        <div>
          <img src={game} />
        </div>
        <div>{props.text5}</div>
        <div>{props.text5_5}</div>
      </div>
      <div>
        <div>
          
          <img src={app} />
        </div>
      </div>
    </div>
  );
}

export default BotomComponents
