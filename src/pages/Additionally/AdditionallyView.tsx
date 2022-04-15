import React from 'react';
import { useTranslation } from 'react-i18next';

import { RadioInput } from 'components';
import styles from "./Additionally.module.scss";
import { Loader } from "components";


interface IAdditionalityView {
  isLoading: boolean
}

const AdditionalityView: React.FC<IAdditionalityView> = ({isLoading}) => {

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
        Additionality
    </div>
  )
}

export default AdditionalityView;