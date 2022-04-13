import React, { useEffect } from 'react'
import {useTranslation} from "react-i18next";

import type { IAllCarsData, ICarData } from "store/order/types";
import {CarCard, RadioInput, Loader} from "components";
import styles from "./Model.module.css";

export interface IModel {
    data: IAllCarsData | null,
    currentCarId: string | null,
    isLoading: boolean,
    error: string | null,
    setCurrentCarModel: (data: ICarData) => void
}

const ModelView: React.FC<IModel> = React.memo(({data, currentCarId, isLoading, error, setCurrentCarModel}) => {

    const { t } = useTranslation();

    if(isLoading) {
        const description = t("Wait until all car models are loaded")
        return (
            <div className={styles.carsLoading}>
                <Loader className={styles.loader} description={description} />
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <RadioInput label='hello' value='world' id="123" name="hello-world" />
            </div>
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

export default ModelView;