import { createAction } from "@reduxjs/toolkit";
import {
    ORDER_SET_CITY_ID,
    ORDER_SET_POINT_ID,
    SET_ORDER_DATA_BY_ID,
    GET_ALL_CARS_DATA,
    SET_ALL_CARS_DATA_LOADING,
    SET_ALL_CARS_DATA,
    SET_ALL_CARS_DATA_REQUEST_ERROR,
    SET_CARS_CATEGORIES_DATA,
    SET_ORDER_STEPS_PASSED,
    SET_CURRENT_CAR,
    ORDER_SET_CAR_ID,
    GET_ORDER_RATES,
    SET_ORDER_RATES,
    SET_ORDER_RATES_LOADING,
    SET_ORDER_RATES_ERROR,
    SET_ADDITIONALLY_BOOLEAN_OPTION,
    ORDER_SET_DATE_FROM,
    ORDER_SET_DATE_TO,
    ORDER_SET_COLOR,
    ORDER_SET_RATE_ID,
    ORDER_SET_PRICE,
    SEND_ORDER_DATA,
    SEND_ORDER_DATA_LOADING,
    SET_ORDER_ID,
    GET_ORDER_DATA_BY_ID,
    GET_ORDER_DATA_LOADING,
    GET_ORDER_DATA_ERROR
} from "./constants";
import {IOrderObject, IAllCarsData, ICarsCategories, ICarData, IRateOption, IOrderData} from "./types";

export const orderSetCityId = createAction<IOrderObject | null>(ORDER_SET_CITY_ID);
export const orderSetPointId = createAction<IOrderObject | null>(ORDER_SET_POINT_ID);
export const orderSetCarId = createAction<IOrderObject | null>(ORDER_SET_CAR_ID);
export const orderSetDateFrom = createAction<number>(ORDER_SET_DATE_FROM);
export const orderSetDateTo = createAction<number>(ORDER_SET_DATE_TO);
export const orderSetColor = createAction<string>(ORDER_SET_COLOR);
export const orderSetRateId = createAction<IOrderObject>(ORDER_SET_RATE_ID);
export const orderSetPrice = createAction<number>(ORDER_SET_PRICE);
export const setOrderDataById = createAction<IOrderData>(SET_ORDER_DATA_BY_ID);
export const setAdditionallyBooleanOption = createAction<string>(SET_ADDITIONALLY_BOOLEAN_OPTION);

export const getAllCarsData = createAction(GET_ALL_CARS_DATA);
export const setAllCarsDataLoading = createAction<boolean>(SET_ALL_CARS_DATA_LOADING);
export const setAllCarsData = createAction<IAllCarsData>(SET_ALL_CARS_DATA);
export const setAllCarsDataRequestError = createAction<string>(SET_ALL_CARS_DATA_REQUEST_ERROR);
export const setCurrentCar = createAction<ICarData>(SET_CURRENT_CAR);
export const setCarsCategoriesData = createAction<ICarsCategories>(SET_CARS_CATEGORIES_DATA);

export const setOrderStepsPassed = createAction<number>(SET_ORDER_STEPS_PASSED);
export const getOrderRates = createAction(GET_ORDER_RATES);
export const setOrderRates = createAction<IRateOption | null>(SET_ORDER_RATES);
export const setOrderRatesLoading = createAction<boolean>(SET_ORDER_RATES_LOADING);
export const setOrderRatesError = createAction<string>(SET_ORDER_RATES_ERROR);

export const sendOrderData = createAction<IOrderData>(SEND_ORDER_DATA);
export const sendOrderDataLoading = createAction<boolean>(SEND_ORDER_DATA_LOADING);
export const setOrderId = createAction<string>(SET_ORDER_ID);
export const getOrderDataById = createAction<string>(GET_ORDER_DATA_BY_ID);
export const getOrderDataLoading = createAction<boolean>(GET_ORDER_DATA_LOADING);
export const getOrderDataError = createAction<string>(GET_ORDER_DATA_ERROR);