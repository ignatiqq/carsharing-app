import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Header.module.scss";
import {CitySelector} from "components";
import classNames from 'classnames';

interface IHeader {
  className?: string
}

const Header: React.FC<IHeader> = ({ className }) => {

  return (
    <header className={classNames(styles.header, className)}>
        <Link to="/" className={styles.logo}>Need for Speed</Link>
        <CitySelector />
    </header>
  )
}

export default Header