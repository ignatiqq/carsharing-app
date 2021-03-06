import React, { useEffect } from 'react';
import { batch } from 'react-redux';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import AdditionalityView from './AdditionallyView'; 
import { converteDateToSeconds } from 'utils/dateFormatter';
import { 
    getOrderRates, 
    orderSetColor, 
    orderSetDateFrom, 
    orderSetDateTo, 
    setAdditionallyBooleanOption,
    orderSetRateId
} from 'store/order/actions';

const Additionality = () => {

    const dispatch = useAppDispatch();
    
    const { isLoading, currentCar, orderData, ratesData } = useAppSelector(({order}) => ({
        isLoading: order.options.rates.isLoading,
        currentCar: order.options.cars.current,
        ratesData: order.options.rates.data,
        orderData: order.data
    }))

    useEffect(() => {
        if(!ratesData) {
            dispatch(getOrderRates())
        }
    }, [ratesData])

    const setAdditionallyOption = (value: string) => {
        dispatch(setAdditionallyBooleanOption(value))
    }

    const pickDate = (startDate: Date, endDate: Date) => {
        const endDateSeconds = converteDateToSeconds(endDate);
        const startDateSeconds = converteDateToSeconds(startDate);
        if(endDateSeconds - startDateSeconds > 0) {
            batch(() => {
                dispatch(orderSetDateFrom(startDateSeconds))
                dispatch(orderSetDateTo(endDateSeconds))
            })
        }
    }

    const setColorOption = (color: string) => {
        dispatch(orderSetColor(color))
    }

    const setRateOption = (rateId: string) => {
        const selectedRate = ratesData!.data.filter(item => item.rateTypeId.id === rateId)[0];
        if(selectedRate) {
            dispatch(orderSetRateId({id: selectedRate.rateTypeId.id, name: selectedRate.rateTypeId.name}))
        }
    }

    return (
        <AdditionalityView 
            isLoading={isLoading} 
            currentCar={currentCar}
            orderData={orderData}
            ratesData={ratesData}
            setAdditionallyOption={setAdditionallyOption}
            pickDate={pickDate}
            setColorOption={setColorOption}
            setRateOption={setRateOption}
        />
    )
}

export default Additionality;