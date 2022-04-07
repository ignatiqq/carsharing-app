import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import isEqual from "lodash.isequal";

import { Header, Breadcrumps, OrderInfo } from 'components';
import { routes } from 'routes/order';
import styles from "./Order.module.css";
import type { IOrder } from 'store/order/types';
import { orderInfo } from 'constants/localStorageKeys';
import { setOrderData } from 'store/order/actions';


const Order = () => {

  const { pathname } = useLocation();

  const { order } = useAppSelector(({order}) => ({
    order: order
  }))

  useEffect(() => {
    const orderInfoFromStorage = localStorage.getItem(orderInfo);
    const parsedOrderInfo = orderInfoFromStorage && JSON.parse(orderInfoFromStorage);

    if(parsedOrderInfo && !isEqual(order, parsedOrderInfo)) {
      setOrderInfoToLocalStorage(order)
    }

  }, [order])

  const setOrderInfoToLocalStorage = (data: IOrder) => {
    localStorage.setItem(orderInfo, JSON.stringify(data))
  }

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