import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { Header, Breadcrumps, OrderInfo } from 'components';
import styles from "./Order.module.css";
import type { IRoute } from 'components/Breadcrumps/types';

const routes: Array<IRoute> = [
    {
        index: 0,
        pathname: "/order/location",
        name: "Location"
    },
    {
        index: 1,
        pathname: "/order/model",
        name: "Model"
    },
    {
        index: 2,
        pathname: "/order/additionally",
        name: "Additionally"
    },
    {
        index: 3,
        pathname: "/order/total",
        name: "Total"
    }
]

const Order = () => {

  const { pathname } = useLocation()

  return (
    <section className={styles.section}>
      <Header />
      <hr></hr>
      <div className={styles.breadcrumpsContainer}>
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