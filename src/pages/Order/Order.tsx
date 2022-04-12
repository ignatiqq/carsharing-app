import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { Header, Breadcrumbs, OrderInfo } from 'components';
import { routes } from 'routes/order';
import styles from "./Order.module.scss";
import { useAppSelector } from 'store/hooks';
import { orderInfo } from 'constants/localStorageKeys';


const Order = () => {

  const { pathname } = useLocation();

  const { order } = useAppSelector(({order}) => ({
    order: order
  }))

  useEffect(() => {
    localStorage.setItem(orderInfo, JSON.stringify(order.data));
  }, [order])

  return (
    <section className={styles.section}>
      <Header className={styles.paddingContainer} />
      <hr></hr>
      <div className={classNames(styles.breadcrumbsContainer)}>
        <Breadcrumbs 
          routes={routes} 
          currentRoutePathname={pathname} 
          stepsPassed={0} 
          className={styles.paddingContainer}
        />
      </div>
      <hr></hr>
      <div className={classNames(styles.contentWrapper, styles.paddingContainer)}>
        <div className={styles.container}>
            <Outlet />
        </div>
        <OrderInfo />
      </div>
    </section>
  );
}

export default Order;