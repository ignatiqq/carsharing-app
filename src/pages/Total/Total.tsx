import React from 'react';
import { useAppSelector } from 'store/hooks';

import { formatDateByLanguage } from 'utils/dateFormatter';
import { carNumberFormatter } from "utils/carNumber";
import styles from "./Total.module.scss";
import { useTranslation } from 'react-i18next';

const Total = () => {

    const { currentCar, avaliableRentDate, orderId } = useAppSelector(({order}) => ({
        currentCar: order.options.cars.current,
        avaliableRentDate: order.data.dateFrom,
        orderId: order.id
    }))

    const { t } = useTranslation();

    const carNumber = currentCar?.number && carNumberFormatter(currentCar?.number) ? carNumberFormatter(currentCar?.number) : t("Number not recognized");

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperContent}>
                <div className={styles.carText}>
                    <div className={styles.orderConfirmed}>{orderId && "Ваш заказ подтвержден"}</div>
                    <div className={styles.carName}>{currentCar && currentCar.name}</div>
                    <span className={styles.carNumber}>{carNumber.toUpperCase()}</span>
                    <div className={styles.carTank}>
                        <span className={styles.carTextBold}>{t("Fuel")}</span>
                        <span className={styles.carTextLight}> {currentCar?.tank}%</span>
                    </div>
                    <div>
                        <span className={styles.carTextBold}>{t("Available from")}</span>
                        <span className={styles.carTextLight}> {avaliableRentDate && formatDateByLanguage(new Date(avaliableRentDate * 1000), "Pp")}</span>
                    </div>
                </div>
                <div>
                    <img className={styles.carImage} src={currentCar?.thumbnail.path} alt={currentCar?.name} />
                </div>
            </div>
        </div>
    )
}

export default Total;