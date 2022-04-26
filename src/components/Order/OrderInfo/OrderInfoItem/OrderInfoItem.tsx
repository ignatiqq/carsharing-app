import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from "./OrderInfoItem.module.scss";

interface IOrderInfoItem {
    label: string,
    value: string | number | true
}

const OrderInfoItem: React.FC<IOrderInfoItem> = ({label, value}) => {

  const { t } = useTranslation();

  return (
    <div className={styles.orderInfoItemWrapper} key={label}>
      <div className={styles.optionName}>{t(label)}</div>
      <div className={styles.optionSeparator} />
      <div className={styles.optionValue}>
        {typeof value === 'string' ? t(value) : value}
      </div>
    </div>
  );
}

export default OrderInfoItem