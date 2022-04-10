import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {getAllCarsData} from "store/order/actions";
import {ICarOption} from "store/order/types";

const withModelLogic = (Component: React.FC<ICarOption>) => () => {
    const dispatch = useAppDispatch();

    const { cars } = useAppSelector(({order}) => ({
        cars: order.options.cars
    }))

    useEffect(() => {
        if(!cars.isLoading && !cars.data) {
            dispatch(getAllCarsData());
        }
    }, [])

    return <Component {...cars} />

}

export default withModelLogic;