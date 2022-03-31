import Button from 'components/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from "./OrderInfo.module.css";

const OrderInfo = () => {

    const {t} = useTranslation();

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
                className={styles.nextBtn}
                apperance='primary'
            >
                Выбрать модель
            </Button>
        </div>
    )
}

export default OrderInfo;