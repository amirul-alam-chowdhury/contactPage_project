import PropsLang from '../props_lang_skill/PropsLang';
import style from './Lang.module.css'

const Lang = () => {


  return (
    <div className={style.lang}>
      <h4>Language</h4>
      <PropsLang name="Bangla" progress="100%" />
      <PropsLang name="English" progress="90%" />
      <PropsLang name="French" progress="60%" />
    </div>
  );
};

export default Lang
