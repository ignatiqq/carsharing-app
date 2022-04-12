import React, { useEffect } from 'react'
import {useTranslation} from "react-i18next";

import type { ICarData, IAllCarsData } from "store/order/types";
import { setCurrentCar } from "store/order/actions";
import withModelLogic from "./withModelLogic";
import {CarCard, RadioInput, Loader} from "components";
import styles from "./Model.module.css";
import { useAppDispatch } from 'store/hooks';

export interface IModel {
    data: IAllCarsData | null,
    currentCarId: string | null,
    isLoading: boolean,
    error: string | null,
}

const Model: React.FC<IModel> = React.memo(({data, currentCarId, isLoading, error}) => {

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    if(isLoading) {
        const description = t("Wait until all car models are loaded")
        return (
            <div className={styles.carsLoading}>
                <Loader className={styles.loader} description={description} />
            </div>
        )
    }

    const setCurrentCarModel = (data: ICarData) => {
        dispatch(setCurrentCar(data));
    }

    return (
        <div className={styles.wrapper}>
            {
                data && data.data ?
                    data.data.map(item => (
                        <CarCard
                            currentCarId={currentCarId}
                            key={item.id}
                            onClick={(item) => setCurrentCarModel(item)}
                            car={item}
                        />
                    ))
                    :
                    error &&
                <div>{t(error)}</div>
            }
        </div>
    )
});

export default withModelLogic(Model);