import React from "react";
import classNames from "classnames";

import styles from "./Radio.module.scss";

interface IRadio {
    label: string,
    value: string,
    id: string,
    name: string,
    color?: string,
    className?: string,
    onClick: (data: any) => void
}

const Radio: React.FC<IRadio> = (
    {
        label,
        value,
        id,
        name,
        onClick,
        className
    }
) => {
    return (
        <div onClick={onClick} className={classNames(styles.wrapper, className)}>
            <input className={classNames(styles.radio)} type="radio" id={id} name={name} value={value} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Radio;