import React from 'react';

import type { IOption } from 'components/Select/types';
import { Header, Select } from "components";
import styles from "./Location.module.css";
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/hooks';

const Location = () => {
  
  const { t } = useTranslation();

  const { allCities, currentCity } = useAppSelector(({cities}) => ({
    allCities: cities.city.all.data,
    currentCity: cities.city.current
  }))

  return (
    <section className={styles.wrapper}>
        <Select 
          label={t("City")}
          selected={currentCity as any}
          options={allCities as any}
          customLabel="name"
          customValue='id'
          onClick={item => console.log(item)}
        />
        <Select 
          label={t("Point of issue")}
          selected={{
            label: "Ершова, 52",
            value: "hello world"
          }}
          onClick={(item) => console.log(item)}
          options={
            [
              {
                label: "Ульяновск",
                value: "Uljanovsk"
              },
              {
                label: "Уфа",
                value: "Ufa"
              },
              {
                label: "Ершова, 52",
                value: "hello world"
              }
            ]
          }
        />
    </section>
  )
}

export default Location