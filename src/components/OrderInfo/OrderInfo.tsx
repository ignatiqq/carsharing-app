import Button from 'components/Button/Button';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { setOrderStepsPassed } from "store/order/actions";
import { OrderPrice } from "components";
import { getOrderInfoData, IOrderInfoData } from "utils/getOrderInfo";
import type { IOrderData } from 'store/order/types';
import styles from "./OrderInfo.module.scss";
import classNames from 'classnames';


const getCurrentButtonOptions = (pathname: string, order: IOrderData) => {
    switch(pathname) {
        case "/order/location": {
            return {
                nextPagePathname: "/order/model",
                disabled: !order.cityId || !order.pointId,
                name: "Choose model",
                nextStep: 1
            }
        }

        case "/order/model": {
            return {
                nextPagePathname: "/order/additionality",
                disabled: !order.carId,
                name: "Additionality",
                nextStep: 2
            }
        }
    }
}

interface IButtonOptions {
    nextPagePathname: string,
    disabled: boolean,
    name: string,
    nextStep: number
}

const OrderInfo = () => {
    const [buttonOptions, setButtonOptions] = useState<IButtonOptions | null | undefined>(null);
    const [orderInfo, setOrderInfo] = useState<Array<IOrderInfoData> | null>(null);

    const {t} = useTranslation();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const { orderData } = useAppSelector(({order}) => ({
        orderData: order.data
    }))

    useEffect(() => {
        setButtonOptions(getCurrentButtonOptions(location.pathname, orderData));
        setOrderInfo(getOrderInfoData(orderData));
    }, [location.pathname, orderData])

    function setPassedSteps(data:number | undefined) {
        if(data) {
            dispatch(setOrderStepsPassed(data))
        }
    }

    const nextBtnPathname = buttonOptions && !buttonOptions.disabled ? buttonOptions.nextPagePathname : location.pathname;

    return (
        <div className={styles.wrapper}>
            <div className={styles.position}>
            <div className={styles.title}>{t("Your order")}:</div>
                <div className={styles.optionsWrapper}>
                    {
                        orderInfo && orderInfo.length > 0 ?
                            orderInfo.map(item => 
                                item.value && (
                                <div className={styles.orderInfoItemWrapper} key={item.label}>
                                    <div className={styles.optionName}>
                                        {t(item.label)}
                                    </div>
                                    <div className={styles.optionSeparator} />
                                    <div className={styles.optionValue}>
                                        {item.value}
                                    </div>
                                </div>
                            ))
                            :
                            <div>Здесь будут ваши данные о заказе</div>
                    }
                </div>
                <OrderPrice />
                <div className={styles.nextBtnWrapper}>
                    <Link
                        onClick={() => setPassedSteps(buttonOptions?.nextStep)}
                        style={{color: "#FFFFFF"}}
                        to={!buttonOptions?.disabled ? nextBtnPathname : window.location.pathname}
                        className={classNames(styles.nextBtn, {
                            [styles.nextBtnDisabled]: buttonOptions?.disabled
                        })}
                    >
                        {buttonOptions && t(buttonOptions.name)}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderInfo;