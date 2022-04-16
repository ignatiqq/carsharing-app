import React from 'react'
import { useTranslation } from 'react-i18next';

import { CheckboxInput } from 'components';
import { additionallyOptions, IAdditionallyOptions } from "constants/orderData";
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
            <div>{t("Additional services")}</div>
            <div>
                {
                    additionallyOptions &&
                    additionallyOptions.map(item => (
                        <CheckboxInput 
                            key={item.label}
                            label={t(item.label)}
                            value={item.label}
                            id={item.label}
                            name="additionally-option"
                            selected={orderData[item.label as keyof IOrderData] === true}
                            onChange={(value) => setAdditionallyOption(value)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default AdditionallyPicker;