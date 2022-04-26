import { SET_ALL_CITIES, SET_CURRENT_CITY, SET_ALL_CITIES_LOADING , SET_ALL_CITIES_LOADING_ERROR, GET_ALL_CITIES} from "./constants";
import { createAction } from "@reduxjs/toolkit";
import type { ICurrentCity } from "./types";

export const setAllCities = createAction<Array<ICurrentCity> | undefined>(SET_ALL_CITIES)
export const setCurrentCity = createAction<ICurrentCity>(SET_CURRENT_CITY)
export const setAllCitiesLoading = createAction<boolean>(SET_ALL_CITIES_LOADING)
export const setAllCitiesLoadingError = createAction<string>(SET_ALL_CITIES_LOADING_ERROR)
export const getAllCities = createAction(GET_ALL_CITIES);