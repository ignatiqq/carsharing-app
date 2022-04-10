import React from 'react'
import {useTranslation} from "react-i18next";

import { Loader } from "components";
import {ICarOption} from "store/order/types";
import withModelLogic from "./withModelLogic";
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
                data && data.data[0].id
            }
        </div>
    )
}

export default withModelLogic(Model);