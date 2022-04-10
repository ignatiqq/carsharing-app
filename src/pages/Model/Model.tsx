import React from 'react'
import {useTranslation} from "react-i18next";

import { Loader } from "components";
import {ICarOption} from "store/order/types";
import withModelLogic from "./withModelLogic";
import { CarCard } from "../../components";
import styles from "./Model.module.css";

const Model = ({data, isLoading, error}: ICarOption) => {

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
            {
                data && data.data ?
                    data.data.map(item => (
                        <CarCard
                            onClick={(item) => console.log(item)}
                            car={item}
                        />
                    ))
                    :
                    error &&
                    <div></div>
            }
        </div>
    )
}

export default withModelLogic(Model);