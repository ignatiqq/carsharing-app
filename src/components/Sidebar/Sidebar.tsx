import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as MenuBtn } from "assets/images/menuBtn.svg";
import { Button, LanguageSelector } from 'components';
import SidebarNav from '../SidebarNavigation/SidebarNav';

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

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if((e.target as HTMLElement).tagName === "A" || ((e.target as HTMLElement).parentNode as HTMLElement).tagName === "A") {
        setSidebarOpen(false)
      }
    }
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
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
    <SidebarNav sidebarOpen={sidebarOpen} />
     {sidebarOpen && <div className={styles.overlay}></div>}
      <div className={styles.sidebar}>
          <div className={styles.wrapper}>
            <Button onClick={sidebarOpenHanlder} className={styles.buttonMenu}>
              <MenuBtn className={classNames(styles.menuLight, {
                [styles.menuDark]: !sidebarOpen
              })} />
            </Button>
            <LanguageSelector />
          </div>
      </div>
    </aside>
  );
}

export default Sidebar;