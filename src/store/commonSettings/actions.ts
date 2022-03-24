import { SET_ALL_CITIES, SET_CURRENT_CITY, SET_ALL_CITIES_LOADING , SET_ALL_CITIES_LOADING_ERROR} from "./constants";

export const setAllCities = (data: Array<object>) => ({
    type: SET_ALL_CITIES,
    payload: data
})

export const setCurrentCity = (data: object) => ({
    type: SET_CURRENT_CITY,
    payload: data
})

export const setAllCitiesLoading = (data: boolean) => ({
    type: SET_ALL_CITIES_LOADING,
    payload: data
})

export const setAllCitiesLoadingError = (data: string) => ({
    type: SET_ALL_CITIES_LOADING_ERROR,
    payload: data
})