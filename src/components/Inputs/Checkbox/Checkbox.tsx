import React from 'react';
import classNames from 'classnames';

import styles from "./Checkbox.module.scss";

interface ICheckbox {
    label: string,
    value: string,
    id: string,
    name: string,
    color?: string,
    className?: string,
    selected: boolean,
    onChange: (data: any) => void
}

const Checkbox: React.FC<ICheckbox> = (
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
            <input onChange={(e) => onChange(e.target.value)} className={classNames(styles.checkbox)} checked={selected} type="checkbox" id={id} name={name} value={value} />
            <label className={classNames(styles.label, {
                [styles.labelActive]: selected
            })} htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox;