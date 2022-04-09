import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import type { ICurrentCity } from "store/location/cities/types";
import { getAllCities } from "store/location/cities/actions";

export interface IComponent {
    currentCity: ICurrentCity | null
}

const withCitySelectorLogic = (Component: React.FC<IComponent>) => () => {

    const dispatch = useAppDispatch();

    const { currentCity, allCities } = useAppSelector(({location}) => ({
        currentCity: location.cities.current,
        allCities: location.cities.all
    }))

    useEffect(() => {
        dispatch(getAllCities())
    }, [])

    const currentCityCondition = currentCity ? currentCity : allCities && allCities.data && allCities.data[0]

    return (
        <Component currentCity={currentCityCondition} />
    )
}

export default withCitySelectorLogic