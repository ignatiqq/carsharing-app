import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import type { IBreadcrumbs, IRoute } from "./types";
import styles from "./Breadcrumbs.module.scss";
import { ReactComponent as Arrow } from "assets/icons/Arrow.svg";
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const Breadcrumbs: React.FC<IBreadcrumbs> = ({routes, currentRoutePathname, stepsPassed, className}) => {

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

  const breadcrumbLinkStyle = (item: IRoute) => {
    return classNames(styles.link, {
      [styles.current]: item.pathname === selectedRoute,
      [styles.passed]: item.index < stepsPassed
    })
  }

  return (
    <ul className={classNames(styles.ul, className)}>
      {
        sortedRoutes && 
        sortedRoutes.map((item) => (
          <li className={styles.list} key={item.name} >
            {
              item.index > stepsPassed + 1 ? (
                <span className={styles.span}>{t(item.name)}</span>
              )
              :
              <Link className={breadcrumbLinkStyle(item)} 
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

export default Breadcrumbs;