import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";

import { orderSetCarId } from "store/order/actions";
import {getAllCarsData} from "store/order/actions";
import ModelView from "./ModelView";

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

    return (
        <ModelView 
            currentCarId={currentCarId && currentCarId.id}
            data={cars.data} 
            isLoading={cars.isLoading} 
            error={cars.error} 
        />
    )

}

export default Model;