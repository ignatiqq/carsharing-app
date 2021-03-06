import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import styles from "./Additionally.module.scss";
import { Loader } from "components";
import {ColorPicker, RentPicker, TariffPicker, AdditionallyPicker} from 'components/Order/Additionally';
import type { ICarData, IOrderData, IRateOption } from 'store/order/types';


interface IAdditionalityView {
  isLoading: boolean,
  currentCar: ICarData | null,
  orderData: IOrderData,
  ratesData: IRateOption | null,
  setAdditionallyOption: (data: string) => void,
  pickDate: (startDate: Date, endDate: Date) => void,
  setColorOption: (color: string) => void,
  setRateOption: (rate: string) => void
}

const AdditionalityView: React.FC<IAdditionalityView> = ({
    isLoading,
    currentCar,
    orderData,
    ratesData,
    setAdditionallyOption,
    pickDate,
    setColorOption,
    setRateOption
  }) => {

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
        color={orderData && orderData.color}
        currentCar={currentCar}
        setColorOption={setColorOption}
      />
      <RentPicker 
        dateTo={orderData.dateTo}
        pickDate={pickDate}
      />
      <TariffPicker 
        rates={ratesData}
        currentRate={orderData.rateId}
        setRateOption={setRateOption}
      />
      <AdditionallyPicker 
        orderData={orderData}
        setAdditionallyOption={setAdditionallyOption}
      />
    </div>
  )
}

export default AdditionalityView;