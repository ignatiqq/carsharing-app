import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as MenuBtn } from "assets/images/menuBtn.svg";
import { Button, LanguageSelector } from 'components';
import SidebarNav from '../SidebarNavigation/SidebarNav';
import { languages } from 'components/LanguageSelector/languages';

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if(sidebarOpen && e.key === "Escape"){
        setSidebarOpen(false)
      }
    }
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [])

  const sidebarOpenHanlder = () => {
      if(!sidebarOpen) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
  }

  return (
    <aside>
    <SidebarNav setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
     {sidebarOpen && <div className={styles.overlay} />}
      <div className={styles.sidebar}>
          <div className={styles.wrapper}>
            <Button onClick={sidebarOpenHanlder} className={styles.buttonMenu}>
              <MenuBtn className={classNames(styles.menuLight, {
                [styles.menuDark]: !sidebarOpen
              })} />
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