import { createReducer } from "@reduxjs/toolkit";
import type { IOrder } from "./types";

import { orderSetCityId, orderSetPointId, setOrderData } from "./actions";
import { setCurrentCity } from "store/location/cities/actions";
import { orderInfo } from "constants/localStorageKeys";

const orderFormLocalStorage =  JSON.parse(localStorage.getItem(orderInfo) as string);

const initialState: IOrder = orderFormLocalStorage ? orderFormLocalStorage : {
  orderStatusId: null,
  cityId: null,
  pointId: null,
  carId: null,
  color: null,
  dateFrom: null,
  dateTo: null,
  rateId: null,
  price: 0,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
};

const order = createReducer(initialState, (builder) => {
    builder
        .addCase(setOrderData, (state, action) => {
            state = action.payload
        })
        .addCase(orderSetCityId, (state, action) => {
            state.cityId = action.payload
        })
        .addCase(orderSetPointId, (state, action) => {
            state.pointId = action.payload
        })
        .addCase(setCurrentCity, (state, action) => {
            state.cityId = {
                id: action.payload.id,
                value: action.payload.name
            }
        })
})

export default order;