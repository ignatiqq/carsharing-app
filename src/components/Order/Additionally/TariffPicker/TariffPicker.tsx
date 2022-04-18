import React from 'react'
import { useTranslation } from 'react-i18next';

import { RadioInput } from 'components';
import { IOrderObject, IRateOption } from 'store/order/types';
import styles from "./TariffPicker.module.scss";

interface ITariffPicker {
  rates: IRateOption | null,
  currentRate: IOrderObject | null,
  setRateOption: (rate: string) => void
}

const TariffPicker: React.FC<ITariffPicker> = React.memo(({ rates, currentRate, setRateOption }) => {

  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.tariffText}>{t("Tariff")}</div>
      <div className={styles.tariffWrapper}>
        {
          rates && rates.data &&
          rates.data.map(item => (
            <RadioInput 
              key={item.rateTypeId.id}
              label={`${t(item.rateTypeId.name)}, ${item.price} / ${item.rateTypeId.unit}`}
              value={item.rateTypeId.id}
              id={item.rateTypeId.id}
              name="order-tariff"
              className={styles.tariffCustomRadio}
              selected={currentRate && currentRate.id}
              onChange={setRateOption}
            />
          ))
        }
      </div>
    </div>
  )
})

export default TariffPicker;