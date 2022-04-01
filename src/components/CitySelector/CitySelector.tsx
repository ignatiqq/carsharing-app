import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useAppSelector, useAppDispatch } from 'store/hooks';

import { getAllCities, setCurrentCity } from 'store/location/cities/actions';
import type { ICurrentCity } from "store/location/cities/types";
import marker from "assets/images/marker.svg";
import styles from "./CitySelector.module.css";
import { Button, Loader } from 'components';

const CitySelector = () => {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const dispatch = useAppDispatch();

  const { allCities, currentCity } = useAppSelector(({location}) => ({
    allCities: location.cities.all.data,
    currentCity: location.cities.current
  }))

  const dropdown = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(dropdown && dropdown.current) {
      const clickHandler = (e: Event) => {
        const path = e.composedPath();
        if(!path.includes(dropdown.current as EventTarget)) {
          setDropdownOpened(false)
        }
      }
      window.addEventListener("click", clickHandler);
      return () => window.removeEventListener("click", clickHandler);
    }
  }, [dropdown])

  useEffect(() => {
    dispatch(getAllCities())
  }, [])

  useEffect(() => {
    if(allCities && allCities.length > 0 && !currentCity) {
      const cityFormLocalStorage = localStorage.getItem("city");
      if(cityFormLocalStorage) {
        const city = allCities.filter(item => item.id === cityFormLocalStorage)[0];
        dispatch(setCurrentCity(city))
      } else {
        dispatch(setCurrentCity(allCities[0]))
      }
    }
  }, [allCities])

  const opendropdownHandler = () => {
    setDropdownOpened((prev) => !prev)
  }

  const setCurrentCityHandler = (city: ICurrentCity) => {
    if(currentCity && currentCity.id !== city.id) {
      dispatch(setCurrentCity(city));
      localStorage.setItem("city", city.id);
      setDropdownOpened(false);
    }
  }

  return (
    <div ref={dropdown} className={styles.wrapper}>
      <Button onClick={opendropdownHandler} className={styles.currentCity}>
        <img src={marker} alt="marker" />
        <span className={styles.currentCityText}>{currentCity ? currentCity.name : <Loader />}</span>
      </Button>
        <div className={classNames(styles.dropdown, {
          [styles.dropdownOpen]: dropdownOpened
        })}>
          {
            allCities && allCities.length > 0 && 
              allCities.map((item) => (
                <div key={item.id}>
                  <Button onClick={() => setCurrentCityHandler(item)} className={styles.dropdownButton}>
                    {item.name}
                  </Button>
                </div>
              ))
          }
        </div>
    </div>
  )
}

export default CitySelector;