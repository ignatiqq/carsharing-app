import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Header.module.css";
import { useAppSelector } from 'store/hooks';
import {CitySelector} from "components";

const Header = () => {
  
  const { currentCity } = useAppSelector(({location}) => ({
    currentCity: location.cities.current
  }))

  console.log(currentCity)

  return (
    <header className={styles.header}>
        <Link to="/" className={styles.logo}>Need for Speed</Link>
        <CitySelector />
    </header>
  )
}

export default Header