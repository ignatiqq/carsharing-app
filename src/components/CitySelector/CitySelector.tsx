import React from 'react';

import marker from "assets/icons/marker.svg";
import styles from "./CitySelector.module.css";
import { Loader } from 'components';
import type { IComponent } from "./withCitySelectorLogic";
import withCitySelectorLogic from './withCitySelectorLogic';

const CitySelector = ({currentCity}: IComponent) => {
  console.log(currentCity)

  return (
      <div className={styles.currentCity}>
        <img src={marker} alt="marker" />
        <span className={styles.currentCityText}>{currentCity ? currentCity.name : <Loader />}</span>
      </div>
  )
}

export default withCitySelectorLogic(CitySelector);