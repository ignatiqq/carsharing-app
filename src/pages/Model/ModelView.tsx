import React, { useEffect } from 'react'
import {useTranslation} from "react-i18next";

import type { IAllCarsData, ICarData, ICarOption, ICarsCategory } from "store/order/types";
import {CarCard, RadioInput, Loader} from "components";
import styles from "./Model.module.scss";

export interface IModel {
    data: Array<ICarData> | null,
    isLoading: boolean,
    error: string | null,
    categories: Array<ICarsCategory> | null,
    currentCategory: string | null,
    currentCarId: string | null,
    filterCarsByCategoryId: (data: string) => void,
    setCurrentCarModel: (data: ICarData) => void,
}


const ModelView: React.FC<IModel> = React.memo(({data, isLoading, error, currentCarId, categories, currentCategory, filterCarsByCategoryId, setCurrentCarModel}) => {

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
                    onChange={(item) => filterCarsByCategoryId(item)}
                    className={styles.radioInput}
                    label={t("All")} 
                    value={"all"} 
                    id="all" 
                    name="car-type" 
                    selected={currentCategory}
                />
                {
                    categories && categories.length > 0 &&
                    categories.map(item => (
                        <RadioInput 
                            onChange={(item) => filterCarsByCategoryId(item)}
                            key={item.id} 
                            label={t(item.name)} 
                            value={item.id} 
                            id={item.id} 
                            selected={currentCategory}
                            className={styles.radioInput}
                            name="car-type" 
                        />
                    ))
                }
            </div>
            <div className={styles.carCardWrapper}>
            {
                data ?
                    data.map(item => (
                        <CarCard
                            currentCarId={currentCarId}
                            key={item.id}
                            onClick={(item) => setCurrentCarModel(item)}
                            car={item}
                        />
                    ))
                    :
                    error &&
                <div className={styles.error}>{t(error)}</div>
            }
            </div>
        </div>
    )
});

export default ModelView;