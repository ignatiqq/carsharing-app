import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import styles from "./Select.module.css";

interface IOption {
  label: string,
  value: string
}

interface ISelect {
  options: Array<IOption>,
  searchPlaceholder: string,
  label: string,
  selected: IOption,
  onClick: (item: IOption) => void,
  customLabel?: string,
  customValue?: string
}

const Select: React.FC<ISelect> = (
  {
    options,
    searchPlaceholder,
    label, 
    selected, 
    onClick,
    customLabel,
    customValue
  }
  ) => {

  const [optionLabel, setOptionLabel] = useState<string>("label");
  const [optionValue, setOptionValue] = useState<string>("value");
  const [optionsToShow, setOptionsToShow] = useState<Array<IOption> | null>(null); 
  const [optionSearch, setOptionSearch] = useState<string>("");
  const [selectDropdownOpened, setSelectDropdownOpened] = useState<boolean>(false);

  useEffect(() => {
    if(options) {
      setOptionsToShow(options)
    }
  }, [options])

  useEffect(() => {
    const filterBySearch = (item: IOption) => item[optionLabel as keyof IOption].toLowerCase().includes(optionSearch.toLowerCase());
    setOptionsToShow(options.filter(filterBySearch))
  }, [optionSearch])

  useEffect(() => {
    if(customLabel) {
      setOptionLabel(customLabel)
    }
    if(customValue) { 
      setOptionValue(customValue)
    }
  }, [customLabel, customValue])

  const searchOptionHandler = (e: React.ChangeEvent) => {
    setOptionSearch((e.target as HTMLInputElement).value);
  }

  const openSelectDropdownHandler = () => {
    setSelectDropdownOpened(true);
  }

  const closeSelectDropdownHandler = () => {
    setSelectDropdownOpened(false);
    setOptionSearch("");
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor='search-input'>{label}</label>
      <div className={styles.selectWrapper}>
        <input
          name="search-input" 
          type="search" 
          value={selectDropdownOpened ? optionSearch : selected[optionLabel as keyof IOption]} 
          onChange={searchOptionHandler} 
          placeholder={searchPlaceholder}
          className={styles.input}
          onFocus={openSelectDropdownHandler}
          onBlur={closeSelectDropdownHandler}
        />
        <div className={classNames(styles.optionWrapper, {
          [styles.optionWrapperOpen]: selectDropdownOpened
        })}>
          {
            optionsToShow && optionsToShow.length > 0 ?
            optionsToShow.map(item => (
              <button 
                className={classNames(styles.option, {
                  [styles.optionActive]: item[optionValue as keyof IOption] === selected[optionValue as keyof IOption]
                })} 
                onClick={() => onClick(item)}
                key={item[optionValue as keyof IOption]} 
                value={item[optionValue as keyof IOption]}
              >
                {item[optionLabel as keyof IOption]}
              </button>
            ))
            :
            <div className={styles.notFound}>
              По вашему запросу ничего не найдено :(
            </div>
          }     
        </div>
      </div>
    </div>
  )
}

export default Select;