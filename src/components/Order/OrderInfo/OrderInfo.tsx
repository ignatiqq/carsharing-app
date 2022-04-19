import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import classNames from 'classnames';

import { getCurrentButtonOptions } from './getCurrentButtonOptions';
import { sendOrderData, setOrderStepsPassed } from "store/order/actions";
import { OrderPrice } from "components";
import { getOrderInfoData, IOrderInfoData } from "utils/getOrderInfo";
import styles from "./OrderInfo.module.scss";
import { Button, ModalStandart, ModalStandartBlank } from 'components';
import OrderInfoItem from "./OrderInfoItem/OrderInfoItem";

interface IButtonOptions {
    nextPagePathname: string,
    disabled: boolean,
    name: string,
    nextStep: number
}

const OrderInfo = () => {
    const [buttonOptions, setButtonOptions] = useState<IButtonOptions | null | undefined>(null);
    const [orderInfo, setOrderInfo] = useState<Array<IOrderInfoData> | null>(null);
    const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);

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

    function openOrderModalHandler() {
        setOrderModalOpen((prev) => !prev);
    }

    function sendOrderHanlder() {
        dispatch(sendOrderData(orderData));
        setOrderModalOpen(false);
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
                                    <OrderInfoItem 
                                        key={item.label}
                                        value={item.value}
                                        label={item.label}
                                    />
                            ))
                            :
                            <div>Здесь будут ваши данные о заказе</div>
                    }
                </div>
                <OrderPrice />
                <div className={styles.nextBtnWrapper}>
                    {
                        location.pathname === "/order/total"
                        ?
                        <Button
                            onClick={openOrderModalHandler}
                            apperance='primary'
                            className={classNames(styles.nextBtn)}
                        >
                            {t("Order")}
                        </Button>
                        :
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
                    }
                </div>
            </div>
            <ModalStandart
                isOpen={orderModalOpen}
                setOpen={setOrderModalOpen}
            >
                <ModalStandartBlank 
                    title={t("Confirm order")}
                    confirmHandler={sendOrderHanlder}
                    cancelHanlder={() => setOrderModalOpen(false)}
                />
            </ModalStandart>
        </div>
    )
}

export default OrderInfo;