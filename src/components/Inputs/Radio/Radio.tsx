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
    selected: string | null,
    onClick: (data: any) => void
}

const Radio: React.FC<IRadio> = (
    {
        label,
        value,
        id,
        name,
        onClick,
        selected,
        className
    }
) => {

    return (
        <div onClick={onClick} className={classNames(styles.wrapper, className)}>
            <input className={classNames(styles.radio)} type="radio" id={id} name={name} value={value} />
            <label className={classNames(styles.label, {
                [styles.labelActive]: selected === id
            })} htmlFor={id}>{label}</label>
        </div>
    )
}

export default Radio;