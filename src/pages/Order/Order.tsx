import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { Header, Breadcrumps, OrderInfo } from 'components';
import { routes } from 'routes/order';
import styles from "./Order.module.css";


const Order = () => {

  const { pathname } = useLocation();

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