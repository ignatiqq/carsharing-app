import classNames from "classnames";
import React from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import { enUS as en, ru } from "date-fns/locale";

import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { getUTCDate } from "utils/dateFormatter";
import styles from "./Datepicker.module.scss";

interface IDatepicker {
    changeDataHandler: (startDate: Date, endDate: Date) => void,
    className?: string,
    wrapperClassName?: string
}

const Datepicker: React.FC<IDatepicker> = ({changeDataHandler, className, wrapperClassName}) => {
    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);

    const { t, i18n } = useTranslation();
    

    React.useEffect(() => {
        setStartDate(getUTCDate(Date.now()));
        registerLocale("ru", ru);
        registerLocale("en", en);
    }, [])

    const changeStartDate = (date: Date | null) => {
        setStartDate(date);
        if(endDate && date) {
            changeDataHandler(date, endDate)
        }
    }

    const changeEndDate = (date: Date | null) => {
        setEndDate(date);
        if(startDate && date) {
            changeDataHandler(startDate, date)
        }
    }

    return (
        <div className={classNames(styles.wrapper, wrapperClassName)}>
            <div className={styles.pickerItem}>
                <span className={styles.pickerItemSpan}>{t("From")}</span>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => changeStartDate(date)}
                    locale={i18n.resolvedLanguage}
                    dateFormat="Pp"
                    showTimeSelect
                    className={className}
                />
            </div>
            <div className={styles.pickerItem}>
                <span className={styles.pickerItemSpan}>{t("To")}</span>
                <DatePicker
                    selected={endDate ? endDate : null}
                    onChange={(date) => changeEndDate(date)}
                    locale={i18n.resolvedLanguage}
                    dateFormat="Pp"
                    className={className}
                    showTimeSelect
                    placeholderText={t("Choose date and time")}
                />
            </div>    
        </div>
    );
}

export default Datepicker;