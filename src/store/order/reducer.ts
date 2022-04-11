import { createReducer } from "@reduxjs/toolkit";
import type { IOrder } from "./types";

import {
    orderSetCityId,
    orderSetPointId,
    setAllCarsData,
    setAllCarsDataLoading,
    setAllCarsDataRequestError,
    setOrderData,
    setCarsCategoriesData,
    setOrderStepsPassed,
    setCurrentCar,
    orderSetCarId
} from "./actions";
import { setCurrentCity } from "store/location/cities/actions";
import { orderInfo, stepsPassed } from "constants/localStorageKeys";

const orderFormLocalStorage = JSON.parse(localStorage.getItem(orderInfo) as string);
const stepsPassedFromLocalStorage = JSON.parse(localStorage.getItem(stepsPassed) as string);

const initialState: IOrder = {
    data: orderFormLocalStorage ? orderFormLocalStorage : {
        orderStatusId: null,
        cityId: null,
        pointId: null,
        carId: null,
        color: null,
        dateFrom: null,
        dateTo: null,
        rateId: null,
        isFullTank: false,
        isNeedChildChair: false,
        isRightWheel: false,
    },
    options: {
        cars: {
            data: null,
            current: null,
            categories: null,
            isLoading: false,
            error: null,
        },
    },
    stepsPassed: stepsPassedFromLocalStorage ? stepsPassedFromLocalStorage : 0,
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
        .addCase(orderSetCarId, (state, action) => {
            state.data.carId = action.payload
        })
        .addCase(setCurrentCity, (state, action) => {
            state.data.cityId = {
                id: action.payload.id,
                value: action.payload.name
            }
        })
        .addCase(setAllCarsDataLoading, (state, action) => {
            state.options.cars.isLoading = action.payload
        })
        .addCase(setAllCarsData, (state, action) => {
            state.options.cars = {
                ...state.options.cars,
                data: action.payload,
            }
        })
        .addCase(setAllCarsDataRequestError, (state, action) => {
            state.options.cars = {
                ...state.options.cars,
                data: null,
                error: action.payload
            }
        })
        .addCase(setCarsCategoriesData, (state, action) => {
            state.options.cars = {
                ...state.options.cars,
                categories: action.payload
            }
        })
        .addCase(setCurrentCar, (state, action) => {
            state.options.cars = {
                ...state.options.cars,
                current: action.payload
            }
        })
        .addCase(setOrderStepsPassed, (state, action) => {
            state.stepsPassed = action.payload
        })
})

export default order;