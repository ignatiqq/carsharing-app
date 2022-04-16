import React from 'react'
import { useTranslation } from 'react-i18next';

import { CheckboxInput, RadioInput } from 'components';
import { IOrderObject, IRateOption } from 'store/order/types';
import styles from "./TariffPicker.module.scss";

interface ITariffPicker {
  rates: IRateOption | null,
  currentRate: IOrderObject | null
}

const TariffPicker: React.FC<ITariffPicker> = React.memo(({ rates, currentRate }) => {

  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.tariffText}>{t("Tariff")}</div>
      <div className={styles.tariffWrapper}>
        {
          rates && rates.data &&
          rates.data.map(item => (
            <RadioInput 
              key={item.id}
              label={`${item.rateTypeId.name}, ${item.price} / ${item.rateTypeId.unit}`}
              value={item.rateTypeId.name}
              id={item.id}
              name="order-tariff"
              className={styles.tariffCustomRadio}
              selected={currentRate && currentRate.id}
              onClick={(item) => console.log(item)}
            />
          ))
        }
      </div>
    </div>
  )
})

export default TariffPicker;