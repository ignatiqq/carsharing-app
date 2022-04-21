import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { orderSetPrice } from 'store/order/actions';
import { additionallyOptions } from 'constants/orderData';
import styles from "./OrderPrice.module.scss";
import { orderPriceByRate, orderAdditionallyPrice } from "utils/orderSum";
import { useLocation } from 'react-router-dom';

const OrderPrice = () => {

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const location = useLocation();

    const { orderData, currentCar, requestedOrderData } = useAppSelector(({order}) => ({
        orderData: order.data,
        currentCar: order.options.cars.current,
        requestedOrderData: order.getOrder.data
    }))

    const isRequestedOrder = location.pathname.split("/")[3];

    const priceLayout = (orderPrice: number) => `${t("Price")} ${orderPrice ? orderPrice : 0} ₽`;

    const totalPrice = useMemo(() => {
        if(orderData && currentCar) {

            if(orderData.dateFrom && orderData.dateTo && orderData.rateId) {
                const orderPrice = orderPriceByRate(orderData.dateTo - orderData.dateFrom, orderData.rateId.id) + orderAdditionallyPrice(orderData, additionallyOptions);
                dispatch(orderSetPrice(orderPrice ? orderPrice : 0))
                return `${t("Price")} ${orderPrice ? orderPrice : 0} ₽`;
            }
            return `${t("Price")} ${t("From")} ${currentCar.priceMin} ${t("To")} ${currentCar.priceMax} ₽`

        }
    }, [orderData, currentCar])

    return (
        <div className={styles.priceWrapper}>
           {isRequestedOrder && requestedOrderData?.price ? priceLayout(requestedOrderData?.price) : totalPrice}
        </div>
    )
}

export default OrderPrice;