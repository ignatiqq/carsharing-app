import React, { useMemo } from 'react';

import styles from "./OrderPrice.module.scss";
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';
import { ICarData, IOrderData } from 'store/order/types';

const OrderPrice = () => {

    const { t } = useTranslation();

    const { orderData, currentCar } = useAppSelector(({order}) => ({
        orderData: order.data,
        currentCar: order.options.cars.current
    }))

    const totalPrice = useMemo(() => {
        if(orderData && currentCar) {

            if(orderData.dateFrom && orderData.dateTo) {
                return
            }
            return `${t("Price")} ${t("From")} ${currentCar.priceMin} ${t("To")} ${currentCar.priceMax}  ₽`

        }
    }, [orderData, currentCar])

    return (
        <div className={styles.priceWrapper}>
           {totalPrice}
        </div>
    )
}

export default OrderPrice;