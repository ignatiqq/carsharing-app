import React from 'react'
import {useTranslation} from "react-i18next";

import {ICarOption} from "store/order/types";
import withModelLogic from "./withModelLogic";
import {CarCard, RadioInput, Loader} from "components";
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
            <RadioInput name="car-category" label="Hello" id="hi" value="World" />
            {
                data && data.data ?
                    data.data.map(item => (
                        <CarCard
                            key={item.id}
                            onClick={(item) => console.log(item)}
                            car={item}
                        />
                    ))
                    :
                    error &&
                    <div>{t(error)}</div>
            }
        </div>
    )
}

export default withModelLogic(Model);