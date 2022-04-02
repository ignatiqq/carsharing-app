import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';

import { Select, Map } from "components";
import styles from "./Location.module.css";
import { getPoints } from "store/location/points/actions";
import { setCurrentCity } from 'store/location/cities/actions';
import { ICurrentCity } from 'store/location/cities/types';
import { getPointsByCityId } from 'utils/pointsHelper';

const Location = () => {
  
  const { t } = useTranslation();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPoints())
  }, [])

  const { allCities, allPoints, currentCity } = useAppSelector(({location}) => ({
    allCities: location.cities.all.data,
    allPoints: location.points.data,
    currentCity: location.cities.current
  })) 

  const selectCityHandler = (item: ICurrentCity) => {
    dispatch(setCurrentCity(item))
  } 

  return (
    <section className={styles.wrapper}>
      <div className={styles.selectsWrapper}>
        <Select
          label={t('City')}
          selected={currentCity}
          options={allCities as any}
          customLabel="name"
          customValue="id"
          clickHandler={selectCityHandler}
        />
        <Select
          label={t('Point of issue')}
          customLabel="address"
          customValue="id"
          options={allPoints && currentCity && getPointsByCityId(allPoints, currentCity.id) as any}
          selected={null}
          clickHandler={(item) => console.log(item)}
        />
      </div>
      <div>
        <div className={styles.mapChoose}>Выбрать на карте:</div>
        <Map 
          currentCity={currentCity}
          points={allPoints}
          pointClickHandler={(item) => console.log(item)}
          className={styles.mapStyles}
        />
      </div>
    </section>
  );
}

export default Location