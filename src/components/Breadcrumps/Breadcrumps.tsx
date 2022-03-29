import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import type { IUseBreadcumps, IRoute } from "./types";
import styles from "./Breadcumps.module.css";
import { ReactComponent as Arrow } from "assets/images/Arrow.svg";
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const Breadcumps: React.FC<IUseBreadcumps> = ({routes, currentRoutePathname, stepsPassed}) => {

  const [sortedRoutes, setSortedRoutes] = React.useState<Array<IRoute> | null>(null);
  const [selectedRoute, setSelectedRoute] = React.useState<string | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    if(routes) {
      setAllRoutes(routes);
      setSelectedRouteHandler(routes.find(item => item.index === 0)?.pathname as string);
    }
  }, [routes])

  useEffect(() => {
    if(currentRoutePathname) {
      setSelectedRouteHandler(currentRoutePathname);
    }
  }, [currentRoutePathname])

  const setAllRoutes = (routes: Array<IRoute>) => {
    setSortedRoutes([...routes].sort((a,b) => a.index - b.index));
  }

  const setSelectedRouteHandler = (pathname: string) => {
    setSelectedRoute(pathname);
  }

  return (
    <ul className={styles.ul}>
      {
        sortedRoutes && 
        sortedRoutes.map((item) => (
          <li className={styles.list} key={item.name} >
            {
              item.index !== 0 &&
              <span className={styles.arrow}>
                <Arrow/>
              </span>
            }
            {
              item.index > stepsPassed + 1 ? (
                <span className={styles.span}>{t(item.name)}</span>
              )
              :
              <Link className={classNames(styles.link, {
                [styles.current]: item.pathname === selectedRoute,
                [styles.passed]: item.index > stepsPassed
              })} 
              to={item.pathname}>
                {t(item.name)}
              </Link>
            }
          </li>
        ))
      }
    </ul>
  )

}

export default Breadcumps;