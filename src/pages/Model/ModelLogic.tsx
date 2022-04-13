import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";

import type { ICarData } from "store/order/types";
import { orderSetCarId } from "store/order/actions";
import {getAllCarsData} from "store/order/actions";
import ModelView from "./ModelView";
import { setCurrentCar } from "store/order/actions";

const Model = () => {
    const dispatch = useAppDispatch();

    const { cars, currentCarId, currentCar } = useAppSelector(({order}) => ({
        cars: order.options.cars,
        currentCarId: order.data.carId,
        currentCar: order.options.cars.current
    }))

    useEffect(() => {
        if(!cars.isLoading && !cars.data) {
            dispatch(getAllCarsData());
        }
    }, [])

    useEffect(() => {
        if(currentCar) {
            dispatch(orderSetCarId({
                id: currentCar.id,
                value: currentCar.name
            }))
        }
    }, [currentCar])

    const setCurrentCarModel = (data: ICarData) => {
        dispatch(setCurrentCar(data));
    }

    return (
        <ModelView 
            currentCarId={currentCarId && currentCarId.id}
            data={cars.data} 
            isLoading={cars.isLoading} 
            error={cars.error} 
            categories={cars?.categories && cars?.categories?.data}
            setCurrentCarModel={setCurrentCarModel}
        />
    )

}

export default Model;