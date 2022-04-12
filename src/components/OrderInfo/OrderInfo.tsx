import Button from 'components/Button/Button';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';

import { getOrderInfoData, IOrderInfoData } from "utils/getOrderInfo";
import type { IOrder } from 'store/order/types';
import styles from "./OrderInfo.module.scss";
import classNames from 'classnames';

const getCurrentButtonOptions = (pathname: string, order: IOrder) => {
    switch(pathname) {
        case "/order/location": {
            return {
                nextPagePathname: "/order/model",
                disabled: !order.data.cityId || !order.data.pointId,
                name: "Choose model"
            }
        }

        case "/order/model": {
            return {
                nextPagePathname: "/order/additionality",
                disabled: true,
                name: "Additionality"
            }
        }
    }
}

interface IButtonOptions {
    nextPagePathname: string,
    disabled: boolean,
    name: string
}

const OrderInfo = () => {
    const [buttonOptions, setButtonOptions] = useState<IButtonOptions | null | undefined>(null);
    const [orderInfo, setOrderInfo] = useState<Array<IOrderInfoData> | null>(null);

    const {t} = useTranslation();
    const location = useLocation();

    const { order } = useAppSelector(({order}) => ({
        order: order
    }))

    useEffect(() => {
        setButtonOptions(getCurrentButtonOptions(location.pathname, order));
        setOrderInfo(getOrderInfoData(order.data));
    }, [location.pathname, order])

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{t("Your order")}:</div>
            <div className={styles.optionsWrapper}>
                {
                    orderInfo && orderInfo.length > 0 ?
                    orderInfo.map(item => (
                        <div className={styles.orderInfoItemWrapper} key={item.label}>
                            <div className={styles.optionName}>
                                {t(item.label)}
                            </div>
                            <div className={styles.optionSeparator}>
                            </div>
                            <div className={styles.optionValue}>
                                {item.value}
                            </div>
                        </div>
                    ))
                    :
                    <div>Здесь будут ваши данные о заказе</div>
                }
            </div>
            <div className={styles.priceWrapper}>
                <span className={styles.price}>{t("Price")}</span> от 8000 до 12000 &#8381;
            </div>
            <Link style={{color: "#FFFFFF"}} to={buttonOptions && !buttonOptions.disabled ? buttonOptions.nextPagePathname : location.pathname}>
                <Button 
                    disabled={buttonOptions?.disabled}
                    className={classNames(styles.nextBtn)}
                    apperance='primary'
                >
                        {buttonOptions && t(buttonOptions.name)}
                </Button>
            </Link>
        </div>
    )
}

export default OrderInfo;