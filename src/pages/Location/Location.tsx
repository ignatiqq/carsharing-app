import React from 'react';

import { Header, Select } from "components";

const Location = () => {
  return (
    <>
        <div>Location</div>
        <Select 
          label='Город' 
          searchPlaceholder='Введите название'
          selected={{
            label: "Уфа",
            value: "Ufa"
          }}
          options={
            [
              {
                label: "Ульяновск",
                value: "Uljanovsk"
              },
              {
                label: "Уфа",
                value: "Ufa"
              }
            ]
          }
          onClick={item => console.log(item)}
        />
    </>
  )
}

export default Location