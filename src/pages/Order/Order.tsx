import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header, Breadcrumps } from 'components';
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
      <section className={styles.container}>
        <Header />
        <Breadcrumps 
            routes={routes}
            currentRoutePathname={pathname}
            stepsPassed={0}
        />
        <Outlet />
      </section>
  )
}

export default Order;