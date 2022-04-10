import { takeLatest, put, call } from "redux-saga/effects";
import type {AxiosResponse} from "axios";

import type { IAllCarsData } from "../types";
import {getAllCarsData, setAllCarsData, setAllCarsDataRequestError} from "../actions";
import { CarsService } from "api/services";
import { setAllCarsDataLoading } from "../actions";

function *getCarsData() {
    try {
        yield put(setAllCarsDataLoading(true));

        const response: AxiosResponse<IAllCarsData> = yield call(CarsService.getCars);

        if(response.status < 300) {
            yield put(setAllCarsData(response.data))
        } else {
            throw new Error("Error: Something go wrong, try later")
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