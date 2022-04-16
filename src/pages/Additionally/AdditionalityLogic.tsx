import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import AdditionalityView from './AdditionallyView'; 
import { getOrderRates } from 'store/order/actions';

const Additionality = () => {

    const dispatch = useAppDispatch();
    
    const { isLoading, currentCar, orderData, ratesData } = useAppSelector(({order}) => ({
        isLoading: order.options.rates.isLoading,
        currentCar: order.options.cars.current,
        ratesData: order.options.rates.data,
        orderData: order.data
    }))

    useEffect(() => {
        dispatch(getOrderRates())
    }, [])

    return (
        <AdditionalityView 
            isLoading={isLoading} 
            currentCar={currentCar}
            orderData={orderData}
            ratesData={ratesData}
        />
    )
}

export default Additionality;