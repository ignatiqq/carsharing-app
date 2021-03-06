import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getOrderDataById } from 'store/order/actions';
import { ICarData } from 'store/order/types';
import Total from "./Total";
import styles from "./Total.module.scss";

const TotalLogic = () => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const { 
        requestedData, 
        requestedDataError, 
        currentCar, 
        avaliableRentDate, 
        requestedOrderLoading, 
        orderId,
        orderFullTank
    } = useAppSelector(({order}) => ({
        currentCar: order.options.cars.current,
        avaliableRentDate: order.data.dateFrom,
        requestedData: order.getOrder.data,
        requestedDataError: order.getOrder.error,
        requestedOrderLoading: order.getOrder.loading,
        orderId: order.id,
        orderFullTank: order.data.isFullTank
    }))

    const requestedOrderId = location.pathname.split("/")[3];

    useEffect(() => {
        if(!requestedData && requestedOrderId && !orderId) {
            dispatch(getOrderDataById(requestedOrderId));
        }
    }, [requestedData, location])

    const currentCarProp = (requestedData ? requestedData.carId : currentCar) as ICarData | null
    const avaliableRentDateProp = requestedData?.dateFrom ? requestedData.dateFrom : avaliableRentDate
    const isFullTank = requestedData?.isFullTank ? requestedData.isFullTank : orderFullTank

    if(!orderId && requestedOrderId && requestedDataError) {
        return <div className={styles.orderByIdError}>{t(requestedDataError)}</div>
    }

    return (
        <Total 
            currentCar={currentCarProp}
            avaliableRentDate={avaliableRentDateProp}
            requestedOrderLoading={requestedOrderLoading}
            isFullTank={isFullTank}
        />
    )
}

export default TotalLogic;