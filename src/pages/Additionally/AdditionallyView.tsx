import React from 'react';
import { useTranslation } from 'react-i18next';

import { RadioInput } from 'components';
import styles from "./Additionally.module.scss";
import { Loader } from "components";
import type { ICarData, IOrderData } from 'store/order/types';


interface IAdditionalityView {
  isLoading: boolean,
  currentCar: ICarData | null,
  orderData: IOrderData
}

const AdditionalityView: React.FC<IAdditionalityView> = ({isLoading, currentCar, orderData}) => {

  const { t } = useTranslation();

  if(isLoading) {
    const description = t("Wait until all additionally options loaded")
    return (
        <div className={styles.carsLoading}>
            <Loader className={styles.loader} description={description} />
        </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.colorText}>Цвет:</div>
        <div>
        <RadioInput 
            label={t("Any")}
            value="Any"
            id="any"
            name='additionally-color'
            className={styles.colorSelect}
            selected={orderData.color && orderData.color.value}
            onClick={(item) => console.log(item)}
          />
          {
            currentCar?.colors &&
            currentCar.colors.map(item => (
              <RadioInput 
                key={item}
                label={item}
                value={item}
                id={item}
                name='additionally-color'
                className={styles.colorSelect}
                selected={orderData.color && orderData.color.value}
                onClick={(item) => console.log(item)}
              />
            ))
          }
        </div>      
      </div>      
    </div>
  )
}

export default AdditionalityView;