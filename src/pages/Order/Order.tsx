import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from 'store/hooks';

import { allOrderSteps } from 'constants/allOrderSteps';
import { isStepAvaliable } from 'utils/isStepAvaliable';
import { Header, Breadcrumbs, OrderInfo } from 'components';
import { routes } from 'routes/order';
import styles from "./Order.module.scss";


const Order = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { stepsPassed } = useAppSelector(({order}) => ({
    stepsPassed: order.stepsPassed
  }))

  useEffect(() => {
    const isRequestedStepAvaliable = isStepAvaliable({allOrderSteps, currentStep: stepsPassed, requestedStepPathname: pathname});
    if(!isRequestedStepAvaliable) {
      const avaliableStep = allOrderSteps.find(item => item.step === stepsPassed);
        navigate(avaliableStep!.pathname)
    }
  }, [pathname])

  return (
    <section className={styles.section}>
      <Header className={styles.paddingContainer} />
      <div className={classNames(styles.breadcrumbsContainer)}>
        <Breadcrumbs
          routes={routes}
          currentRoutePathname={pathname}
          stepsPassed={stepsPassed}
          className={styles.paddingContainer}
        />
      </div>
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