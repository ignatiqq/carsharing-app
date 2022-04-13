import { takeLatest, put, call, all, fork } from "redux-saga/effects";

import { FailedRequest } from "constants/errors";
import {
    getAllCarsData,
    setAllCarsData,
    setAllCarsDataRequestError,
    setCarsCategoriesData
} from "../actions";
import { setAllCarsDataLoading } from "../actions";
import { requestGet } from "api/requests";

const getCarsRequest = () => {
    return requestGet("/db/car/")
}

const getCategoriesRequest = () => {
    return requestGet("/db/category/")
}

function *getCarsData() {
    try {
        yield put(setAllCarsDataLoading(true));

        const { carsDataResponse, categoriesDataResponse } = yield all({
            carsDataResponse: call(getCarsRequest),
            categoriesDataResponse: call(getCategoriesRequest)
        })

        if(carsDataResponse.status < 300) {
            yield put(setAllCarsData(carsDataResponse.data))
        } else {
            throw new Error(FailedRequest)
        }

        if(categoriesDataResponse.status < 300) {
            yield put(setCarsCategoriesData(categoriesDataResponse.data));
        } else {
            throw new Error(FailedRequest)
        }


    } catch (e: any) {
        console.error(e.message);
        yield put(setAllCarsDataRequestError(e.message))
    } finally {
        yield put(setAllCarsDataLoading(false))
    }
}

export function *getCarsDataWatcher() {
    yield takeLatest(getAllCarsData, getCarsData);
}