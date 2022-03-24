import { takeLatest, call, put } from "redux-saga/effects";
import type { AxiosResponse } from "axios";

import { GET_ALL_CITIES } from "./constants";
import { setAllCitiesLoading, setAllCities, setAllCitiesLoadingError } from "../../actions";
import {TableCity} from "api/services";
import store from "store/store";


export function *getCities() {
    try {
        yield put(setAllCitiesLoading(true));

        const response: AxiosResponse = yield call(TableCity.getCities);

        if(response && response.data) {
            yield put(setAllCities(response.data.data));
        }

        yield put(setAllCitiesLoading(false));
    } catch (error: any) {
        console.error(error);
        yield put(setAllCitiesLoadingError(error.message));
        yield put(setAllCitiesLoading(false));
    }
}

export function *getCitiesWatcher() {
    yield takeLatest(GET_ALL_CITIES, getCities)
}