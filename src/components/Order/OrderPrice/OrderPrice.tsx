import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';

import { additionallyOptions } from 'constants/orderData';
import styles from "./OrderPrice.module.scss";
import { orderPriceByRate } from "utils/orderSum";

const OrderPrice = () => {

    const { t } = useTranslation();

    const { orderData, currentCar } = useAppSelector(({order}) => ({
        orderData: order.data,
        currentCar: order.options.cars.current
    }))

    const totalPrice = useMemo(() => {
        if(orderData && currentCar) {

            if(orderData.dateFrom && orderData.dateTo && orderData.rateId) {
                return `${t("Price")} ${orderPriceByRate(orderData.dateTo - orderData.dateFrom, orderData.rateId.id)} ₽`;
            }
            return `${t("Price")} ${t("From")} ${currentCar.priceMin} ${t("To")} ${currentCar.priceMax} ₽`

        }
    }, [orderData, currentCar])

    return (
        <div className={styles.priceWrapper}>
           {totalPrice}
        </div>
    )
}

export default OrderPrice;