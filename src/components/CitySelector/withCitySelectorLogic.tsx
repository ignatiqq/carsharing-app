import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import type { ICurrentCity } from "store/location/cities/types";
import { getAllCities, setCurrentCity } from "store/location/cities/actions";
import { orderInfo } from 'constants/localStorageKeys';

export interface IComponent {
    currentCity: ICurrentCity | null
}

const withCitySelectorLogic = (Component: React.FC<IComponent>) => () => {

    const dispatch = useAppDispatch();

    const { currentCity, allCities } = useAppSelector(({location, order}) => ({
        currentCity: location.cities.current,
        allCities: location.cities.all,
        currentOrderCity: order.data.cityId
    }))

    useEffect(() => {
        dispatch(getAllCities())
    }, [])

    useEffect(() => {
        if(allCities && allCities.data) {
            const orderDataFromLocalStorage = localStorage.getItem(orderInfo);
            
            if(orderDataFromLocalStorage) {
                const parsedOrderData = JSON.parse(orderDataFromLocalStorage);
                if(parsedOrderData.cityId) {
                    dispatch(setCurrentCity({id: parsedOrderData.cityId.id, name: parsedOrderData.cityId.value}))
                } else {
                    dispatch(setCurrentCity(allCities.data[0]))
                }
            } else {
                dispatch(setCurrentCity(allCities.data[0]))
            }
        }
    }, [allCities])

    const currentCityCondition = currentCity ? currentCity : allCities && allCities.data && allCities.data[0]

    return (
        <Component currentCity={currentCityCondition} />
    )
}

export default withCitySelectorLogic