import React from 'react';

import marker from "assets/icons/marker.svg";
import styles from "./CitySelector.module.scss";
import { Loader } from 'components';
import type { ICurrentCity } from 'store/location/cities/types';
export interface ICitySelector {
  currentCity: ICurrentCity | null
}

const CitySelector: React.FC<ICitySelector> = ({currentCity}) => {

  return (
      <div className={styles.currentCity}>
        <img src={marker} alt="marker" />
        <span className={styles.currentCityText}>{currentCity ? currentCity.name : <Loader />}</span>
      </div>
  )
}

export default CitySelector;