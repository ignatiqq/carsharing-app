import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import type { ICurrentCity } from "store/location/cities/types";
import CitySelector from './CitySelector';
import { getAllCities, setCurrentCity } from "store/location/cities/actions";

export interface ICurrentCityComponent {
    currentCity: ICurrentCity | null
}

const CitySelectorLogic = () => {

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
        if(allCities?.data) {
            dispatch(setCurrentCity(allCities.data[0]))
        }
    }, [allCities])

    const currentCityCondition = currentCity ? currentCity : allCities && allCities.data && allCities.data[0]

    return (
        <CitySelector currentCity={currentCityCondition} />
    )
}

export default CitySelectorLogic;