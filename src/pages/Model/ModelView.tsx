import React from 'react'
import {useTranslation} from "react-i18next";

import type { IAllCarsData, ICarData, ICarsCategory } from "store/order/types";
import {CarCard, RadioInput, Loader} from "components";
import styles from "./Model.module.scss";

export interface IModel {
    data: IAllCarsData | null,
    currentCarId: string | null,
    isLoading: boolean,
    error: string | null,
    categories: Array<ICarsCategory> | null,
    setCurrentCarModel: (data: ICarData) => void
}

const ModelView: React.FC<IModel> = React.memo(({data, currentCarId, isLoading, error, categories, setCurrentCarModel}) => {

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
                <RadioInput 
                    className={styles.radioInput}
                    label={t("All")} 
                    value={"All"} 
                    id={"all-type"} 
                    name="car-type" 
                    
                />
                {
                    categories && categories.length > 0 &&
                    categories.map(item => (
                        <RadioInput 
                            key={item.id} 
                            label={item.name} 
                            value={item.id} 
                            id={item.id} 
                            className={styles.radioInput}
                            name="car-type" 
                        />
                    ))
                }
            </div>
            <div className={styles.carCardWrapper}>
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
        </div>
    )
});

export default ModelView;