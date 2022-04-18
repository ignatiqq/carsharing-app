import React from 'react';
import { useAppSelector } from 'store/hooks';
import { formatDateByLanguage } from 'utils/dateFormatter';

import styles from "./Total.module.scss";

const Total = () => {

    const { currentCar, avaliableRentDate } = useAppSelector(({order}) => ({
        currentCar: order.options.cars.current,
        avaliableRentDate: order.data.dateFrom
    }))

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContent}>
                <div className={styles.carText}>
                    <div className={styles.carName}>{currentCar && currentCar.name}</div>
                    <div>{currentCar?.number}</div>
                    <div>
                        <span className={styles.carTextBold}>Топливо</span>
                        <span className={styles.carTextLight}> {currentCar?.tank}%</span>
                    </div>
                    <div>
                        <span className={styles.carTextBold}>Доступна с</span>
                        <span className={styles.carTextLight}> {avaliableRentDate && formatDateByLanguage(new Date(avaliableRentDate * 1000), "Pp")}</span>
                    </div>
                </div>
                <div>
                    car
                </div>
            </div>
        </div>
    )
}

export default Total;