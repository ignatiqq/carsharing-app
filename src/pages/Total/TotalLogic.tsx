import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getOrderDataById } from 'store/order/actions';
import { ICarData } from 'store/order/types';
import Total from "./Total";

const TotalLogic = () => {

    const dispatch = useAppDispatch();
    const location = useLocation();

    const { requestedData, currentCar, avaliableRentDate, requestedOrderLoading } = useAppSelector(({order}) => ({
        currentCar: order.options.cars.current,
        avaliableRentDate: order.data.dateFrom,
        requestedData: order.getOrder.data,
        requestedOrderLoading: order.getOrder.loading
    }))

    useEffect(() => {
        if(!requestedData && location) {
            const requestedOrderId = location.pathname.split("/")[3];
            dispatch(getOrderDataById(requestedOrderId));
        }
    }, [requestedData, location])

    const currentCarProp = (requestedData ? requestedData.carId : currentCar) as ICarData | null
    const avaliableRentDateProp = requestedData?.dateFrom ? requestedData.dateFrom : avaliableRentDate

    return (
        <Total 
            currentCar={currentCarProp} 
            avaliableRentDate={avaliableRentDateProp}
            requestedOrderLoading={requestedOrderLoading}
        />
    )
}

export default TotalLogic;