import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from "./Additionally.module.scss";
import { Loader } from "components";
import {ColorPicker, RentPicker} from 'components/Order/Additionally';
import type { ICarData, IOrderData, IRateOption } from 'store/order/types';


interface IAdditionalityView {
  isLoading: boolean,
  currentCar: ICarData | null,
  orderData: IOrderData,
  ratesData: Array<IRateOption> | null
}

const AdditionalityView: React.FC<IAdditionalityView> = ({isLoading, currentCar, orderData, ratesData}) => {

  const { t } = useTranslation();

  if(isLoading) {
    const description = t("Wait until all additionally options loaded")
    return (
        <div className={styles.additionallyLoading}>
            <Loader className={styles.loader} description={description} />
        </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <ColorPicker 
        orderData={orderData}
        currentCar={currentCar}
      />
      <RentPicker 
        pickDate={(item) => console.log("pick date", item)}
      />
    </div>
  )
}

export default AdditionalityView;