import React from 'react';
import { Link } from "react-router-dom";

import classNames from 'classnames';

import { ReactComponent as TelegramIcon } from "assets/icons/TelegramIcon.svg";
import { pagesLink } from './links';
import styles from "./SidebarNav.module.scss";
import { useTranslation } from 'react-i18next';

interface ISidebarNav {
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarNav: React.FC<ISidebarNav> = ({sidebarOpen, setSidebarOpen}) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.opened]: sidebarOpen,
        [styles.closed]: !sidebarOpen
      })}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {
            pagesLink && pagesLink.map(item => (
            <li key={item.id} className={styles.linksMargin}>
              <Link
                onClick={() => setSidebarOpen(false)}
                className={styles.link}
                to={item.path}>
                {t(`${item.name}`)}
              </Link>
            )</li>
            ))
          }
        </ul>
        <ul className={styles.socialsUl}>
          <li>
            <Link to="/">
              <TelegramIcon className={styles.socialsLink} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarNav 