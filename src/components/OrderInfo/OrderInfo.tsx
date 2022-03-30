import Button from 'components/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from "./OrderInfo.module.css";

const OrderInfo = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.wrapper}>
            <div>{t("Your order")}</div>
            <div>
                <div>
                    {t("Point of issue")}
                </div>
                <div>

                </div>
                <div>
                    Ульяновск Нариманова 42
                </div>
            </div>
            <div>
                Цена от до
            </div>
            <Button apperance='primary'>
                Выбрать модель
            </Button>
        </div>
    )
}

export default OrderInfo;