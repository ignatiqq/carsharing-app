import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";
import { batch } from "react-redux";

import type { IAllCarsData, ICarData, ICarsCategory } from "store/order/types";
import { orderSetCarId, orderSetColor } from "store/order/actions";
import {getAllCarsData} from "store/order/actions";
import ModelView from "./ModelView";
import { setCurrentCar } from "store/order/actions";

const Model = () => {
    const dispatch = useAppDispatch();
    const [filteredCars, setFilteredCars] = useState<Array<ICarData> | null>(null);
    const [currentCategory, setCurrentCategory] = useState<string>("all");

    const { carsData, isLoading, error, categories, currentCar } = useAppSelector(({order}) => ({
        carsData: order.options.cars.data,
        isLoading: order.options.cars.isLoading,
        error: order.options.cars.error,
        categories: order.options.cars.categories,
        currentCar: order.options.cars.current
    }))

    useEffect(() => {
        if(currentCar) {
            dispatch(orderSetCarId({
                id: currentCar.id,
                value: currentCar.name
            }))
        }
    }, [currentCar])

    useEffect(() => {
        if(!isLoading && !carsData) {
            dispatch(getAllCarsData());
        }
    }, [])

    useEffect(() => {
        if(carsData) {
            setFilteredCars(carsData.data)
        }
    }, [carsData])

    const setCurrentCarModel = useCallback((data: ICarData) => {
        batch(() => {
            dispatch(setCurrentCar(data));
            dispatch(orderSetColor(""));
        })
    }, [])

    const filterCarsByCategoryId = useCallback((categoryId: string) => {
        setCurrentCategory(categoryId);
        if(filteredCars && carsData?.data) {
            const filteredCarsData = carsData.data.filter((item) => {
                if(categoryId !== "all") {
                    return item.categoryId.id === categoryId
                }
                return carsData?.data
            })
            setFilteredCars(filteredCarsData)
        }
    }, [filteredCars])


    return (
        <ModelView 
            data={filteredCars} 
            isLoading={isLoading}
            error={error}
            categories={categories && categories.data}
            currentCategory={currentCategory}
            currentCarId={currentCar && currentCar.id}
            setCurrentCarModel={setCurrentCarModel}
            filterCarsByCategoryId={filterCarsByCategoryId}
        />
    )

}

export default Model;