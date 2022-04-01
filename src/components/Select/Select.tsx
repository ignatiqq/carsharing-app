import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { IOption, ISelect } from "./types";
import styles from "./Select.module.css";


const Select: React.FC<ISelect> = (
  {
    options,
    searchPlaceholder = "Start typing anything",
    label, 
    selected, 
    onClick,
    customLabel = "label",
    customValue = "value"
  }
  ) => {

  const [optionLabel, setOptionLabel] = useState<string>(customLabel);
  const [optionValue, setOptionValue] = useState<string>(customValue);
  const [optionsToShow, setOptionsToShow] = useState<any>(null); 
  const [optionSearch, setOptionSearch] = useState<string>("");
  const [selectDropdownOpened, setSelectDropdownOpened] = useState<boolean>(false);

  const { t } = useTranslation();

  useEffect(() => {
    if(options) {
      setOptionsToShow(options)
    }
  }, [options])

  useEffect(() => {
    if(options) {
      const filterBySearch = (item: IOption) => item[optionLabel as keyof IOption].toLowerCase().includes(optionSearch.toLowerCase());
      setOptionsToShow(options.filter(filterBySearch))
    }
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
      <label className={styles.inputLabel} htmlFor='search-input'>{t(label)}</label>
      <div className={styles.selectWrapper}>
        <input
          name="search-input" 
          type="search" 
          value={selectDropdownOpened ? optionSearch : selected ? selected[optionLabel as keyof IOption] : optionSearch} 
          onChange={searchOptionHandler} 
          placeholder={t(searchPlaceholder)}
          className={styles.input}
          onFocus={openSelectDropdownHandler}
          onBlur={closeSelectDropdownHandler}
        />
        <div className={classNames(styles.optionWrapper, {
          [styles.optionWrapperOpen]: selectDropdownOpened
        })}>
          {
            optionsToShow && optionsToShow.length > 0 ?
            optionsToShow.map((item: IOption) => (  
              <button 
                className={classNames(styles.option, {
                  [styles.optionActive]: item[optionValue as keyof IOption] === selected && selected[optionValue as keyof IOption]
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