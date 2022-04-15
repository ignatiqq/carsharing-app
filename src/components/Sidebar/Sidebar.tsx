import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as MenuBtn } from "assets/icons/menuBtn.svg";
import { ReactComponent as XIcon } from "assets/icons/XIcon.svg";
import { Button, LanguageSelector } from 'components';
import SidebarNav from '../SidebarNavigation/SidebarNav';
import { languages } from 'components/LanguageSelector/languages';

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (sidebarOpen && e.key === "Escape") {
        setSidebarOpen(false)
      }
    }
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [])

  useEffect(() => {
    if(sidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [sidebarOpen])

  const sidebarOpenHanlder = () => {
      if(!sidebarOpen) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
  }

  return (
    <aside className={styles.asideWrapper}>
    <SidebarNav setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
     {sidebarOpen && <div className={styles.overlay} />}
      <div className={classNames(styles.sidebar, {
        [styles.sidebarOpened]: sidebarOpen
      })}>
          <div className={classNames(styles.wrapper)}>
            <Button onClick={sidebarOpenHanlder} className={styles.buttonMenu}>
              {
                sidebarOpen 
                ?
                <XIcon />
                :
                <MenuBtn className={classNames(styles.menuLight, {
                  [styles.menuDark]: !sidebarOpen
                })} />
              }
            </Button>
            <LanguageSelector languages={languages} className={classNames(styles.language, {
              [styles.hidden]: !sidebarOpen,
              [styles.displayed]: sidebarOpen
            }
            )} />
          </div>
      </div>
    </aside>
  );
}

export default Sidebar;