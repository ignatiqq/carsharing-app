import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";

import { orderSetCarId } from "store/order/actions";
import {getAllCarsData} from "store/order/actions";
import { IModel } from "./Model";

const withModelLogic = (Component: React.FC<IModel>) => () => {
    const dispatch = useAppDispatch();

    const { cars } = useAppSelector(({order}) => ({
        cars: order.options.cars,
        currentCar: order.options.cars.current
    }))

    useEffect(() => {
        if(!cars.isLoading && !cars.data) {
            dispatch(getAllCarsData());
        }
    }, [])

    const { currentCar } = useAppSelector(({order}) => ({
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


    return (
        <Component 
            data={cars.data} 
            isLoading={cars.isLoading} 
            error={cars.error} 
        />
    )

}

export default withModelLogic;