import React from 'react';

import { DatePicker } from "components";
import styles from "./RentPicker.module.scss";
import { useTranslation } from 'react-i18next';

interface IRentPicker {
    pickDate: (startDate: Date, endDate: Date) => void
}

const RentPicker: React.FC<IRentPicker> = React.memo(({ pickDate }) => {

    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.DatePickerName}>{t("Rental date")}:</div>
            <DatePicker 
                className={styles.DatePickerCustomInput}
                wrapperClassName={styles.DatePickerCustomWrapper}
                changeDataHandler={pickDate}
            />  
        </div> 
    )
})

export default RentPicker