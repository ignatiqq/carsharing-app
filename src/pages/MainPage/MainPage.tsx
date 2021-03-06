import React from 'react';

import { InfoSide, SliderSide } from ".";
import style from "./Mainpage.module.scss";

const MainPage: React.FC = () => {
  return (
    <section className={style.section}>
      <InfoSide />
      <SliderSide />
    </section>
  );
}

export default MainPage;