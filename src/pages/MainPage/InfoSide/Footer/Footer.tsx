import React from 'react';

import style from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerText}>© 2016-2019 «Need for drive»</div>
      <div className={style.footerPhone}>8 (495) 234-22-44</div>
    </div>
  );
}

export default Footer;