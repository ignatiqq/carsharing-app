import React from 'react';
import { Link } from "react-router-dom";

import classNames from 'classnames';

import { ReactComponent as TelegramIcon } from "assets/images/TelegramIcon.svg";
import { ReactComponent as InstagramIcon } from "assets/images/InstagramIcon.svg";
import { ReactComponent as FacebookIcon } from "assets/images/FacebookIcon.svg";

import styles from "./SidebarNav.module.css";

interface ISidebarNav {
  sidebarOpen: boolean
}

const SidebarNav: React.FC<ISidebarNav> = ({sidebarOpen}) => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.opened]: sidebarOpen,
        [styles.closed]: !sidebarOpen
      })}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.linksMargin}>
            <Link
              className={styles.link}
              to="/">
              Парковка
            </Link>
          </li>
          <li className={styles.linksMargin}>
            <Link
              className={styles.link}
              to="/">
              Страховка
            </Link>
          </li>
          <li className={styles.linksMargin}>
            <Link
              className={styles.link}
              to="/">
              Бензин
            </Link>
          </li>
          <li className={styles.linksMargin}>
            <Link
              className={styles.link}
              to="/">
              Обслуживание
            </Link>
          </li>
        </ul>
        <ul className={styles.socialsUl}>
          <li>
            <Link to="/">
              <TelegramIcon className={styles.socialsLink} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <InstagramIcon style={{margin: "0px 24px"}} className={styles.socialsLink} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FacebookIcon className={styles.socialsLink} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarNav 