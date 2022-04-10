import { takeLatest, put, call, all, fork } from "redux-saga/effects";

import { FailedRequest } from "constants/errors";
import {
    getAllCarsData,
    setAllCarsData,
    setAllCarsDataRequestError,
    setCarsCategoriesData
} from "../actions";
import { CarsService, CategoriesService } from "api/services";
import { setAllCarsDataLoading } from "../actions";

function *getCarsData() {
    try {
        yield put(setAllCarsDataLoading(true));

        const { carsDataResponse, categoriesDataResponse } = yield all({
            carsDataResponse: call(CarsService.getCars),
            categoriesDataResponse: call(CategoriesService.getCarCategories)
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