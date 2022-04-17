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
    onChange: (data: any) => void
}

const Radio: React.FC<IRadio> = (
    {
        label,
        value,
        id,
        name,
        onChange,
        selected,
        className
    }
) => {
    
    return (
        <div className={classNames(styles.wrapper, className)}>
            <input onChange={(e) => onChange(e.target.value)} className={classNames(styles.radio)} defaultChecked={id === selected} type="radio" id={id} name={name} value={value} />
            <label className={classNames(styles.label, {
                [styles.labelActive]: selected === id
            })} htmlFor={id}>{label}</label>
        </div>
    )
}

export default Radio;