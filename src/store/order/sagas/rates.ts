import { takeLatest, put, call } from "redux-saga/effects";

import { getOrderRates, setOrderRatesLoading, setOrderRates, setOrderRatesError } from "../actions";
import { requestGet } from "api/requests";
import { AxiosResponse } from "axios";
import type { IRateOption } from "../types";
import { FailedRequest } from "constants/errors";

const getOrderRatesData = () => {
    return requestGet("/db/rates");
}

function *getRatesData() {
    try {

        yield put(setOrderRatesLoading(true));

        const response: AxiosResponse<Array<IRateOption>> = yield call(getOrderRatesData);

        if(response.status < 300) {
            yield put(setOrderRates(response.data))
        } else {
            throw new Error(FailedRequest)
        }

    } catch (error: any) {
        console.error(error.message);
        yield put(setOrderRatesError(error.message))
    } finally {
        yield put(setOrderRatesLoading(false));
    }

}


export function *getRatesWatcher() {
    yield takeLatest(getOrderRates, getRatesData);
}