import React, {useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";

import type { IAllCarsData, ICarData, ICarsCategory } from "store/order/types";
import { orderSetCarId } from "store/order/actions";
import {getAllCarsData} from "store/order/actions";
import ModelView from "./ModelView";
import { setCurrentCar } from "store/order/actions";

const Model = () => {
    const dispatch = useAppDispatch();
    const [filteredCars, setFilteredCars] = useState<Array<ICarData> | null>(null);

    const { cars, currentCarId, currentCar } = useAppSelector(({order}) => ({
        cars: order.options.cars,
        currentCarId: order.data.carId,
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
        if(!cars.isLoading && !cars.data) {
            dispatch(getAllCarsData());
        }
    }, [])

    useEffect(() => {
        if(cars && cars.data) {
            setFilteredCars(cars.data.data)
        }
    }, [cars.data])

    const setCurrentCarModel = (data: ICarData) => {
        dispatch(setCurrentCar(data));
    }

    const filterCarsByCategoryId = (categoryId: string) => {
        if(filteredCars && cars && cars.data?.data) {
            console.log(categoryId)
            const filteredCarsData = cars.data.data.filter((item) => {
                if(categoryId !== "all") {
                    return item.categoryId.id === categoryId
                }
                return cars.data?.data
            })
            setFilteredCars(filteredCarsData)
        }
    }

    return (
        <ModelView 
            currentCarId={currentCarId && currentCarId.id}
            data={filteredCars} 
            isLoading={cars.isLoading} 
            error={cars.error} 
            categories={cars?.categories && cars?.categories?.data}
            setCurrentCarModel={setCurrentCarModel}
            filterCarsByCategoryId={filterCarsByCategoryId}
        />
    )

}

export default Model;