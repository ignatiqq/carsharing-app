import { takeLatest, call, put } from "redux-saga/effects";
import type { AxiosResponse } from "axios";

import { FailedRequest } from "constants/errors";
import { setAllCitiesLoading, setAllCities, setAllCitiesLoadingError, getAllCities } from "../../cities/actions";
import { requestGet } from "api/requests";

const getCitiesRequest = () => {
    return requestGet("/db/city");
}

export function *getCities() {
    try {
        yield put(setAllCitiesLoading(true));

        const response: AxiosResponse = yield call(getCitiesRequest);

        if(response && response.data) {
            yield put(setAllCities(response.data.data));
        } else {
            throw new Error(FailedRequest);
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