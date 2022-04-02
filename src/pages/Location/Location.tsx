import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';

import { Select, Map } from "components";
import styles from "./Location.module.css";
import { getPoints } from "store/location/points/actions";
import { setCurrentCity } from 'store/location/cities/actions';

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

  return (
    <section className={styles.wrapper}>
      <div className={styles.selectsWrapper}>
        <Select
          label={t('City')}
          selected={currentCity}
          options={allCities as any}
          customLabel="name"
          customValue="id"
          onClick={(item) => console.log(item)}
        />
        <Select
          label={t('Point of issue')}
          customLabel="address"
          customValue="id"
          options={allPoints as any}
          selected={null}
          onClick={(item) => console.log(item)}
        />
      </div>
      <div>
        <div className={styles.mapChoose}>Выбрать на карте:</div>
        <Map 
          points={allPoints}
          pointClickHandler={(item) => console.log(item)}
        />
      </div>
    </section>
  );
}

export default Location