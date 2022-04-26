import React from 'react'
import { useTranslation } from 'react-i18next';

import { CheckboxInput } from 'components';
import { additionallyOptions } from "constants/orderData";
import styles from "./AdditionallyPicker.module.scss";
import type { IOrderData } from 'store/order/types';

interface IAdditionallyPicker {
    orderData: IOrderData,
    setAdditionallyOption: (data: string) => void
}

const AdditionallyPicker: React.FC<IAdditionallyPicker> = ({ orderData, setAdditionallyOption }) => {

    const { t } = useTranslation(); 

    return (
        <div className={styles.wrapper}>
            <div className={styles.additionallyText}>{t("Additional services")}</div>
            <div className={styles.additionallyWrapper}>
                {
                    additionallyOptions &&
                    additionallyOptions.map(item => (
                        <CheckboxInput 
                            key={item.label}
                            label={`${t(item.label)}, ${item.price}р`}
                            value={item.label}
                            id={item.label}
                            name="additionally-option"
                            selected={orderData[item.label as keyof IOrderData] === true}
                            onChange={setAdditionallyOption}
                            className={styles.additionallyCheckbox}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default AdditionallyPicker;