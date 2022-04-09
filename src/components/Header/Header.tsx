import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Header.module.css";
import {CitySelector} from "components";

const Header = () => {

  return (
    <header className={styles.header}>
        <Link to="/" className={styles.logo}>Need for Speed</Link>
        <CitySelector />
    </header>
  )
}

export default Header