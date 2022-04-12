import { createReducer } from "@reduxjs/toolkit";
import type { IOrder } from "./types";

import { orderSetCityId, orderSetPointId, setOrderData } from "./actions";
import { setCurrentCity } from "store/location/cities/actions";


const initialState: IOrder = {
    data: {
        orderStatusId: null,
        cityId: null,
        pointId: null,
        carId: null,
        color: null,
        dateFrom: null,
        dateTo: null,
        price: 0,
        rateId: null,
        isFullTank: false,
        isNeedChildChair: false,
        isRightWheel: false,
    },
    price: 0
};

const order = createReducer(initialState, (builder) => {
    builder
        .addCase(setOrderData, (state, action) => {
            state = action.payload
        })
        .addCase(orderSetCityId, (state, action) => {
            state.data.cityId = action.payload
        })
        .addCase(orderSetPointId, (state, action) => {
            state.data.pointId = action.payload
        })
        .addCase(setCurrentCity, (state, action) => {
            state.data.cityId = {
                id: action.payload.id,
                value: action.payload.name
            }
        })
})

export default order;