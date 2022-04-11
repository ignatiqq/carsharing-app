import { createAction } from "@reduxjs/toolkit";
import {
    ORDER_SET_CITY_ID,
    ORDER_SET_POINT_ID,
    SET_ORDER_DATA,
    GET_ALL_CARS_DATA,
    SET_ALL_CARS_DATA_LOADING,
    SET_ALL_CARS_DATA,
    SET_ALL_CARS_DATA_REQUEST_ERROR,
    SET_CARS_CATEGORIES_DATA,
    SET_ORDER_STEPS_PASSED,
    SET_CURRENT_CAR,
    ORDER_SET_CAR_ID
} from "./constants";
import {IOrderObject, IOrder, IAllCarsData, ICarsCategories, ICarData} from "./types";

export const orderSetCityId = createAction<IOrderObject | null>(ORDER_SET_CITY_ID);
export const orderSetPointId = createAction<IOrderObject | null>(ORDER_SET_POINT_ID);
export const orderSetCarId = createAction<IOrderObject | null>(ORDER_SET_CAR_ID);
export const setOrderData = createAction<IOrder>(SET_ORDER_DATA);

export const getAllCarsData = createAction(GET_ALL_CARS_DATA);
export const setAllCarsDataLoading = createAction<boolean>(SET_ALL_CARS_DATA_LOADING);
export const setAllCarsData = createAction<IAllCarsData>(SET_ALL_CARS_DATA);
export const setAllCarsDataRequestError = createAction<string>(SET_ALL_CARS_DATA_REQUEST_ERROR);
export const setCurrentCar = createAction<ICarData>(SET_CURRENT_CAR);

export const setCarsCategoriesData = createAction<ICarsCategories>(SET_CARS_CATEGORIES_DATA);

export const setOrderStepsPassed = createAction<number>(SET_ORDER_STEPS_PASSED);