import Buttons from "../Buttons/Buttons";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import styles from "./Contact_form.module.css";
import service from "../assets/Service.jpg";

const Contact_form = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btns}>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Buttons text="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
        </div>
        <div className={styles.wide_btn}>
          <Buttons
            isWidebtn={true}
            text="VIA EMAIL FORM"
            icon={<IoMail fontSize="24px" />}
          />
        </div>
        <form>
          <div className={styles.form_container}>
            <label for="name">Name</label>
            <input type="text"></input>
          </div>
          <div className={styles.form_container}>
            <label for="name">E-mail</label>
            <input type="text"></input>
          </div>
          <div className={styles.form_container}>
            <label for="name">Text</label>
            <textarea rows="7"></textarea>
          </div>
          <div className={styles.submit}>
            <Buttons text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.service_img}>
        <img src={service} />
      </div>
    </section>
  );
};

export default Contact_form;
