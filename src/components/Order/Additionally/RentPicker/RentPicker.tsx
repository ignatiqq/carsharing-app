import React from 'react';
import { useTranslation } from 'react-i18next';

import { DatePicker } from "components";
import { formatDateByLanguage } from 'utils/dateFormatter';
import styles from "./RentPicker.module.scss";

interface IRentPicker {
    pickDate: (startDate: Date, endDate: Date) => void,
    dateTo: number | null
}

const RentPicker: React.FC<IRentPicker> = React.memo(({ pickDate, dateTo }) => {

    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.DatePickerName}>{t("Rental date")}:</div>
            <DatePicker 
                className={styles.DatePickerCustomInput}
                wrapperClassName={styles.DatePickerCustomWrapper}
                changeDataHandler={pickDate}
                dateTo={dateTo}
            />  
        </div> 
    )
})

export default RentPicker