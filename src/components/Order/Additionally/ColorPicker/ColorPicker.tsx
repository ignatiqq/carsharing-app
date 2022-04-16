import React from 'react';

import { RadioInput } from 'components';
import type { ICarData, IOrderObject } from 'store/order/types';
import styles from "./ColorPicker.module.scss";
import { useTranslation } from 'react-i18next';

interface IColorPicker {
    color: IOrderObject | null,
    currentCar: ICarData | null
}

const ColorPicker: React.FC<IColorPicker> = React.memo(({color, currentCar}) => {

    const { t } = useTranslation();

    return (
        <div className={styles.colorWrapper}>
            <div className={styles.colorText}>{t("Color")}:</div>
            <div>
                <RadioInput 
                    label={t("Any")}
                    value="Any"
                    id="any"
                    name='additionally-color'
                    className={styles.colorSelect}
                    selected={color && color.value}
                    onClick={(item) => console.log(item)}
                    />
                    {
                    currentCar?.colors &&
                    currentCar.colors.map(item => (
                        <RadioInput 
                            key={item}
                            label={t(item)}
                            value={item}
                            id={item}
                            name='additionally-color'
                            className={styles.colorSelect}
                            selected={color && color.value}
                            onClick={(item) => console.log(item)}
                        />
                    ))
                    }
            </div>      
        </div> 
    )
})

export default ColorPicker;