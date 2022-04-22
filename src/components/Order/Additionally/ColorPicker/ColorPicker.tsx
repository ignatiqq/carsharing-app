import React from 'react';

import { RadioInput } from 'components';
import type { ICarData, IOrderObject } from 'store/order/types';
import styles from "./ColorPicker.module.scss";
import { useTranslation } from 'react-i18next';

interface IColorPicker {
    color: string,
    currentCar: ICarData | null,
    setColorOption: (color: string) => void
}

const ColorPicker: React.FC<IColorPicker> = React.memo(({color, currentCar, setColorOption}) => {

    const { t } = useTranslation();

    return (
        <div className={styles.colorWrapper}>
            <div className={styles.colorText}>{t("Color")}:</div>
            <div>
                <RadioInput 
                    label={t("Any")}
                    value={currentCar ? currentCar.colors[Math.round(Math.random() * currentCar?.colors.length)] : "any"}
                    id="any"
                    name='additionally-color'
                    className={styles.colorSelect}
                    selected={color && color}
                    onChange={setColorOption}
                    />
                    {
                    currentCar?.colors &&
                    currentCar.colors.map(item => (
                        <RadioInput 
                            key={item}
                            label={t(item.toLocaleLowerCase())}
                            value={item}
                            id={item}
                            name='additionally-color'
                            className={styles.colorSelect}
                            selected={color && color}
                            onChange={setColorOption}
                        />
                    ))
                    }
            </div>      
        </div> 
    )
})

export default ColorPicker;