import { createReducer } from "@reduxjs/toolkit";
import type { IOrder, IOrderData } from "./types";

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
    orderSetCarId,
    setOrderRates,
    setOrderRatesLoading,
    setOrderRatesError,
    setAdditionallyBooleanOption,
    orderSetDateFrom,
    orderSetDateTo,
    orderSetColor,
    orderSetRateId,
    orderSetPrice
} from "./actions";
import { setCurrentCity } from "store/location/cities/actions";

const initialState: IOrder = {
    data: {
        orderStatusId: null,
        cityId: null,
        pointId: null,
        carId: null,
        color: "",
        dateFrom: null,
        dateTo: null,
        price: 0,
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
        rates: {
            data: null,
            isLoading: false,
            error: null
        }
    },
    stepsPassed: 0,
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
        .addCase(orderSetDateFrom, (state, action) => {
            state.data.dateFrom = action.payload
        })
        .addCase(orderSetDateTo, (state, action) => {
            state.data.dateTo = action.payload
        })
        .addCase(orderSetColor, (state, action) => {
            state.data.color = action.payload
        })
        .addCase(orderSetRateId, (state, action) => {
            state.data.rateId = action.payload
        })
        .addCase(orderSetPrice, (state, action) => {
            state.data.price = action.payload
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
        .addCase(setOrderRates, (state, action) => {
            state.options.rates = {
                ...state.options.rates,
                data: action.payload,
                isLoading: false
            }
        })
        .addCase(setOrderRatesLoading, (state, action) => {
            state.options.rates = {
                ...state.options.rates,
                isLoading: action.payload
            }
        })
        .addCase(setOrderRatesError, (state, action) => {
            state.options.rates = {
                ...state.options.rates,
                data: null,
                error: action.payload
            }
        })
        .addCase(setAdditionallyBooleanOption, (state, action) => {
            const orderDataOptionToUpdate = state.data[action.payload as keyof IOrderData] !== undefined;
            if(orderDataOptionToUpdate && typeof orderDataOptionToUpdate === "boolean") {
                (state.data[action.payload as keyof IOrderData] as boolean) = !state.data[action.payload as keyof IOrderData] as boolean
            }
        })
})

export default order;