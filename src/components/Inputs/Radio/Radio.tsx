import React from "react";
import classNames from "classnames";

import styles from "./Radio.module.scss";

interface IRadio {
    label: string,
    value: string,
    id: string,
    name: string,
    color?: string,
    className?: string
}

const Radio: React.FC<IRadio> = (
    {
        label,
        value,
        id,
        name,
        color = "#0ec261",
        className
    }
) => {
    return (
        <>
            <input className={classNames(styles.radio)} type="radio" id={id} name={name} value={value} />
            <label htmlFor={id}>{label}</label>
        </>
    )
}

export default Radio;