import { takeLatest, call, put } from "redux-saga/effects";
import type { AxiosResponse } from "axios";

import { setAllCitiesLoading, setAllCities, setAllCitiesLoadingError, getAllCities } from "../../cities/actions";
import {CitiesService} from "api/services";


export function *getCities() {
    try {
        yield put(setAllCitiesLoading(true));

        const response: AxiosResponse = yield call(CitiesService.getCities);

        if(response && response.data) {
            yield put(setAllCities(response.data.data));
        } else {
            throw new Error("Request failed try later"); 
        }

        yield put(setAllCitiesLoading(false));
    } catch (error: any) {
        console.error(error);
        yield put(setAllCitiesLoadingError(error.message));
        yield put(setAllCitiesLoading(false));
    }
}

export function *getCitiesWatcher() {
    yield takeLatest(getAllCities, getCities)
}