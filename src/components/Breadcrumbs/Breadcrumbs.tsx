import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import type { IBreadcrumbs, IRoute } from "./types";
import styles from "./Breadcrumbs.module.scss";
import { ReactComponent as Arrow } from "assets/icons/Arrow.svg";
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const Breadcrumbs: React.FC<IBreadcrumbs> = React.memo(({
  routes, 
  currentRoutePathname, 
  stepsPassed, 
  className,
  orderId
}) => {

  const [sortedRoutes, setSortedRoutes] = React.useState<Array<IRoute> | null>(null);
  const [selectedRoute, setSelectedRoute] = React.useState<string | null>(null);

  const { t } = useTranslation();
  const { pathname } = useLocation();

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

  console.log(orderId)

  return (
    <ul className={classNames(styles.ul, className)}>
      {
        sortedRoutes && !orderId ?
        sortedRoutes.map((item) => (
          <li className={styles.list} key={item.name} >
            {
              item.index > stepsPassed ? (
                <span className={styles.span}>{t(item.name)}</span>
              )
              :
              <Link className={breadcrumbLinkStyle(item)} 
                to={item.pathname}
              >
                {t(item.name)}
              </Link>
            }
          </li>
        ))
        :
        orderId && typeof parseInt(pathname.split("/")[3]) === "number"
        &&
        <div className={styles.orderText}>Заказ номер {orderId}</div>
      }
    </ul>
  )
})

export default Breadcrumbs;