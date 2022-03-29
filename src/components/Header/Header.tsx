import React from 'react';
import { Link } from 'react-router-dom';

import { CitySelector } from "components";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
        <Link to="/" className={styles.logo}>Need for Speed</Link>
        <CitySelector />
    </header>
  )
}

export default Header