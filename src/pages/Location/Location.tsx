import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';

import { Select, Map } from "components";
import styles from "./Location.module.css";
import { getPoints } from "store/location/points/actions";
import { setCurrentCity } from 'store/location/cities/actions'; 
import { orderSetPointId } from 'store/order/actions';
import type { ICurrentCity } from 'store/location/cities/types';
import type { ICurrentPoint } from "store/location/points/types";
import { getPointsByCityId } from 'utils/pointsHelper';

const Location = () => {
  
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { allCities, allPoints, currentCity, currentPoint } = useAppSelector(({location, order}) => ({
    allCities: location.cities.all.data,
    allPoints: location.points.data,
    currentCity: location.cities.current,
    currentPoint: order.pointId
  })) 

  useEffect(() => {
    dispatch(getPoints())
  }, [])

  useEffect(() => {
    if(currentCity && allPoints && currentPoint) {
      const pointsForCity = getPointsByCityId(allPoints, currentCity.id);
      if(pointsForCity.filter(item => item.id === currentPoint.id).length <= 0) {
        dispatch(orderSetPointId(null));
      }
    }
  }, [currentCity])

  const selectCityHandler = (item: ICurrentCity) => {
    dispatch(setCurrentCity(item));
  } 

  const selectPointHandler = (item: ICurrentPoint) => {
    dispatch(orderSetPointId({id: item.id, value: item.address}))
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.selectsWrapper}>
        <Select
          label={t('City')}
          selected={currentCity}
          options={allCities}
          customLabel="name"
          customValue="id"
          clickHandler={selectCityHandler}
        />
        <Select
          label={t('Point of issue')}
          customLabel="address"
          customValue="id"
          options={allPoints && currentCity && getPointsByCityId(allPoints, currentCity.id)}
          selected={currentPoint ? {...currentPoint, address: currentPoint?.value} : null}
          clickHandler={selectPointHandler}
        />
      </div>
      <div>
        <div className={styles.mapChoose}>Выбрать на карте:</div>
        <Map 
          currentCity={currentCity}
          currentPoint={currentPoint ? {...currentPoint, address: currentPoint!.value, id: currentPoint!.id} : null}
          points={allPoints}
          pointClickHandler={selectPointHandler}
          className={styles.mapStyles}
        />
      </div>
    </section>
  );
}

export default Location