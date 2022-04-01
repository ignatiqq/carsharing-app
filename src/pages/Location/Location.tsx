import React from 'react';

import { Select, Map } from "components";
import styles from "./Location.module.css";
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';
import { useDispatch } from 'react-redux';
import { getPoints } from "store/location/points/actions";

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
          selected={currentCity as any}
          options={allCities as any}
          customLabel="name"
          customValue="id"
          onClick={(item) => console.log(item)}
        />
        <Select
          label={t('Point of issue')}
          selected={{
            label: 'Ершова, 52',
            value: 'hello world',
          }}
          onClick={(item) => console.log(item)}
          options={[
            {
              label: 'Ульяновск',
              value: 'Uljanovsk',
            },
            {
              label: 'Уфа',
              value: 'Ufa',
            },
            {
              label: 'Ершова, 52',
              value: 'hello world',
            },
          ]}
        />
      </div>
      <div>
        <div className={styles.mapChoose}>Выбрать на карте:</div>
        <Map 
          points={allPoints}
        />
      </div>
    </section>
  );
}

export default Location