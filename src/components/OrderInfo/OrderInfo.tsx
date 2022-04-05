import Button from 'components/Button/Button';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';

import type { IOrder } from 'store/order/types';
import styles from "./OrderInfo.module.css";
import classNames from 'classnames';

const getCurrentButtonOptions = (pathname: string, order: IOrder) => {
    switch(pathname) {
        case "/order/location": {
            return {
                nextPagePathname: "/order/model",
                disabled: !order.cityId || !order.pointId,
                name: "Choose model"
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

    const {t} = useTranslation();
    const location = useLocation();

    const { order } = useAppSelector(({order}) => ({
        order: order
    }))

    useEffect(() => {
        setButtonOptions(getCurrentButtonOptions(location.pathname, order))
    }, [location.pathname, order])

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{t("Your order")}:</div>
            <div className={styles.optionsWrapper}>
                <div className={styles.optionName}>
                    {t("Point of issue")}
                </div>
                <div className={styles.optionSeparator}>
                    .....................
                </div>
                <div className={styles.optionValue}>
                    Ульяновск Нариманова 42
                </div>
            </div>
            <div className={styles.priceWrapper}>
                <span className={styles.price}>{t("Price")}</span> от 8000 до 12000 &#8381;
            </div>
                <Button 
                    disabled={buttonOptions?.disabled}
                    className={classNames(styles.nextBtn, {
                    })}
                    apperance='primary'
                >
                    <Link style={{color: "#FFFFFF"}} to={buttonOptions ? buttonOptions.nextPagePathname : location.pathname}>
                        {buttonOptions && t(buttonOptions.name)}
                    </Link>
                </Button>
        </div>
    )
}

export default OrderInfo;