import React from 'react';

import { DatePicker } from "components";
import styles from "./RentPicker.module.scss";
import { useTranslation } from 'react-i18next';

interface IRentPicker {
    pickDate: (data: Date) => void
}

const RentPicker: React.FC<IRentPicker> = ({ pickDate }) => {

    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            <div className={styles.DatePickerName}>{t("Rental date")}:</div>
            <DatePicker 
                className={styles.DatePickerCustomInput}
                wrapperClassName={styles.DatePickerCustomWrapper}
                changeDataHandler={(item) => pickDate(item)}
            />  
        </div> 
    )
}

export default RentPicker