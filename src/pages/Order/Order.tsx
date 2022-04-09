import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { Header, Breadcrumps, OrderInfo } from 'components';
import { routes } from 'routes/order';
import styles from "./Order.module.css";
import { useAppSelector } from 'store/hooks';
import { orderInfo } from 'constants/localStorageKeys';
import isEqual from 'lodash.isequal';


const Order = () => {

  const { pathname } = useLocation();

  const { order } = useAppSelector(({order}) => ({
    order: order
  }))

  useEffect(() => {
    localStorage.setItem(orderInfo, JSON.stringify(order));
  }, [order])

  return (
    <section className={styles.section}>
      <Header />
      <hr></hr>
      <div className={classNames(styles.breadcrumpsContainer, styles.container)}>
        <Breadcrumps routes={routes} currentRoutePathname={pathname} stepsPassed={0} />
      </div>
      <hr></hr>
      <div className={classNames(styles.contentWrapper, styles.container)}>
        <div className={styles.container}>
            <Outlet />
        </div>
        <OrderInfo />
      </div>
    </section>
  );
}

export default Order;